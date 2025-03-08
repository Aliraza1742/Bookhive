const Book = require('../models/Book');

// Add a new book donation
exports.donateBook = async (req, res) => {
  try {
    const { title, author, isbn, condition } = req.body;
    console.log("Parsed Request Body:", req.body);

    // Check if a book with the same ISBN already exists
    const existingBook = await Book.findOne({ isbn });
    if (existingBook) {
      return res.status(400).json({
        message: 'A book with this ISBN already exists. Please check the ISBN and try again.',
      });
    }

    // Create a new book instance if no duplicate ISBN is found
    const newBook = new Book({
      title,
      author,
      isbn,
      condition,
      donor: req.user.id,
    });

    // Save the new book to the database
    const savedBook = await newBook.save();

    res.status(201).json({
      message: 'Book donated successfully!',
      book: savedBook,
    });
  } catch (error) {
    console.error("Error during book donation:", error);
    res.status(500).json({ message: 'Failed to donate book', error: error.message });
  }
};
