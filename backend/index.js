const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// Define allowed origins
const allowedOrigins = [
    'http://localhost:3000',
    'https://lookscout-mern.vercel.app',
    'https://lookscout-mern.vercel.app/'
];

// Enable CORS for all routes
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (e.g., mobile apps or server-to-server calls)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
    credentials: true // Enable cookies and credentials to pass through the request
}));

// Middleware setup
app.use(bodyParser.json({ limit: '35mb' }));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '35mb',
    parameterLimit: 50000,
}));
app.use(express.json());
app.use(cookieParser());

// Define the base API route
app.use("/api", router);

// Base endpoint to confirm backend connection
app.get("/", (req, res) => {
    res.json({ success: "true", message: "Listening for the requests...", timestamp: new Date().toISOString() });
});

// Port and Database Connection
const PORT = process.env.PORT || 8080;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Connected to DB");
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to the database", err);
        process.exit(1); // Exit the application if DB connection fails
    });
