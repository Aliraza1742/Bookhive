import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from "../components/Alert";

const BorrowRequestPage = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [bookDetails, setBookDetails] = useState(null);
  const [borrowerName, setBorrowerName] = useState("");
  const [borrowerEmail, setBorrowerEmail] = useState("");
  const [alert, setAlert] = useState({ show: false, status: "", message: "" });

  // Fetch book details
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/borrow/books-by-others`);
        setBookDetails(response.data);
        setIsLoading(false);
      } catch (error) {
        showAlert("error", "Failed to fetch book details. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const handleRequestSubmit = async (e) => {
    e.preventDefault();

    if (!borrowerName || !borrowerEmail) {
      showAlert("error", "Please fill in all required fields before submitting.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        showAlert("error", "You must be logged in to submit a borrow request.");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/borrow/borrow-request",
        { bookId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      showAlert("success", response.data.message);
      setTimeout(() => navigate("/landing"), 1000);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to submit the borrow request. Please try again.";
      showAlert("error", errorMessage);
    }
  };

  const showAlert = (status, message) => {
    setAlert({ show: true, status, message });
    setTimeout(() => setAlert({ show: false, status: "", message: "" }), 3000); // Dismiss after 3 seconds
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {alert.show && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
          <Alert status={alert.status} message={alert.message} />
        </div>
      )}

      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 mt-16">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4">Request to Borrow Book</h1>
          <p className="text-2xl mb-6">Fill in your details to borrow the book.</p>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          {isLoading ? (
            <div className="text-center text-xl text-blue-700 animate-pulse">
              Loading book details...
            </div>
          ) : bookDetails ? (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-6">Book Details</h2>
              <p className="text-xl">Title: {bookDetails.title}</p>
              <p className="text-lg text-gray-600">Author: {bookDetails.author}</p>
              <p className="text-lg text-gray-500">Category: {bookDetails.category}</p>
              <p className="text-lg text-gray-400">Location: {bookDetails.location}</p>

              <form onSubmit={handleRequestSubmit} className="mt-8">
                <div className="mb-6">
                  <label className="block text-lg text-gray-700 mb-2" htmlFor="borrowerName">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="borrowerName"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={borrowerName}
                    onChange={(e) => setBorrowerName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-lg text-gray-700 mb-2" htmlFor="borrowerEmail">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="borrowerEmail"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={borrowerEmail}
                    onChange={(e) => setBorrowerEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
                >
                  Submit Request
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center text-xl text-red-700">
              Failed to load book details. Please try again later.
            </div>
          )}
        </div>
      </section>

      <footer className="bg-blue-800 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-2">&copy; 2024 Bookhive. All Rights Reserved.</p>
          <p>
            <Link to="/policy" className="text-yellow-400 hover:text-yellow-300">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/terms" className="text-yellow-400 hover:text-yellow-300">
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BorrowRequestPage;
