const express = require('express');
const { getStudents, createStudent } = require('../controllers/students');
const { getTeachers, createTeacher } = require('../controllers/teachers');
const { markAttendance, getStudentAttendance } = require('../controllers/attendance');
const { getFees, createFee } = require('../controllers/fees');
const { getTimetable, upsertTimetable } = require('../controllers/timetable');
const { sendMessage, getMessages } = require('../controllers/messages');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Student routes
router.get('/students', protect, authorize('admin'), getStudents);
router.post('/students', protect, authorize('admin'), createStudent);

// Teacher routes
router.get('/teachers', getTeachers); // Publicly viewable
router.post('/teachers', protect, authorize('admin'), createTeacher);

// Attendance routes
router.post('/attendance', protect, authorize('admin', 'teacher'), markAttendance);
router.get('/attendance/:studentId', protect, getStudentAttendance);

// Fee routes
router.get('/fees', protect, authorize('admin'), getFees);
router.post('/fees', protect, authorize('admin'), createFee);

// Timetable routes
router.get('/timetable/:class', getTimetable);
router.post('/timetable', protect, authorize('admin', 'teacher'), upsertTimetable);

// Message routes
router.post('/messages', protect, sendMessage);
router.get('/messages', protect, getMessages);

module.exports = router;
