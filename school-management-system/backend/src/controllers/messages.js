const Message = require('../models/Message');

// @desc    Send a message
// @route   POST /api/v1/messages
// @access  Private
exports.sendMessage = async (req, res, next) => {
    try {
        req.body.sender = req.user.id;
        const message = await Message.create(req.body);
        res.status(201).json({ success: true, data: message });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Get my messages
// @route   GET /api/v1/messages
// @access  Private
exports.getMessages = async (req, res, next) => {
    try {
        const messages = await Message.find({
            $or: [{ sender: req.user.id }, { receiver: req.user.id }]
        }).populate('sender receiver', 'name avatar');
        res.status(200).json({ success: true, count: messages.length, data: messages });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
