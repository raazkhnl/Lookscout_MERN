const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
    }catch(err){
        console.log(err)
        // throw new Error("Could not connect to the server.")
    }
}

module.exports = connectDB