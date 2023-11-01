const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require("dotenv").config()
const routes = require('./routes/routes')


app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use('/',routes)
app.get('/',(req,res)=>{
      res.json(
            "hahahaha"
      )
})

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
      console.log(`server start at ${PORT}`)
})