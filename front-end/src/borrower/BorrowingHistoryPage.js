import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BorrowingHistoryPage = () => {
  const [borrowingHistory, setBorrowingHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBorrowingHistory([
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          borrowDate: "2024-12-05",
          deliveryStatus: "Delivered",
        },
        {
          title: "1984",
          author: "George Orwell",
          borrowDate: "2024-11-20",
          deliveryStatus: "Pending",
        },
        {
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          borrowDate: "2024-10-15",
          deliveryStatus: "Delivered",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const headers = ["Book Title", "Author", "Borrow Date", "Delivery Status"];

  const tableData = borrowingHistory.map((history) => ({
    title: history.title,
    author: history.author,
    borrowDate: history.borrowDate,
    deliveryStatus: (
      <span
        className={`${
          history.deliveryStatus === "Delivered"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        } px-3 py-1 rounded-full text-sm font-medium`}
      >
        {history.deliveryStatus}
      </span>
    ),
  }));

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-24 mt-16">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4">Borrowing History</h1>
          <p className="text-2xl mb-6">Your past borrowed books and their status.</p>
        </div>
      </section>

      {/* Borrowing History Table */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          {isLoading ? (
            <div className="text-center text-xl text-blue-700 animate-pulse">
              Loading your borrowing history...
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-blue-700 mb-6">Your Borrowed Books</h2>
              <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse bg-white">
                  <thead className="bg-blue-100">
                    <tr>
                      {headers.map((header, index) => (
                        <th
                          key={index}
                          className="py-3 px-6 text-left font-semibold text-blue-700 border-b border-gray-300"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-blue-50 transition duration-200`}
                      >
                        <td className="py-3 px-6 border-b border-gray-300">{row.title}</td>
                        <td className="py-3 px-6 border-b border-gray-300">{row.author}</td>
                        <td className="py-3 px-6 border-b border-gray-300">{row.borrowDate}</td>
                        <td className="py-3 px-6 border-b border-gray-300">{row.deliveryStatus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

export default BorrowingHistoryPage;
