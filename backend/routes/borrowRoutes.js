const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/authMiddleware");
const {
  getBooksByOtherUsers,
  sendBorrowRequest,
} = require("../controllers/borrowController");

console.log("getBooksByOtherUsers:", getBooksByOtherUsers); // Should not be undefined
console.log("sendBorrowRequest:", sendBorrowRequest); // Should not be undefined

// Get books donated by other users
router.get("/books-by-others", authenticate, getBooksByOtherUsers);

// Submit a borrow request
router.post("/borrow-request", authenticate, sendBorrowRequest);

module.exports = router;
