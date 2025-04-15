import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function CheckOut() {

  const itemData = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const totalprice = itemData.reduce((total, item) => total += item.price * item.qty, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-700">Billing Details</h3>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Shipping Address"
            className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Order Summary</h3>

          <div className="space-y-3">
            {/* Example product */}
            {
              itemData.map((item) => (
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <p className="font-medium text-gray-800">{item.title.slice(0, 40)}...</p>
                    <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                  </div>
                  <p className="font-semibold text-indigo-600">${item.price * item.qty}</p>
                </div>
              ))
            }
            {/* Add more items dynamically later */}
          </div>

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between font-semibold text-gray-800">
              <span>Total</span>
              <span className="text-indigo-600">${totalprice.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <h4 className="font-medium text-gray-700 mb-2">Payment Method</h4>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500">
              <option>Credit / Debit Card</option>
              <option>UPI</option>
              <option>Cash on Delivery</option>
            </select>
          </div>

          <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-full transition"
            onClick={() => navigate("/paymentsuccess")}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
