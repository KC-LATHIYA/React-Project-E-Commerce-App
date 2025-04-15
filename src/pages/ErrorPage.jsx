import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-100 to-white px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Oops! Page not found</h2>
        <p className="text-gray-500 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
