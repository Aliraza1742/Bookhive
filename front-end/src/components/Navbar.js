import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert"; // Adjust the path as necessary

const Navbar = () => {
  const [alert, setAlert] = useState({ visible: false, type: "", message: "" });
  const navigate = useNavigate();

  const handleLogout = () => {
    setAlert({ visible: true, type: "success", message: "Logged out successfully!" });

    // Redirect to Login page after 1 second
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    // Added fixed positioning and black border at the bottom
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50 border-b-2 border-black">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/landing" className="text-2xl font-bold">
          Bookhive
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/landing"
            className="hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/add-book"
            className="hover:text-yellow-300 transition duration-300"
          >
            Donate
          </Link>
          <Link
            to="/borrow-request"
            className="hover:text-yellow-300 transition duration-300"
          >
            Borrow
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-300 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-300 transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-100 transition duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden mt-4">
        <div className="space-y-2">
          <Link
            to="/landing"
            className="block text-white hover:text-blue-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/add-book"
            className="block text-white hover:text-blue-300 transition duration-300"
          >
            Donate
          </Link>
          <Link
            to="/borrow-request"
            className="block text-white hover:text-blue-300 transition duration-300"
          >
            Borrow
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-blue-300 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-blue-300 transition duration-300"
          >
            Contact Us
          </Link>
          <button
            className="block bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-100 transition duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
          <Link
            to="/signup"
            className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Alert Component */}
      {alert.visible && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert({ visible: false, type: "", message: "" })}
        />
      )}
    </nav>
  );
};

export default Navbar;