const Gallery = require('../models/Gallery');

// @desc    Get all gallery items
// @route   GET /api/v1/gallery
// @access  Public
exports.getGallery = async (req, res, next) => {
    try {
        const items = await Gallery.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: items.length, data: items });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Add item to gallery
// @route   POST /api/v1/gallery
// @access  Private/Admin
exports.addToGallery = async (req, res, next) => {
    try {
        req.body.uploadedBy = req.user.id;
        const item = await Gallery.create(req.body);
        res.status(201).json({ success: true, data: item });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Delete item from gallery
// @route   DELETE /api/v1/gallery/:id
// @access  Private/Admin
exports.deleteFromGallery = async (req, res, next) => {
    try {
        const item = await Gallery.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ success: false, error: 'Gallery item not found' });
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
