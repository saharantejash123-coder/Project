const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Enable CORS
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));

// Route files
const auth = require('./routes/auth');
const notices = require('./routes/notices');
const admissions = require('./routes/admissions');
const gallery = require('./routes/gallery');
const management = require('./routes/management');

// Mount routers
app.use('/api/v1/auth', auth);
app.use('/api/v1/notices', notices);
app.use('/api/v1/admissions', admissions);
app.use('/api/v1/gallery', gallery);
app.use('/api/v1/management', management);

// Root route
app.get('/', (req, res) => {
    res.send('School Management System API is running...');
});

// Error handler middleware (to be implemented)
// app.use(errorHandler);

module.exports = app;
