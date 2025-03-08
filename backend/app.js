// Importing required modules
const express = require("express"); // Express framework for building web applications
const cors = require("cors"); // CORS (Cross-Origin Resource Sharing) middleware
const dotenv = require("dotenv"); // Module to load environment variables from a .env file
const userRoutes = require("./routes/userRoutes"); // User-related routes
const authRoutes = require("./routes/authRoutes"); // Authentication-related routes
const bookDonationRoutes = require('./routes/bookDonationRoutes');
const librarianDashboardRoutes = require('./routes/librarianDashboardRoutes');
const donationDashboardRoutes = require('./routes/donationDashboardRoutes');
const contactRoutes = require('./routes/contactRoute');
const borrowRoutes = require("./routes/borrowRoutes");

const connectDB = require("./config/db"); // Database connection function
const path = require("path");


// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to the database
connectDB();

// Define application routes
app.use("/api/users", userRoutes); // User routes under /api/users
app.use("/api/auth", authRoutes); // Authentication routes under /api/auth
app.use('/api/book-donation', bookDonationRoutes);
app.use('/api/librarian-dashboard', librarianDashboardRoutes);
app.use('/api/donation-dashboard', donationDashboardRoutes);
app.use('/api/contact', contactRoutes);
app.use("/api/borrow ", borrowRoutes);



// Handle 404 errors for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found." });
});

// Global error handler for catching server-side errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error." });
});

// Export the app for use in other modules
module.exports = app;
