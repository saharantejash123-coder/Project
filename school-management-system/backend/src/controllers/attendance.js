const Attendance = require('../models/Attendance');

// @desc    Mark attendance
// @route   POST /api/v1/attendance
// @access  Private/Admin/Teacher
exports.markAttendance = async (req, res, next) => {
    try {
        req.body.markedBy = req.user.id;
        const attendance = await Attendance.create(req.body);
        res.status(201).json({ success: true, data: attendance });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Get student attendance
// @route   GET /api/v1/attendance/:studentId
// @access  Private
exports.getStudentAttendance = async (req, res, next) => {
    try {
        const attendance = await Attendance.find({ student: req.params.studentId });
        res.status(200).json({ success: true, count: attendance.length, data: attendance });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
