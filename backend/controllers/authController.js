const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Login Controller
const loginUser = async (req, res) => {
  const { email, password, userType } = req.body;

  try {
    const user = await User.findOne({ email, role: userType });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '24h' });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error); // Log the error for debugging
    res.status(500).json({ message: "Server error", error: "An error occurred during login." });
  }
};

module.exports = { loginUser };
