import React from "react";
import { MdLocationPin, MdAddCall } from "react-icons/md";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Have questions or feedback? We'd love to hear from you!
        </p>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MdLocationPin className="text-2xl text-red-500" />
              <div>
                <h4 className="text-lg font-semibold">Our Location</h4>
                <p className="text-gray-600">Surat, Gujarat, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdAddCall className="text-2xl text-green-500" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-600">+91 9876543212</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <SiGmail className="text-2xl text-red-400" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-600">lathiyakrish@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="bg-white shadow-md rounded-2xl p-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
