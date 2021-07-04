const {Pool} = require('pg');
const config = require('../db/db_config')

const pool = new Pool(config)

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    },
}