import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";

const ContactUsPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Effect to handle success message timeout and navigation
  useEffect(() => {
    let timeoutId;
    if (status.type === "success") {
      timeoutId = setTimeout(() => {
        setStatus({ type: "", message: "" });
        navigate('/landing');
      }, 3000); // Wait for 3 seconds
    }
    return () => clearTimeout(timeoutId);
  }, [status.type, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch('http://localhost:5000/api/contact/us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Thank you for your message. We'll get back to you soon!"
        });
        setFormData({
          name: "",
          email: "",
          message: ""
        });
        // Navigation will happen automatically after 3 seconds due to useEffect
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again."
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Unable to send message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Main Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 mt-16">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
            Get in Touch with <span className="text-yellow-400">Bookhive</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Have questions, feedback, or need support? Reach out to us we're here to help!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Send Us a Message</h2>

            {/* Status Messages */}
            {status.message && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } transition-opacity duration-300`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-md disabled:bg-gray-100"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-md disabled:bg-gray-100"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows="6"
                  className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-md disabled:bg-gray-100"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-16 bg-blue-300">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-6">Our Location</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            Visit us at our headquarters or contact us via phone or email. We're always here to assist!
          </p>

          {/* Address Card */}
          <div className="bg-blue-100 p-8 rounded-lg shadow-lg max-w-md mx-auto flex flex-col items-start">
            <div className="flex items-center mb-4">
              <Icon icon="mdi:map-marker" className="text-blue-700 text-3xl mr-3" />
              <h3 className="text-xl font-semibold text-blue-700">Bookhive HQ</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Namal University <br />
              Namal, Mianwali  04599
            </p>

            <div className="flex items-center mb-2">
              <Icon icon="mdi:phone" className="text-blue-700 text-2xl mr-3" />
              <p className="text-gray-700">(123) 456-7890</p>
            </div>

            <div className="flex items-center">
              <Icon icon="mdi:email-outline" className="text-blue-700 text-2xl mr-3" />
              <p className="text-gray-700">contact@bookhive.com</p>
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

export default ContactUsPage;