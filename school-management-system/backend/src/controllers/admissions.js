const Admission = require('../models/Admission');

// @desc    Submit an admission form
// @route   POST /api/v1/admissions
// @access  Public
exports.submitAdmission = async (req, res, next) => {
    try {
        const admission = await Admission.create(req.body);
        res.status(201).json({ success: true, data: admission });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Get all admissions
// @route   GET /api/v1/admissions
// @access  Private/Admin
exports.getAdmissions = async (req, res, next) => {
    try {
        const admissions = await Admission.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: admissions.length, data: admissions });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Update admission status
// @route   PUT /api/v1/admissions/:id
// @access  Private/Admin
exports.updateAdmissionStatus = async (req, res, next) => {
    try {
        const admission = await Admission.findByIdAndUpdate(req.params.id, { status: req.body.status }, {
            new: true,
            runValidators: true
        });
        if (!admission) return res.status(404).json({ success: false, error: 'Admission not found' });
        res.status(200).json({ success: true, data: admission });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
