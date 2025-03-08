import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Alert from "../components/Alert";

const LoginPage = () => {
  const [userType, setUserType] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);
  const navigate = useNavigate();



  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, userType }),
      });
  
      const data = await response.json();
      if (response.ok) {
        setAlertMessage({
          type: "success",
          message: "Login successful! Redirecting...",
        });
  
        // Save token and userId in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("loggedInUserId", data.userId);
  
        setTimeout(() => {
          navigate(userType === "user" ? "/landing" : "/donation-management");
        }, 1500);
      } else {
        setAlertMessage({ type: "error", message: data.message });
      }
    } catch (error) {
      setAlertMessage({ type: "error", message: "Server error! Please try again." });
    }
  };
  
  

  const handleCreateAccount = () => {
    navigate("/signup");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.cteindia.org/wp-content/uploads/2017/04/book-wallpaper-22133-22689-hd-wallpapers.jpg')",
      }}
    >
      {/* Alert Message */}
      {alertMessage && (
        <div className="w-full max-w-md mb-6">
          <Alert
            type={alertMessage.type}
            message={alertMessage.message}
            onClose={() => setAlertMessage(null)}
          />
        </div>
      )}

      {/* Form Container */}
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h2 className="text-4xl font-bold mb-7 text-center font-nunito text-gray-800">
          Welcome Back!
        </h2>

        <div className="mb-6">
          <label className="block text-gray-700 font-nunito mb-2">
            Select User Type:
          </label>
          <div className="relative">
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 font-nunito appearance-none"
            >
              <option value="user">User</option>
              <option value="librarian">Librarian</option>
            </select>
            <Icon
              icon="mdi:chevron-down"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-nunito mb-2">Email:</label>
          <div className="relative">
            <Icon
              icon="ic:baseline-email"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-nunito transition-all duration-200"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-8">
          <label className="block text-gray-700 font-nunito mb-2">Password:</label>
          <div className="relative">
            <Icon
              icon="mdi:password"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-nunito transition-all duration-200"
            />
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-nunito font-semibold shadow-lg"
        >
          Login
        </button>

        {/* Create Account Link */}
        <div className="mt-6 text-center">
          <span className="text-gray-600 font-nunito">
            Don't have an account?{" "}
          </span>
          <button
            onClick={handleCreateAccount}
            className="text-blue-500 hover:text-blue-700 font-nunito font-semibold underline transition-all duration-200"
          >
            Create one
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
