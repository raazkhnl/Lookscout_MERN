const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
// Enable CORS for all routes
app.use(cors({
    origin: process.env.FRONTEND_URL, // Set this to the frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express.json())
app.use("/api",router)

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
app.get("/", (req,res)=>{
    res.json("Backend Connected.")
})
