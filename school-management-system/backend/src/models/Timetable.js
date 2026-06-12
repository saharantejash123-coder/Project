const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
    class: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    day: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        required: true
    },
    subjects: [{
        subject: String,
        teacher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Teacher'
        },
        startTime: String,
        endTime: String
    }]
}, { timestamps: true });

module.exports = mongoose.model('Timetable', timetableSchema);
