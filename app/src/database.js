const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

// EXPORTS
module.exports = {
  'init': init
}

function init(config, logger) {
  const db = low(new FileSync(config.get('fax.folder') + config.get('database.file')))

  // Set some defaults (required if your JSON file is empty)
  db.defaults({
    faxes: {
      received: [],
      sent: [],
      queue: []
    },
    extensions: [],
    users: [
      {
        "username": "admin",
        "password": "$2a$10$RLck3SiG4kDUR/Ln3kUd0uV4axJnuK3W7b36agHa817316UKbMP4K", // admin
        "email": "admin@domain.tld",
        "admin": true,
        "extensions": []
      }
    ]
  }).write()

  logger.debug('Database loaded (' + config.get('database.file') + ')')

  return db
}
