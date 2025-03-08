import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Alert from "../components/Alert"; // Import the Alert component for displaying messages

const AddBookForDonationPage = () => {
  // State variables for form inputs and messages
  const [title, setTitle] = useState(""); // Book title
  const [author, setAuthor] = useState(""); // Book author
  const [isbn, setIsbn] = useState(""); // Book ISBN
  const [condition, setCondition] = useState("Good"); // Book condition, default is "Good"
  const [bookCover, setBookCover] = useState(null); // State for book cover image
  const [error, setError] = useState(null); // State for error messages
  const [success, setSuccess] = useState(false); // State for success messages
  const navigate = useNavigate(); // Hook for navigation

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    // Validate if the file is an image
    if (file && !file.type.startsWith("image/")) {
      setError("Please upload a valid image file."); // Set error message
      setBookCover(null); // Reset book cover
    } else {
      setError(null); // Clear error message
      setBookCover(file); // Set the selected file
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem("token"); // Retrieve token
    if (!token) {
      setError("You must be logged in to donate a book.");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("isbn", isbn);
    formData.append("condition", condition);
    if (bookCover) {
      formData.append("bookCover", bookCover);
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/book-donation/donate", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Include the token
        },
        body: formData, // Send form data
      });
  
      const data = await response.json();
      if (response.ok) {
        setSuccess(true);
        setError(null);
        setTimeout(() => navigate("/landing"), 1000);
      } else {
        setError(data.message || "An error occurred.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred while submitting the form.");
    }
  };
  
  
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 mt-14">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4">Add Book for Donation</h1>
          <p className="text-2xl mb-6">
            Donate your pre-loved books and help others gain access to knowledge.
          </p>
        </div>
      </section>

      {/* Add Book Form */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-2xl">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Book Details</h2>
            {error && <Alert type="error" message={error} />} {/* Display error alert if exists */}
            {success && <Alert type="success" message="Book submitted successfully!" />} {/* Display success alert */}
            <form onSubmit={handleSubmit}>
              {/* Book Title */}
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-semibold">
                  Book Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)} // Update title state
                  required
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Author */}
              <div className="mb-4">
                <label htmlFor="author" className="block text-gray-700 font-semibold">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)} // Update author state
                  required
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* ISBN */}
              <div className="mb-4">
                <label htmlFor="isbn" className="block text-gray-700 font-semibold">
                  ISBN
                </label>
                <input
                  type="text"
                  id="isbn"
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)} // Update ISBN state
                  required
                  pattern="\d+" // Ensure only numbers are entered
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter numerical ISBN"
                />
              </div>

              {/* Condition */}
              <div className="mb-4">
                <label htmlFor="condition" className="block text-gray-700 font-semibold">
                  Condition
                </label>
                <select
                  id="condition"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)} // Update condition state
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>

              {/* Book Cover Image */}
              <div className="mb-4">
                <label htmlFor="bookCover" className="block text-gray-700 font-semibold">
                  Upload Book Cover (optional)
                </label>
                <input
                  type="file"
                  id="bookCover"
                  accept="image/*" // Accept only image files
                  onChange={handleFileChange} // Handle file change
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {bookCover && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Selected file: {bookCover.name}</p>
                    <img
                      src={URL.createObjectURL(bookCover)} // Preview selected image
                      alt="Selected Book Cover"
                      className="mt-4 h-32 w-32 object-cover rounded-lg border border-gray-300"
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="py-2 px-6 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-300"
                >
                  Submit Donation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
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

export default AddBookForDonationPage;
