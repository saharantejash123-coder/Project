const Teacher = require('../models/Teacher');
const User = require('../models/User');

// @desc    Get all teachers
// @route   GET /api/v1/teachers
// @access  Public
exports.getTeachers = async (req, res, next) => {
    try {
        const teachers = await Teacher.find().populate('user', 'name email avatar');
        res.status(200).json({ success: true, count: teachers.length, data: teachers });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Create teacher
// @route   POST /api/v1/teachers
// @access  Private/Admin
exports.createTeacher = async (req, res, next) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password || 'teacher123',
            role: 'teacher'
        });

        req.body.user = user._id;
        const teacher = await Teacher.create(req.body);

        res.status(201).json({ success: true, data: teacher });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
