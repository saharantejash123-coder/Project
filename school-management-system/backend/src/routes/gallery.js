const express = require('express');
const { getGallery, addToGallery, deleteFromGallery } = require('../controllers/gallery');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

router.get('/', getGallery);
router.post('/', protect, authorize('admin'), addToGallery);
router.delete('/:id', protect, authorize('admin'), deleteFromGallery);

module.exports = router;
