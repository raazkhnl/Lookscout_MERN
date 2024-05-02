const { response } = require("express")
const contactUsModel = require("../models/contactUsModel")

async function contactUsController(req, res){
    try{
        const {fullName, email, phone, message } = req.body
        if(!email){
            throw new Error("Please provide the email.")
        }
        if(!fullName){
            throw new Error("Please provide your name.")
        }
        const contactUsData = new contactUsModel(req.body)
        const saveData = await contactUsData.save()
        res.status(200).json({
            data : saveData,
            success: true,
            error: false,
            message: "Form Submitted Successfully."
        })

    }catch(err){
        res.json({
            message: err.message,
            error: true,
            success: false,
        })
    }
}
module.exports = contactUsController