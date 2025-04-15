import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
          About Cartify
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 text-center mb-10">
          Welcome to <span className="font-semibold text-indigo-500">Cartify</span>, your trusted destination for quality products, smooth shopping, and customer-first service.
        </p>

        {/* Mission, Vision, Story */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Our Mission */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To make online shopping faster, easier, and more joyful for everyone by providing a wide variety of products at affordable prices.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become one of India’s most trusted and innovative e-commerce platforms, helping customers discover and enjoy what they love.
            </p>
          </div>

          {/* Our Story */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Our Story</h3>
            <p className="text-gray-600">
              Cartify started with a simple idea: bring top-quality products to every doorstep with ease. Powered by tech, driven by customer love.
            </p>
          </div>
        </div>

        {/* Trusted by Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Cartify?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ✔️ Fast delivery <br />
            ✔️ Secure payments <br />
            ✔️ Friendly support <br />
            ✔️ 1000+ happy customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
