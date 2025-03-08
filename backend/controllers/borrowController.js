const Book = require("../models/Book");
const BorrowRequest = require("../models/borrowerModel");

// Get books donated by other users
exports.getBooksByOtherUsers = async (req, res) => {
  try {
    const userId = req.user.id; // Currently logged-in user
    const books = await Book.find({ donatedBy: { $ne: userId }, status: "available" });

    if (books.length === 0) {
      return res.status(404).json({ message: "No books available donated by other users." });
    }

    res.status(200).json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Handle borrow request submission
exports.sendBorrowRequest = async (req, res) => {
  try {
    const userId = req.user.id; // Currently logged-in user
    const { bookId } = req.body;

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    const existingRequest = await BorrowRequest.findOne({
      book: bookId,
      status: { $in: ["requested", "accepted"] },
    });

    if (existingRequest) {
      return res
        .status(400)
        .json({ message: "This book is already requested or borrowed." });
    }

    const borrowRequest = await BorrowRequest.create({
      book: bookId,
      borrower: userId,
      status: "requested",
    });

    res.status(201).json({
      message: "Borrow request created successfully.",
      borrowRequest,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to request book." });
  }const Book = require("../models/Book");
  const BorrowRequest = require("../models/BorrowRequest");
  
  // Get books donated by other users
  exports.getBooksByOtherUsers = async (req, res) => {
    try {
      const userId = req.user.id;
      const books = await Book.find({
        donatedBy: { $ne: userId },
        status: "available",
      });
      res.status(200).json(books);
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  };
  
  // Send borrow request
  exports.sendBorrowRequest = async (req, res) => {
    try {
      const { bookId, message } = req.body;
      const userId = req.user.id;
  
      const borrowRequest = new BorrowRequest({
        bookId,
        userId,
        message,
        status: "pending",
      });
  
      await borrowRequest.save();
  
      res.status(201).json({ message: "Borrow request sent successfully." });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  };
  
};
