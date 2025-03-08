import React, { useState, useEffect } from "react";
import Table from "../components/Table"; // Adjust the import path according to your folder structure
import axios from "axios"; // Axios for API calls

const DonationManagementDashboard = () => {
  const [donations, setDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch pending donations from the backend
  useEffect(() => {
    const fetchPendingBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/librarian-dashboard/pending", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming JWT is used for authentication
          },
        })
        .catch((error) => console.error('Error fetching pending books:', error));

        setDonations(response.data);
      } catch (error) {
        console.error("Error fetching pending books:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPendingBooks();
  }, []);

  // Mark a donation as received
  const handleMarkAsReceived = async (bookId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/librarian-dashboard/accept/${bookId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming JWT is used for authentication
          },
        }
      );

      const updatedBook = response.data.book;
      setDonations((prevDonations) =>
        prevDonations.map((donation) =>
          donation._id === bookId ? { ...donation, status: updatedBook.status } : donation
        )
      );
    } catch (error) {
      console.error("Error marking book as received:", error);
    }
  };

  // Handle deleting a book donation request
  const handleDeleteDonation = async (bookId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book request?");
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/librarian-dashboard/delete/${bookId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming JWT is used for authentication
          },
        }
      );

      setDonations((prevDonations) =>
        prevDonations.filter((donation) => donation._id !== bookId)
      );
      alert("Book request deleted successfully");
    } catch (error) {
      console.error("Error deleting the book request:", error);
    }
  };

  const headers = ["Book Title", "Author", "Donor", "Donation Date", "Status", "Action"];

  const handleRowClick = (row) => {
    console.log("Row clicked:", row);
  };

  const data = donations.map((donation) => ({
    title: donation.title,
    author: donation.author,
    donor: donation.donor?.name || "", // Ensure you're using a string for the donor's name
    donationDate: new Date(donation.createdAt).toLocaleDateString(),
    status: (
      <span
        className={`${
          donation.status === "Accepted"
            ? "bg-green-200 text-green-700"
            : "bg-yellow-200 text-yellow-700"
        } px-3 py-1 rounded-full text-sm`}
      >
        {donation.status}
      </span>
    ),
    action: (
      <div className="flex space-x-2">
        {donation.status === "Pending" && (
          <button
            onClick={() => handleMarkAsReceived(donation._id)}
            className="bg-green-600 text-white py-1 px-4 rounded-lg hover:bg-green-700 transition-all"
          >
            Mark as Received
          </button>
        )}
        {donation.status !== "Accepted" && (  // Only show the delete button if the status is not "Accepted"
          <button
            onClick={() => handleDeleteDonation(donation._id)}
            className="bg-red-600 text-white py-1 px-4 rounded-lg hover:bg-red-700 transition-all"
          >
            Delete
          </button>
        )}
      </div>
    ),
  }));

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Donation Management Dashboard</h1>
          <p className="text-xl mb-6">Manage the book donations from donors.</p>
        </div>
      </section>

      {/* Donation Management Table */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          {isLoading ? (
            <div className="text-center text-xl text-blue-700">Loading donations...</div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">Donations Awaiting Approval</h2>

              {/* Table */}
              <Table headers={headers} data={data} onRowClick={handleRowClick} />
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Bookhive. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DonationManagementDashboard;
