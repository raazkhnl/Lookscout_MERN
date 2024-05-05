const express = require('express')
const router = express.Router()

const contactUsController = require("../controller/contactUs")

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require('../controller/user/userSignIn')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')

// Contact Us
router.post('/contact-us', contactUsController)

// User
router.post("/signup",userSignUpController)
router.post("/login",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

//Admin 
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

module.exports= router