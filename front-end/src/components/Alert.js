import React from "react";

const Alert = ({ type = "info", message, onClose }) => {
  // Define styles for different alert types
  const alertStyles = {
    success: "bg-green-100 text-green-700 border-green-400",
    error: "bg-red-100 text-red-700 border-red-400",
    info: "bg-blue-100 text-blue-700 border-blue-400",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-400",
  };

  // Define icon colors for different alert types
  const iconColor = {
    success: "text-green-500",
    error: "text-red-500",
    info: "text-blue-500",
    warning: "text-yellow-500",
  };

  return (
    <div
      className={`flex items-center p-4 mb-4 rounded-lg shadow-md ${alertStyles[type]} border-l-4 animate-fadeIn`}
    >
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 mr-3 ${iconColor[type]}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>

      {/* Message */}
      <span className="flex-1">{message}</span>

      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className={`ml-3 ${iconColor[type]} hover:opacity-75`}
          aria-label="Close alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;