const chokidar = require('chokidar')
const path = require('path')
const fs = require('fs')

var config
var logger
var database
var cmd
var mail

var received
var sent
var queue

// EXPORTS
module.exports = {
  'init': init,
  'getFax': getFax,
  'getFaxPdf': getFaxPdf,
  'getFaxList': getFaxList,
  'sendFax': sendFax
}

function init(_config, _logger, _database, _cmd, _mail) {
  config = _config
  logger = _logger
  database = _database
  cmd = _cmd
  mail = _mail

  loadFaxDB()
  incomingFaxWatcher()

  logger.debug('Fax loaded')

  return this
}

function loadFaxDB() {
  var faxes = database.get('faxes').value()
  if (faxes) {
    received = faxes.received
    sent = faxes.sent
    queue = faxes.queue
  }
}

function addFax(list, fax) {
  database.get('faxes.' + list).push(fax).write()
}

function getFax(id) {
  return database.get('faxes.received').find({id: id}).value()
}

function getFaxPdf(id) {
  var fax = getFax(id)
  if (fax && fax.pdf) {
    return fax.pdf
  }
}

function getFaxInfo(file, cb) {
  cmd.exec(config.get('hylafax.faxinfo') + ' -c "," ' + file, (data, error) => {
    if (error || data.includes('corrupted')) {
      return
    }
    var [filename, sender, pages, quality, pagetype, received, ttr, sr, df, ec, ci1, ci2, ci3, ci4, device, receiver] = data.split(',')
    var fax = {
      'id': Math.random().toString(36).substring(2, 15),
      'file': filename,
      'sender': sender,
      'pages': pages,
      'quality': quality,
      'page': pagetype,
      'received': received,
      'timeToRecv': ttr,
      'signalRate': sr,
      'dataFormat': df,
      'errCorrect': ec,
      'callID1': ci1,
      'callID2': ci2,
      'callID3': ci3,
      'callID4': ci4
    }
    cb(fax)
  })
}

function incomingFaxWatcher() {
  // watch recvq folder for new faxes
  chokidar.watch(config.get('fax.folder')).on('add', (file) => {
    if (!file.endsWith('.txt') || database.get('faxes.received').find({txt: file}).value()) {
      return
    }
    logger.debug('recvq file detected: ' + file)
    fs.readFile(file, 'utf8', (err, data) => {
      var [tiff, device, receiver] = data.split(',')
      var fax = {
        'txt': file,
        'tiff': config.get('hylafax.folder') + '/' + tiff,
        'device': device,
        'receiver': receiver
      }
      getFaxInfo(fax.tiff, (_fax) => {
        fax = Object.assign(fax, _fax)
        fax.pdf = saveFax2Pdf(fax.tiff, fax.id)
        addFax('received', fax)

        var users = database.get('users').filter((user) => {
            return user && user.extensions.includes(receiver)
          }).value()

        for (var user of users) {
          console.log(user.email)
          sendFaxMail(user.email, fax)
        }
      })
    })
  })
}

function sendFax(file, extension, destination, cb) {
  var modem = database.get('extensions').find({ extension: extension }).value()
  var tiff = file + '.tiff'

  cmd.exec("/usr/bin/gs -q -dNOPAUSE -dBATCH -sDEVICE=tiffg4 -sPAPERSIZE=a4 -sOutputFile=" + tiff + " " + file + "-c quit", (err) => {
    if (err) { cb(err); return }
    cmd.exec(config.get('hylafax.sendfax') + ' -n -E -l -s a4 -b 9600 -B 9600 -h ' + modem + '@localhost -d ' + destination + ' ' + file, (err) => {
      if (err) { cb(err); return }
      fs.unlink(file, (err) => {
        cb(err)
      })
    })
  })
}

function getFaxList(list) {
  return database.get('faxes.' + list).value()
}

function saveFax2Pdf(file, id) {
  var name = path.basename(file).split('.')[0]
  var pdf = config.get('fax.folder') + '/' + name + '-' + id + '.pdf'
  cmd.exec(config.get('hylafax.tiff2pdf') + ' -p A4 -o ' + pdf + ' ' + file)
  return pdf
}

function sendFaxMail(to, fax) {
  var subject = 'Neues Fax von ' + fax.sender
  var html = '<h1>Es gibt ein neues Fax.<h1><br /><p>Von: ' + fax.sender + '</p><br /><a href="' + config.get('web.public_url') + '/fax/' + fax.id + '">Download</a>'
  mail(to, subject, html)
}
