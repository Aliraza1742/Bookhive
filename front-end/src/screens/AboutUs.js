import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Main Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 mt-16">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold mb-6">
            About <span className="text-yellow-400">Bookhive</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Empowering communities through book sharing, reducing waste, and fostering a love for reading worldwide.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We strive to make literacy accessible for everyone by encouraging sustainable book sharing and community
            engagement. Join us in reducing waste and spreading knowledge one book at a time.
          </p>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Impact Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition duration-300">
              <Icon icon="mdi:book-outline" className="text-blue-700 text-5xl mb-4" />
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Hundreds of Books Donated</h3>
              <p className="text-gray-700">
                Giving pre-loved books a new life by donating them to libraries, schools, and charities worldwide.
              </p>
            </div>

            {/* Impact Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition duration-300">
              <Icon icon="mdi:leaf" className="text-blue-700 text-5xl mb-4" />
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Eco-Friendly Initiative</h3>
              <p className="text-gray-700">
                Promoting sustainability by reducing book waste and encouraging reuse within communities.
              </p>
            </div>

            {/* Impact Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition duration-300">
              <Icon icon="mdi:account-group" className="text-blue-700 text-5xl mb-4" />
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Community Empowerment</h3>
              <p className="text-gray-700">
                Connecting people through the shared love of books, fostering collaboration and cultural exchange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Ali"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-blue-700">Ali Raza</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="text-gray-700 mt-4">
                Ali Raza is passionate about creating opportunities for everyone to access knowledge through books.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Sajid"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-blue-700">Muhammad Sajid</h3>
              <p className="text-gray-600">Co-Founder & CTO</p>
              <p className="text-gray-700 mt-4">
                Sajid will  ensures the Bookhive platform remains cutting-edge, secure, and user-friendly.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Adnan"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-blue-700">Adnan Bashir</h3>
              <p className="text-gray-600">Community Manager</p>
              <p className="text-gray-700 mt-4">
                Sir Adnan will try to bridges the gap between donors and recipients, ensuring books reach those in need.
              </p>
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

export default AboutUsPage;
