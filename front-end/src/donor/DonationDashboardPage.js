import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DonationDashboardPage = () => {
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found. Please log in.");
        }

        const response = await axios.get("http://localhost:5000/api/donation-dashboard/donations", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDonations(response.data.books);
      } catch (error) {
        console.error("Error fetching donations:", error);
        setError(error.response?.data?.message || "Failed to fetch donations");
      }
    };

    fetchDonations();
  }, []);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 mt-14">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4">Donation Dashboard</h1>
          <p className="text-2xl mb-6">
            Track your generous contributions and see the impact of your donations!
          </p>
        </div>
      </section>

      {/* Dashboard Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Your Donations</h2>
            <div className="space-y-4">
              {error ? (
                <p className="text-red-500">{error}</p>
              ) : donations.length > 0 ? (
                donations.map((donation) => (
                  <div
                    key={donation._id}
                    className="bg-gray-100 p-4 rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold">{donation.title}</p>
                      <p className="text-sm text-gray-600">Status: {donation.status}</p>
                      <p className="text-sm text-gray-600">
                        Date: {new Date(donation.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      className="text-blue-700 hover:text-blue-900 transition duration-200"
                      onClick={() => openModal(donation)}
                    >
                      View Details
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No donations yet. Start donating today!</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 text-white w-11/12 md:w-1/3 p-8 rounded-lg shadow-xl relative">
            <button
              className="absolute top-4 right-4 text-white text-xl font-bold hover:text-gray-300"
              onClick={closeModal}
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedBook.title}</h2>
            <p className="text-lg mb-2">
              <strong>Author:</strong> {selectedBook.author || "N/A"}
            </p>
            <p className="text-lg mb-2">
              <strong>ISBN:</strong> {selectedBook.isbn || "N/A"}
            </p>
            <p className="text-lg mb-4">
              <strong>Condition:</strong> {selectedBook.condition || "N/A"}
            </p>
            <p className="text-sm text-gray-200">
              This book is currently marked as <strong>{selectedBook.status}</strong>.
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
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

export default DonationDashboardPage;
