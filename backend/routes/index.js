const express = require('express')

const router = express.Router()

const contactUsController = require("../controller/contactUs")

router.post('/contact-us', contactUsController)
module.exports= router