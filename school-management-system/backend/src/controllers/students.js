const Student = require('../models/Student');
const User = require('../models/User');

// @desc    Get all students
// @route   GET /api/v1/students
// @access  Private/Admin
exports.getStudents = async (req, res, next) => {
    try {
        const students = await Student.find().populate('user', 'name email avatar');
        res.status(200).json({ success: true, count: students.length, data: students });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Get single student
// @route   GET /api/v1/students/:id
// @access  Private
exports.getStudent = async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id).populate('user', 'name email avatar');
        if (!student) return res.status(404).json({ success: false, error: 'Student not found' });
        res.status(200).json({ success: true, data: student });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Create student
// @route   POST /api/v1/students
// @access  Private/Admin
exports.createStudent = async (req, res, next) => {
    try {
        // First create the user
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password || 'student123',
            role: 'student'
        });

        req.body.user = user._id;
        const student = await Student.create(req.body);

        res.status(201).json({ success: true, data: student });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
// Add update/delete as needed
