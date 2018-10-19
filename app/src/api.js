const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const path = require('path')
const fs = require('fs')

var config
var logger
var database
var fax

// EXPORTS
module.exports = {
  'init': init
}

function init(_config, _logger, _database, _fax) {
  config = _config
  logger = _logger
  database = _database
  fax = _fax

  return api()
}

function api() {
  var router = express.Router();

  // allow pdf downloading without authentication
  router.get('/pdf/:id', (req, res) => {
    var faxInfo = fax.getFax(req.params.id)
    if (faxInfo && faxInfo.pdf) {
      res.sendFile(faxInfo.pdf)
    } else {
      res.json({ error: 'file not found' })
    }
  })

  router.get('/', (req, res) => {
    res.json('faxface 0.1')
  })

  router.use(auth())

  router.get('/fax/:id', (req, res) => {
    // TODO: restrict to allowed extensions
    res.json(fax.getFax(req.params.id))
  })

  router.get('/faxes/:list', (req, res) => {
    // TODO: restrict to allowed extensions
    res.json(fax.getFaxList(req.params.list))
  })

  router.post('/send', (req, res) => {
    // TODO: restrict to allowed extensions

    var name = req.body.name
    var number = req.body.number

    fs.readFile(req.files.faxfile.path, (err, data) => {
      var faxfile = __dirname + '/tmp/' + path.basename(req.files.faxfile.path)

      fs.writeFile(faxfile, data, (err) => {
        fax.sendFax(faxfile, name, number, (err, data) => {
          res.json({result: 'success'})
        })
      })
    })
  })

  router.use('/admin', admin())

  router.use((err, req, res, next) => {
    logger.error(err.stack)
    res.status(500).json({error: 'Something broke!'})
  })

  return router
}

function auth() {
  var router = express.Router()

  router.post('/login', (req, res) => {
    var user = validateEmail(req.body.username)
      ? database.get('users').find({ email: req.body.username }).value()
      : database.get('users').find({ username: req.body.username }).value()

    if (!user) {
      logger.info('user (' + req.body.username + ') not found', {module: 'auth'})
      return res.status(403).send({auth: false, token: null})
    }

    if (!bcrypt.compareSync(req.body.password, user.password)) {
      logger.info('user (' + user.username + ') used wrong password', {module: 'auth'})
      return res.status(403).send({auth: false, token: null})
    }

    var token = jwt.sign({ id: user.username }, config.get('web.jwt_secret'), {
      expiresIn: 86400 // expires in 24 hours
    })

    logger.info('login successful: ' + user.username, {module: 'auth'})
    res.status(200).send({ auth: true,
      user: {
        username: user.username,
        email: user.email,
        admin: user.admin,
        token: token
      }
    })
  })

  // BEFORE AUTH CHECK

  router.use((req, res, next) => {
    var token = req.headers['authorization']

    if (!token) {
      return res.status(403).send({ auth: false, errors: ['No token provided.'] })
    }

    jwt.verify(token, config.get('web.jwt_secret'), (err, decoded) => {
      if (err) {
        return res.status(403).send({ auth: false, errors: ['Failed to authenticate token.'] })
      }

      var user = database.get('users').find({ username: decoded.id }).value()

      if (!user) {
        return res.status(403).send({ errors: ['Can not detect user.'] })
      }

      user.token = token

      // if everything good, save for use in other routes
      res.locals.user = user
      next()
    })
  })

  // AFTER AUTH CHECK

  router.get('/me', (req, res) => {
    var user = res.locals.user
    return res.status(200).send({
      username: user.username,
      email: user.email,
      admin: user.admin,
      token: user.token
    })
  })

  router.post('/me/update', (req, res) => {
    var user = res.locals.user

    if (req.body.password) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        user.password = hash
        database.get('users').find({ username: user.username }).assign(user).write()
        logger.info('password of user ' + user.username + ' changed', {module: 'auth'})
      })
    }

    if (req.body.email) {
      user.email = req.body.email
      database.get('users').find({ username: user.username }).assign(user).write()
      logger.info('email of user ' + user.username + ' changed to: ' + user.email, {module: 'auth'})
    }

    res.json({ success: true, body: req.body })
  })

  return router
}

function admin() {
  var router = express.Router()

  router.use((req, res, next) => {
    if (!res.locals.user.admin) {
      return res.status(403).send({ errors: ['Admin only'] })
    }

    next()
  })

  router.get('/logs', (req, res) => {
    res.sendFile(path.join(__dirname, '..', config.get('logger.files.combined')))
  })

  return router
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
