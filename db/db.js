const {Client} = require('pg')
const config = require('../db/db_config')

const client = new Client(config)

module.exports = client