const express = require("express");
const { getUserDonatedBooks } = require("../controllers/donationDashboardController");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

// Route for fetching books donated by the logged-in user
router.get("/donations", authenticate, getUserDonatedBooks);

module.exports = router;
