const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    classApplyingFor: {
        type: String,
        required: true
    },
    previousSchool: String,
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    documents: [String], // URLs to uploaded docs
    message: String,
    appliedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Admission', admissionSchema);
