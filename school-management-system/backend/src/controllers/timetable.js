const Timetable = require('../models/Timetable');

// @desc    Get timetable for a class
// @route   GET /api/v1/timetable/:class
// @access  Public
exports.getTimetable = async (req, res, next) => {
    try {
        const timetable = await Timetable.find({ class: req.params.class });
        res.status(200).json({ success: true, data: timetable });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Create/Update timetable
// @route   POST /api/v1/timetable
// @access  Private/Admin
exports.upsertTimetable = async (req, res, next) => {
    try {
        const { class: className, section, day, subjects } = req.body;
        const timetable = await Timetable.findOneAndUpdate(
            { class: className, section, day },
            { subjects },
            { upsert: true, new: true }
        );
        res.status(200).json({ success: true, data: timetable });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
