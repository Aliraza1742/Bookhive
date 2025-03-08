import React, { useState, useEffect } from "react";
import BookCard from "../components/Card"; // Assuming Card is the updated Card component
import { Link } from "react-router-dom";


const InventoryManagement = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newBook, setNewBook] = useState({ title: "", author: "", category: "", quantity: 0 });
  const [showAddBookModal, setShowAddBookModal] = useState(false);

  // Simulated data
  useEffect(() => {
    setTimeout(() => {
      setBooks([
        {
          image: "https://via.placeholder.com/150", // Dummy image URL
          title: "1984",
          author: "George Orwell",
          category: "Fiction",
          quantity: 10,
        },
        {
          image: "https://via.placeholder.com/150",
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          category: "Fiction",
          quantity: 5,
        },
        {
          image: "https://via.placeholder.com/150",
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          category: "Fiction",
          quantity: 2,
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Handle adding a new book
  const handleAddBook = () => {
    if (!newBook.title || !newBook.author || !newBook.category || newBook.quantity <= 0) {
      alert("Please fill all fields and ensure quantity is greater than 0.");
      return;
    }
    setBooks([...books, { ...newBook, image: "https://via.placeholder.com/150" }]);
    setShowAddBookModal(false);
    setNewBook({ title: "", author: "", category: "", quantity: 0 });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mt-20 ">Inventory Management</h1>
          <p className="text-2xl mb-6 mt-3">Manage the books available for donation and borrowing.</p>
        </div>
      </section>

      {/* Book Inventory Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          {isLoading ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-700"></div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-blue-700">Book Inventory</h2>
                <button
                  onClick={() => setShowAddBookModal(true)}
                  className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all"
                >
                  Add New Book
                </button>
              </div>

              {/* Book Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book, index) => (
                  <BookCard
                    key={index}
                    image={book.image}
                    title={book.title}
                    subtitle={`By ${book.author}`}
                    description={`Category: ${book.category}`}
                    footer={`Quantity: ${book.quantity}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Add New Book Modal */}
      {showAddBookModal && (
        <div
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 id="modal-title" className="text-2xl font-semibold mb-4 text-blue-700">Add New Book</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  value={newBook.title}
                  onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter book title"
                  aria-label="Book Title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Author</label>
                <input
                  type="text"
                  value={newBook.author}
                  onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter author's name"
                  aria-label="Author Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Category</label>
                <input
                  type="text"
                  value={newBook.category}
                  onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter category"
                  aria-label="Book Category"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Quantity</label>
                <input
                  type="number"
                  value={newBook.quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value, 10);
                    setNewBook({ ...newBook, quantity: isNaN(value) ? 0 : value });
                  }}
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter quantity"
                  aria-label="Book Quantity"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setShowAddBookModal(false)}
                  className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddBook}
                  className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                >
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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

export default InventoryManagement;
