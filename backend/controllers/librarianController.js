const Book = require("../models/Book");

// Fetch pending books
exports.getPendingBooks = async (req, res) => {
  try {
    const pendingBooks = await Book.find({ status: "Pending" }).populate("donor", "name email");
    res.json(pendingBooks);
  } catch (error) {
    console.error("Error fetching pending books:", error);
    res.status(500).json({ message: "Failed to fetch pending books" });
  }
};

// Accept book donation request
exports.acceptBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { status: "Accepted", librarian: req.user.id },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book accepted successfully", book: updatedBook });
  } catch (error) {
    console.error("Error accepting book:", error);
    res.status(500).json({ message: "Failed to accept book" });
  }
};

// Delete book request
exports.deleteBookRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (book.status === "Accepted") {
      return res.status(400).json({ message: "Cannot delete an accepted book" });
    }

    await Book.findByIdAndDelete(id);
    res.json({ message: "Book request deleted successfully" });
  } catch (error) {
    console.error("Error deleting book request:", error);
    res.status(500).json({ message: "Failed to delete book request" });
  }
};
