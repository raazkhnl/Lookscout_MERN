const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')


const app = express()


// Enable CORS for all routes
// app.use(cors({
//     origin: process.env.FRONTEND_URL, // Set this to the frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,
// }));

// Alt. Define the allowed origins (frontend URLs)
const allowedOrigins = [
    'http://localhost:3000',
    'https://lookscout-mern.vercel.app',
    'https://lookscout-mern.vercel.app/'
];

app.use(cors({
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Enable cookies and credentials to pass through the request
}));

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '35mb',
    parameterLimit: 50000,
  }),
);
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})

//Base BackendURL
app.get("/", (req,res)=>{
    res.json("Backend Connected.")
})
