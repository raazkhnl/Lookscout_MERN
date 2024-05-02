const mongoose = require('mongoose')
const contactUsSchema = new mongoose.Schema({
    fullName: String,
    email: {
        type: String,
        required: true
    },
    phone: String,
    message: String,
    agree: Boolean,
},{
    timestamps: true
})

const contactUsModel = mongoose.model("contactUs", contactUsSchema)

module.exports = contactUsModel