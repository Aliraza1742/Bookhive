import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-gray-500 mb-8 text-center">
        Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-all"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
