const express = require('express')
const router = express.Router()

const {getData,getCountry,tryy} = require('./controller')

router.get('/tryy',tryy)
router.post('/getdata',getData)
router.get('/getcountry',getCountry)


module.exports = router