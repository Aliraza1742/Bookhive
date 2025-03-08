import React from "react";

const LibrarianFooter = () => {
  return (
    <footer className="bg-blue-700 text-white py-6">
      <div className="container mx-auto text-center space-y-4">
        {/* Logo and Tagline */}
        <div>
          <h1 className="text-2xl font-bold mb-6">Bookhive</h1>
          <p className="text-sm">Sharing knowledge, one book at a time.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="/borrow-request-management"
            className="hover:text-yellow-300 transition duration-300"
          >
            Borrow Request Management
          </a>
          <a
            href="/donation-management"
            className="hover:text-yellow-300 transition duration-300"
          >
            Donation Management
          </a>
          <a
            href="/inventory-management"
            className="hover:text-yellow-300 transition duration-300"
          >
            InventoryManagement
          </a>

        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.437 9.878V14.89H7.9v-2.89h2.537V9.912c0-2.506 1.492-3.891 3.778-3.891 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.241 0-1.63.772-1.63 1.562V12h2.773l-.444 2.89h-2.329v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 4.11a4.48 4.48 0 00-4.47 4.48c0 .35.04.7.12 1.03A12.94 12.94 0 013 4.82s-4 9 5 13c-1 .5-4 1-5 0 0 0 3.95 3.5 9 2 6-1.5 9-11 9-13.5v-.68A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.057 1.97.24 2.44.409a5.12 5.12 0 011.844 1.034 5.12 5.12 0 011.034 1.844c.169.47.352 1.27.409 2.44.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.057 1.17-.24 1.97-.409 2.44a5.12 5.12 0 01-1.034 1.844 5.12 5.12 0 01-1.844 1.034c-.47.169-1.27.352-2.44.409-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.057-1.97-.24-2.44-.409a5.12 5.12 0 01-1.844-1.034 5.12 5.12 0 01-1.034-1.844c-.169-.47-.352-1.27-.409-2.44-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.057-1.17.24-1.97.409-2.44a5.12 5.12 0 011.034-1.844 5.12 5.12 0 011.844-1.034c.47-.169 1.27-.352 2.44-.409 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072c-1.343.06-2.39.292-3.28.633A7.34 7.34 0 001.547 2.3 7.34 7.34 0 00.706 3.773c-.34.89-.573 1.937-.633 3.28C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.06 1.343.292 2.39.633 3.28a7.34 7.34 0 001.541 2.177 7.34 7.34 0 002.177 1.541c.89.34 1.937.573 3.28.633 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.343-.06 2.39-.292 3.28-.633a7.34 7.34 0 002.177-1.541 7.34 7.34 0 001.541-2.177c.34-.89.573-1.937.633-3.28.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.06-1.343-.292-2.39-.633-3.28a7.34 7.34 0 00-1.541-2.177A7.34 7.34 0 0015.052.706c-.89-.34-1.937-.573-3.28-.633C12.668.014 12.259 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zm0 10.177a4.015 4.015 0 110-8.03 4.015 4.015 0 010 8.03zm6.406-10.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">&copy; 2024 Bookhive. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default LibrarianFooter;
