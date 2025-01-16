const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// Enable CORS for all origins
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true // Enable cookies and credentials
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
    res.json({ success: "true", message: "LISTENING TO THE REQUESTS..", timestamp: new Date().toISOString() });
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