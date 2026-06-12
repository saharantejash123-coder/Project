const Notice = require('../models/Notice');

// @desc    Get all notices
// @route   GET /api/v1/notices
// @access  Public
exports.getNotices = async (req, res, next) => {
    try {
        const notices = await Notice.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: notices.length, data: notices });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Create a notice
// @route   POST /api/v1/notices
// @access  Private/Admin
exports.createNotice = async (req, res, next) => {
    try {
        req.body.postedBy = req.user.id;
        const notice = await Notice.create(req.body);
        res.status(201).json({ success: true, data: notice });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Update a notice
// @route   PUT /api/v1/notices/:id
// @access  Private/Admin
exports.updateNotice = async (req, res, next) => {
    try {
        const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!notice) return res.status(404).json({ success: false, error: 'Notice not found' });
        res.status(200).json({ success: true, data: notice });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Delete a notice
// @route   DELETE /api/v1/notices/:id
// @access  Private/Admin
exports.deleteNotice = async (req, res, next) => {
    try {
        const notice = await Notice.findByIdAndDelete(req.params.id);
        if (!notice) return res.status(404).json({ success: false, error: 'Notice not found' });
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
