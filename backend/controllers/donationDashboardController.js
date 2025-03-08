const Book = require("../models/Book"); // Importing the Book model

exports.getUserDonatedBooks = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(400).json({ message: "User not authenticated" });
    }

    const userId = req.user.id; // Ensure `req.user` is defined
    console.log("Fetching books for user:", userId);

    const donatedBooks = await Book.find({ donor: userId });
    res.status(200).json({
      message: "Fetched donated books successfully",
      books: donatedBooks,
    });
  } catch (error) {
    console.error("Error in getUserDonatedBooks:", error.message);
    res.status(500).json({
      message: "Failed to fetch donated books",
      error: error.message,
    });
  }
};
