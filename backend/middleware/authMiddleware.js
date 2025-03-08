const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided, authorization denied" });
  }

  const token = authHeader.split(" ")[1];

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in the environment variables");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found, authorization denied" });
    }

    req.user = {
      id: user._id,
      role: user.role,  // Storing role for RBAC
    };

    next();
  } catch (err) {
    console.error("Token verification failed:", err.message);

    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired, please log in again" });
    }

    return res.status(401).json({ message: "Invalid token, authorization denied" });
  }
};

// Middleware for Role-based access control (RBAC)
exports.authenticateLibrarian = (req, res, next) => {
  console.log('Middleware - User Role:', req.user.role);
  if (req.user.role !== 'librarian') {
    console.error('Access denied: User role is not librarian');
    return res.status(403).json({ message: 'Access denied: Librarian role required' });
  }
  next();
};

