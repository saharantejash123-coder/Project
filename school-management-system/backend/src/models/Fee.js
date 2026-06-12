const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['paid', 'pending', 'late'],
        default: 'pending'
    },
    paymentDate: Date,
    transactionId: String,
    month: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Fee', feeSchema);
