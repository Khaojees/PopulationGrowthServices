const express = require('express')
const router = express.Router()

const {getData,getCountry} = require('./controller')

router.post('/getdata',getData)
router.get('/getcountry',getCountry)

module.exports = router