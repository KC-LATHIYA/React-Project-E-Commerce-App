import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllPtoduct } from '../store/productslice';
import { useNavigate } from 'react-router-dom';
import { AddToCart } from '../store/cartslice';
import { Toaster, toast } from 'react-hot-toast';

function ProductList() {
  const data = useSelector((state) => state.product.product);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const search = useSelector((state) => state.search.search)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetAllPtoduct());
  }, [dispatch]);

  const additem = (product) => {
    dispatch(AddToCart(product))
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="bg-white py-12 px-4 md:px-8 lg:px-16 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Explore Our Products
        </h2>

        {loading && <p className="text-center text-indigo-600">Loading products...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
          {
            data.length > 0 ? (
              (search ?
                data.filter((searchitem) =>
                  searchitem.title &&
                  searchitem.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                )
                : data
              ).map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-300 bg-white"
                >
                  <div className="h-48 bg-gray-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden"
                    onClick={() => navigate(`/productdetails/${item.id}`)}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full object-contain hover:scale-110 duration-500 transition-all ease-in-out"
                    />
                  </div>
                  <div onClick={() => navigate(`/productdetails/${item.id}`)}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-3 hover:text-blue-500">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-2 line-clamp-2 hover:text-blue-500">{item.description}</p>
                  </div>
                  <div className="text-indigo-600 font-bold text-lg">${item.price}</div>
                  <button className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition cursor-pointer"
                    onClick={() => {
                      additem(item)
                      toast.success(`Successfully Added ${item.title.slice(0, 20)}!`)
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              ) )
            ) : (
              !loading && <p className="text-center text-gray-500 col-span-full">No products found.</p>
            )
          }

        </div>
      </div>
    </>
  );
}

export default ProductList;
