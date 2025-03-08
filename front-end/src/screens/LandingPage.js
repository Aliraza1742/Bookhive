import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const LandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 mt-14">
        <div className="container mx-auto text-center">
          <h1 className="text-8xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Welcome to <span className="text-yellow-400">Bookhive</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Donate, borrow, and share books with your community. Join us to promote literacy and sustainability.
          </p>
          <Link
            to="/landing"
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-300 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 items-center">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            {/* Feature 1: Donation */}
            <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-yellow-400 text-4xl mb-4">
                <Icon icon="mdi:gift-outline" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Donate Books</h3>
              <p className="text-gray-600 mb-6">
                Give your pre-loved books a second life by donating them to libraries or charities.
              </p>
              <Link
                to="/donation-dashboard"
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Learn more &rarr;
              </Link>
            </div>

            {/* Feature 2: Borrow */}
            <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-yellow-400 text-4xl mb-4">
                <Icon icon="mdi:book-outline" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Borrow Books</h3>
              <p className="text-gray-600 mb-6">
                Explore a wide variety of books available for borrowing in your local area.
              </p>
              <Link
                to="/search-books"
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Browse Books &rarr;
              </Link>
            </div>
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

export default LandingPage;
