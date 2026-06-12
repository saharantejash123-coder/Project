const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./src/models/User');
const connectDB = require('./src/config/db');

dotenv.config();

const seedAdmin = async () => {
    try {
        await connectDB();

        // Check if admin exists
        const adminExists = await User.findOne({ email: 'admin@school.com' });
        if (adminExists) {
            console.log('Admin user already exists');
            process.exit();
        }

        // Create admin
        await User.create({
            name: 'System Administrator',
            email: 'admin@school.com',
            password: 'adminpassword123',
            role: 'admin'
        });

        console.log('Admin user seeded successfully');
        console.log('Email: admin@school.com');
        console.log('Password: adminpassword123');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

seedAdmin();
