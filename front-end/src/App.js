import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LibrarianNavbar from "./components/LibrarianNavbar";
import LibrarianFooter from "./components/Librarianfooter";
import UserTypeSelection from "./screens/UserTypeSelection";
import LandingPage from "./screens/LandingPage";
import LoginPage from "./screens/Login";
import SignupPage from "./screens/Signup";
import AddBookForDonationPage from "./donor/AddBookForDonationPage";
import DonationDashboardPage from "./donor/DonationDashboardPage";
import SearchBooksPage from "./borrower/SearchBooksPage";
import BorrowRequestPage from "./borrower/BorrowRequestPage";
import BorrowingHistoryPage from "./borrower/BorrowingHistoryPage";
import DonationManagementDashboard from "./librarian/DonationManagementDashboard";
import BorrowRequestManagement from "./librarian/BorrowRequestManagement";
import InventoryManagement from "./librarian/InventoryManagement";
import AboutUsPage from "./screens/AboutUs";
import ContactUsPage from "./screens/ContactUs";
import TermsOfService from "./screens/TermsOfService"
import PrivacyPolicy from "./screens/PrivacyPolicy"
import NotFound from "./screens/NotFound";

const App = () => {
  const location = useLocation();

  // Define the paths where Navbar and Footer should not render
  const noHeaderFooterPaths = ["/", "/login", "/signup", "/terms", "/policy"];
  // Define Librarian-specific paths
  const librarianPaths = [
    "/donation-management",
    "/borrow-request-management",
    "/inventory-management",
  ];

  // Determine which Navbar and Footer to render
  const isNoHeaderFooter = noHeaderFooterPaths.includes(location.pathname);
  const isLibrarianRoute = librarianPaths.includes(location.pathname);

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!isNoHeaderFooter && (
        isLibrarianRoute ? <LibrarianNavbar /> : <Navbar />
      )}

      <Routes>
        {/* User Type Selection */}
        <Route path="/" element={<UserTypeSelection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Public Routes */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/policy" element={<PrivacyPolicy />} />

        {/* Donor Routes */}
        <Route path="/add-book" element={<AddBookForDonationPage />} />
        <Route path="/donation-dashboard" element={<DonationDashboardPage />} />

        {/* Borrower Routes */}
        <Route path="/search-books" element={<SearchBooksPage />} />
        <Route path="/borrow-request" element={<BorrowRequestPage />} />
        <Route path="/borrowing-history" element={<BorrowingHistoryPage />} />

        {/* Librarian Routes */}
        <Route path="/donation-management" element={<DonationManagementDashboard />} />
        <Route
          path="/borrow-request-management"
          element={<BorrowRequestManagement />}
        />
        <Route path="/inventory-management" element={<InventoryManagement />} />

        {/* Fallback for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Conditionally render Footer */}
      {!isNoHeaderFooter && (
        isLibrarianRoute ? <LibrarianFooter /> : <Footer />
      )}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
