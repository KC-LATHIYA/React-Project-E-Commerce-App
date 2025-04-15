import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { GetAllPtoduct } from '../store/productslice';
import { AddToCart } from "../store/cartslice";
import Cart from "../components/Cart";
import { Toaster, toast } from 'react-hot-toast';

const Home = () => {
  const [topitems, setTopitems] = useState([])
  const Data = useSelector((state) => state.product.product)
  const loading = useSelector((state) => state.product.loading)
  const error = useSelector((state) => state.product.error)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const topitemfinder = () => {
    const data = [...Data]
    const item = data.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 3)
    setTopitems(item)
  }

  useEffect(() => {
    if (Data && Data.length > 0) {
      topitemfinder()
    }
  }, [Data])

  useEffect(() => {
    dispatch(GetAllPtoduct())
  }, [])

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-100 to-indigo-200 py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 leading-tight">
                Welcome to <span className="text-indigo-900">Cartify</span>
              </h1>
              <p className="mt-4 text-gray-700 text-lg">
                Discover the best deals and latest trends in fashion, electronics, and more.
              </p>
              <Link to="/shop">
                <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="/image/hero image.png"
                alt="Shopping"
                className="w-full max-w-sm mx-auto"
                onClick={() => navigate("/shop")}
              />
            </div>
          </div>
        </section>

        {/* Featured Products Section (placeholder) */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Top Rated Products</h2>
            <p className="text-gray-600 mb-10">
              Handpicked items just for you — grab them while they're hot!
            </p>

            {/* Product Cards Placeholder */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              {loading && <p className="text-center text-indigo-600">Loading products...</p>}
              {error && <p className="text-center text-red-500">{error}</p>}

              {topitems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-300 bg-white"
                >
                  <div className="h-48 bg-gray-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-2 line-clamp-2">{item.description}</p>
                  <div className="text-indigo-600 font-bold text-lg">${item.price}</div>
                  <button className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
                    onClick={() => {
                      dispatch(AddToCart(item))
                      toast.success(`Successfully Added ${item.title.slice(0, 20)}!`)
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Cart />
    </>
  );
};

export default Home;

