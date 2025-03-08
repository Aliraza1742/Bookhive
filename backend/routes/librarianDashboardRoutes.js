const express = require('express');
const {
  getPendingBooks,
  acceptBook,
  deleteBookRequest,
} = require('../controllers/librarianController');
const { authenticate, authenticateLibrarian } = require('../middleware/authMiddleware'); // Import the librarian authentication middleware

const router = express.Router();

// Route to fetch all pending books (secured by librarian authentication)
router.get('/pending', authenticate, authenticateLibrarian, getPendingBooks);

// Route to accept a book donation request (secured by librarian authentication)
router.post('/accept/:id', authenticate, authenticateLibrarian, acceptBook);

// Route to delete a book request (secured by librarian authentication)
router.delete('/delete/:id',authenticate, authenticateLibrarian, deleteBookRequest);

module.exports = router;
