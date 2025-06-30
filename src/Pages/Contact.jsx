import React from "react";
import contactBanner from "../assets/ContactUsBanner.jpeg";

const Contact = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* 🔝 Banner + Heading */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src={contactBanner}
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
        {/* 👇 Text overlay on image */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Contact Our Grocery Store 🛒
          </h1>
        </div>
      </div>

      {/* 📞 Contact Form + Store Info */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 📝 Contact Form */}
          <form className="bg-white p-6 rounded-xl shadow-md space-y-4 border border-gray-200">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-2 border rounded-md focus:outline-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-2 border rounded-md focus:outline-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full mt-1 p-2 border rounded-md focus:outline-green-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* 🏪 Store Info */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Store Information
            </h3>
            <p>
              <strong>📍 Address:</strong>
              <br />
              Anand Nagar, Sector A, Bhopal, MP - 462023
            </p>
            <p>
              <strong>📞 Phone:</strong>
              <br />
              +91-123-456-789
            </p>
            <p>
              <strong>📧 Email:</strong>
              <br />
              aonestore@help.com
            </p>
            <p>
              <strong>🕒 Store Hours:</strong>
              <br />
              Mon - Sat: 9:00 AM - 9:00 PM
              <br />
              Sun: 10:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
