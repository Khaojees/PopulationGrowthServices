const Pool = require('pg').Pool
const pool = new Pool({
      user:"postgres",
      password:"admin",
      host:"localhost",
      port:9999,
      database:"population"
})

module.exports = pool