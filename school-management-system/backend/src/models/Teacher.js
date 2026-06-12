const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    subject: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    joiningDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Teacher', teacherSchema);
