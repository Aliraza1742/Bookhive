const express = require('express');
const multer = require('multer');
const { donateBook } = require('../controllers/bookController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();
const upload = multer(); // Middleware for handling multipart/form-data

router.post('/donate', authenticate, upload.single('bookCover'), donateBook);

module.exports = router;
