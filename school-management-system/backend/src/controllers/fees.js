const Fee = require('../models/Fee');

// @desc    Get all fees
// @route   GET /api/v1/fees
// @access  Private/Admin
exports.getFees = async (req, res, next) => {
    try {
        const fees = await Fee.find().populate({
            path: 'student',
            populate: { path: 'user', select: 'name' }
        });
        res.status(200).json({ success: true, count: fees.length, data: fees });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Create fee record
// @route   POST /api/v1/fees
// @access  Private/Admin
exports.createFee = async (req, res, next) => {
    try {
        const fee = await Fee.create(req.body);
        res.status(201).json({ success: true, data: fee });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
