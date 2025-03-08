const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate ISBNs
  },
  condition: {
    type: String,
    enum: ['Good', 'Fair', 'Poor'], // Optional predefined values for book condition
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted'], // Status of the donation
    default: 'Pending',
  },
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for donor
    required: true,
  },
  librarian: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for librarian (if applicable)
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set creation date
  },
});

module.exports = mongoose.model('Book', bookSchema);
