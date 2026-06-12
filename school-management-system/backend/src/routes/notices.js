const express = require('express');
const { getNotices, createNotice, updateNotice, deleteNotice } = require('../controllers/notices');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

router.route('/')
    .get(getNotices)
    .post(protect, authorize('admin'), createNotice);

router.route('/:id')
    .put(protect, authorize('admin'), updateNotice)
    .delete(protect, authorize('admin'), deleteNotice);

module.exports = router;
