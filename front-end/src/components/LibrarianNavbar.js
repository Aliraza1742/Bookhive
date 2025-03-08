import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Alert from "./Alert"; // Adjust the path as necessary

const LibrarianNavbar = () => {
  const [alert, setAlert] = useState({ visible: false, type: "", message: "" });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    setAlert({ visible: true, type: "success", message: "Logged out successfully!" });
    
    // Redirect to Login page after 2 seconds
    setTimeout(() => {
      navigate("/login"); // Replace "/login" with your actual login route
    }, 1000);
  };

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full border-b border-black">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/donation-management" className="text-2xl font-bold">
          Librarian Panel
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/donation-management"
            className="hover:text-yellow-300 transition duration-300"
          >
            Donation Management
          </Link>
          <Link
            to="/borrow-request-management"
            className="hover:text-yellow-300 transition duration-300"
          >
            Borrow Request Management
          </Link>
          <Link
            to="/inventory-management"
            className="hover:text-yellow-300 transition duration-300"
          >
            Inventory Management
          </Link>
        </div>

        {/* Logout Button */}
        <div className="hidden md:flex">
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
              const menu = document.getElementById("librarian-mobile-menu");
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
      <div id="librarian-mobile-menu" className="hidden md:hidden mt-4">
        <div className="space-y-2">
          <Link
            to="/donation-management"
            className="block text-white hover:text-yellow-300 transition duration-300"
          >
            Donation Management
          </Link>
          <Link
            to="/borrow-request-management"
            className="block text-white hover:text-yellow-300 transition duration-300"
          >
            Borrow Request Management
          </Link>
          <Link
            to="/inventory-management"
            className="block text-white hover:text-yellow-300 transition duration-300"
          >
            Inventory Management
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-yellow-300 transition duration-300"
          >
            Contact Support
          </Link>
          <button
            className="block bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-100 transition duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Alert Component */}
      {alert.visible && (
        <Alert
          type={alert.type }
          message={alert.message}
          onClose ={() => setAlert({ visible: false, type: "", message: "" })}
        />
      )}
    </nav>
  );
};

export default LibrarianNavbar;