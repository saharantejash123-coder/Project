const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    title: String,
    url: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['image', 'video'],
        default: 'image'
    },
    category: String,
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Gallery', gallerySchema);
