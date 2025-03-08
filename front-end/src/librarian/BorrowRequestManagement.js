// src/pages/BorrowRequestManagement.js
import React, { useState, useEffect } from "react";
import Table from "../components/Table"; // Adjust the import path according to your folder structure
import { Link } from "react-router-dom";


const BorrowRequestManagement = () => {
  // State for storing borrow requests
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulated data (You can replace this with an API call)
  useEffect(() => {
    setTimeout(() => {
      setRequests([
        {
          bookTitle: "The Catcher in the Rye",
          borrower: "John Doe",
          requestDate: "2024-12-18",
          status: "Pending",
        },
        {
          bookTitle: "Pride and Prejudice",
          borrower: "Alice Smith",
          requestDate: "2024-12-20",
          status: "Pending",
        },
        {
          bookTitle: "Moby Dick",
          borrower: "Bob Johnson",
          requestDate: "2024-12-10",
          status: "Approved",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleApproveRequest = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = "Approved";
    setRequests(updatedRequests);
  };

  const handleRejectRequest = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = "Rejected";
    setRequests(updatedRequests);
  };

  // Headers for the table
  const headers = ["Book Title", "Borrower", "Request Date", "Status", "Action"];

  // Data transformation for the table
  const tableData = requests.map((request, index) => ({
    bookTitle: request.bookTitle,
    borrower: request.borrower,
    requestDate: request.requestDate,
    status: (
      <span
        className={`${
          request.status === "Approved"
            ? "bg-green-200 text-green-700"
            : request.status === "Rejected"
            ? "bg-red-200 text-red-700"
            : "bg-yellow-200 text-yellow-700"
        } px-3 py-1 rounded-full text-sm`}
      >
        {request.status}
      </span>
    ),
    action:
      request.status === "Pending" ? (
        <>
          <button
            onClick={() => handleApproveRequest(index)}
            className="bg-green-600 text-white py-1 px-4 rounded-lg hover:bg-green-700 transition-all mr-2"
          >
            Approve
          </button>
          <button
            onClick={() => handleRejectRequest(index)}
            className="bg-red-600 text-white py-1 px-4 rounded-lg hover:bg-red-700 transition-all"
          >
            Reject
          </button>
        </>
      ) : null,
  }));

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
¡

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4 mt-20">Borrow Request Management</h1>
          <p className="text-2xl mb-6">
            Manage and approve/reject borrow requests from borrowers.
          </p>
        </div>
      </section>

      {/* Borrow Request Table */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          {isLoading ? (
            <div className="text-center text-xl text-blue-700">Loading borrow requests...</div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Pending Borrow Requests
              </h2>
              <Table headers={headers} data={tableData} />
            </div>
          )}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-800 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-2">&copy; 2024 Bookhive. All Rights Reserved.</p>
          <p>
            <Link to="/privacy" className="text-yellow-400 hover:text-yellow-300">
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

export default BorrowRequestManagement;