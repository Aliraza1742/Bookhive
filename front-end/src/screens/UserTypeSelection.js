import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react"; // Import Iconify for React

const UserTypeSelection = () => {
  const navigate = useNavigate(); // Hook for navigating between routes

  // Handles user selection based on type and navigates to the respective dashboard
  const handleUserSelection = (type) => {
    if (type === "normal") {
      navigate("/login"); // Redirect to normal user (borrower) dashboard
    } else if (type === "librarian") {
      navigate("/login"); // Redirect to librarian dashboard
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen relative font-poppins" // Ensure full screen height and centre alignment
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", // Background image from URL
        backgroundSize: "cover", // Make the image cover the entire container
        backgroundPosition: "center", // Centre the image within the container
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
      }}
    >
      {/* Black Gradient Overlay for better text visibility */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))", // Gradient from darker to lighter black
          zIndex: 1, // Place this above the background image
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-5 mt-16"> {/* Ensure content is above the overlay */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
          Welcome to BookHive
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-24">
          Select your role to get started.
        </p>

        {/* Role Selection Cards */}
        <div className="flex flex-wrap justify-center space-x-20 ">
          {/* Card for Normal User */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-700 rounded-2xl h-96 shadow-2xl p-10 w-96 mx-4 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-3xl">
            {/* Icon Container */}
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Icon icon="mdi:user" className="w-16 h-16 text-blue-600 animate-pulse" /> {/* Icon with pulse animation */}
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Normal User</h2>
            <button
              onClick={() => handleUserSelection("normal")} // Trigger navigation for Normal User
              className="bg-gradient-to-r from-blue-400 to-purple-600 text-white text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 font-semibold"
            >
              Select
            </button>
          </div>

          {/* Card for Librarian */}
          <div className="bg-gradient-to-br from-green-500 to-teal-700 rounded-2xl h-96 shadow-2xl p-10 w-96 mx-4 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-3xl">
            {/* Icon Container */}
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Icon icon="mdi:library" className="w-16 h-16 text-green-600 animate-pulse" /> {/* Icon with pulse animation */}
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Librarian</h2>
            <button
              onClick={() => handleUserSelection("librarian")} // Trigger navigation for Librarian
              className="bg-gradient-to-r from-green-400 to-teal-600 text-white text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 font-semibold"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection; // Export the component for use in other parts of the app
