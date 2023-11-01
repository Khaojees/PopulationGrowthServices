const Pool = require('pg').Pool
require("dotenv").config()
// const pool = new Pool({
//       user:"postgres",
//       password:"admin",
//       host:"localhost",
//       port:9999,
//       database:"population"
// })

// const pool = new Pool({
//       user:process.env.POSTGRES_USER,
//       password:process.env.POSTGRES_PASSWORD,
//       host:process.env.POSTGRES_HOST,
//       port:9999,
//       database:process.env.POSTGRES_DATABASE
// })

const pool = new Pool({
      connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    })

    pool.connect((err)=>{
      if(err) throw err
      console.log("Conected")
    })

module.exports = pool