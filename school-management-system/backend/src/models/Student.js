const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rollNumber: {
        type: String,
        required: true,
        unique: true
    },
    class: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    parentName: {
        type: String,
        required: true
    },
    parentPhone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    bloodGroup: String,
    enrollmentDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
