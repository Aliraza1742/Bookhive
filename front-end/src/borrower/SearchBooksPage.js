import React, { useState } from "react";
import BookCard from "../components/Card"; // Assuming BookCard is a reusable component for displaying book details
import { Link } from "react-router-dom";


const SearchBooksPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]); // This would eventually be fetched from a backend
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating a book search (you can replace this with an actual API call)
    setTimeout(() => {
      const mockBooks = [
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", location: "Local Library" },
        { id: 2, title: "1984", author: "George Orwell", category: "Dystopian", location: "Community Center" },
        { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Classic", location: "Local Library" },
        // Add more mock data as needed
      ];
      setBooks(mockBooks);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 mt-16">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4">Search for Books</h1>
          <p className="text-2xl mb-6">Find books to borrow donated by the Authors or Booklovers.</p>
        </div>
      </section>   

      {/* Search Form */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search by title, author, category, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="ml-4 px-6 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Book Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          {isLoading ? (
            <div className="text-center text-xl text-blue-700">Loading books...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {books.length > 0 ? (
                books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))
              ) : (
                <div className="text-center text-lg text-gray-500">No books found matching your search.</div>
              )}
            </div>
          )}
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

export default SearchBooksPage;
