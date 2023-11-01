const Pool = require('pg').Pool
// const pool = new Pool({
//       user:"postgres",
//       password:"admin",
//       host:"localhost",
//       port:9999,
//       database:"population"
// })

const pool = new Pool({
      connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    })

    pool.connect((err)=>{
      if(err) throw err
      console.log("Conected")
    })

module.exports = pool