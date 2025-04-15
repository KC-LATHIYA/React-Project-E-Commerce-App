import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../store/cartslice';
import Cart from "../components/Cart";
import { Toaster, toast } from 'react-hot-toast';

function ProductDetails() {
  const { id } = useParams();
  const numericId = Number(id);
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.product.find((item) => item.id === numericId));

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-600 text-lg">
        Product not found 😕
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Normal Product Image */}
          <div className="w-full max-w-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-gray-500 mb-4">{product.description}</p>
            <div className="text-2xl font-semibold text-indigo-600 mb-6">
              ${product.price}
            </div>

            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full transition duration-300"
              onClick={() => {
                dispatch(AddToCart(product));
                toast.success(`Successfully Added ${product.title.slice(0, 20)}!`);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Cart />
    </>
  );
}

export default ProductDetails;
