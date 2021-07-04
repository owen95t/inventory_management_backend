const {Pool} = require('pg');
const config = require('../db/db_config')

const pool = new Pool(config)

module.exports = pool