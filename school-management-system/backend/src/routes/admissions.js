const express = require('express');
const { submitAdmission, getAdmissions, updateAdmissionStatus } = require('../controllers/admissions');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

router.post('/', submitAdmission);
router.get('/', protect, authorize('admin'), getAdmissions);
router.put('/:id', protect, authorize('admin'), updateAdmissionStatus);

module.exports = router;
