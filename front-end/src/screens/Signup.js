import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const SignupPage = () => {
  const [role, setrole] = useState("user");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });
  
      const data = await response.json();
   
      if (response.ok) {
        alert("Registration successful!");
        navigate(role === "user" ? "/landing" : "/donation-management");
      } else {
        alert(data.message || "Error during registration.");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://www.cteindia.org/wp-content/uploads/2017/04/book-wallpaper-22133-22689-hd-wallpapers.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center font-nunito text-gray-800">
          Create Account !
        </h2>

        <div className="mb-6">
          <label className="block text-gray-700 font-nunito mb-2">Select User Type:</label>
          <div className="relative">
            <select
              value={role}
              onChange={(e) => setrole(e.target.value)}
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

        <div className="mb-6">
          <label className="block text-gray-700 font-nunito mb-2">Name:</label>
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 pl-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 font-nunito"
            />
            <Icon
              icon="icon-park-solid:edit-name"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-nunito mb-2">Email:</label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 pl-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 font-nunito"
            />
            <Icon
              icon="ic:baseline-email"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-nunito mb-2">Password:</label>
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 pl-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 font-nunito"
            />
            <Icon
              icon="mdi:password"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        <button
          onClick={handleSignup}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 mb-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-nunito font-semibold shadow-lg"
        >
          Signup
        </button>

        <p className="text-center text-gray-700 font-nunito">
          Already have an account?{" "}
          <Link to="/login"  className=" text-blue-500 hover:text-blue-700 font-nunito font-semibold underline transition-all duration-200"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
