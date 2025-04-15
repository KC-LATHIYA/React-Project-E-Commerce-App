import React, { useEffect, useState } from "react";
import { FaBoxOpen, FaUser, FaClipboardList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { CreatePtoduct, GetAllPtoduct } from "../store/productslice";

const AdminPage = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "string",
    image: ""
  });

  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.product)

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // const handleAddProduct = (e) => {
  //   e.preventDefault();
  //   console.log("Product Added:", newProduct);

  //   dispatch(CreatePtoduct(newProduct)).then(() => {
  //     dispatch(GetAllPtoduct())
  //     setNewProduct({ name: "", description: "", price: "", stock: "", imageUrl: "" });
  //   })
  // };

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(CreatePtoduct(newProduct))
      .unwrap()
      .then((createdProduct) => {
        // Optional: refresh product list here
        dispatch(GetAllPtoduct());
        // Reset form
        setNewProduct({
          title: "",
          price: "",
          description: "",
          category: "men's clothing",
          image: "",
        });
        console.log("Product created:", createdProduct);
      })
      .catch((err) => {
        console.error("Failed to create product:", err);
      });
  };

  useEffect(() => {
    dispatch(GetAllPtoduct())
  }, [])


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-indigo-600 mb-8">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex items-center gap-4">
          <FaBoxOpen className="text-2xl text-indigo-500" />
          <div>
            <p className="text-gray-500 text-sm">Total Products</p>
            <h2 className="text-xl font-semibold text-gray-800">120</h2>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex items-center gap-4">
          <FaClipboardList className="text-2xl text-green-500" />
          <div>
            <p className="text-gray-500 text-sm">Total Orders</p>
            <h2 className="text-xl font-semibold text-gray-800">87</h2>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex items-center gap-4">
          <FaUser className="text-2xl text-pink-500" />
          <div>
            <p className="text-gray-500 text-sm">Total Users</p>
            <h2 className="text-xl font-semibold text-gray-800">52</h2>
          </div>
        </div>
      </div>

      {/* Product Management Table */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Management</h2>
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">Stylish Shirt</td>
              <td className="px-4 py-3">₹499</td>
              <td className="px-4 py-3">25</td>
              <td className="px-4 py-3">
                <button className="text-blue-600 hover:underline mr-2">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add Product Section */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Product</h2>
        <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
            <input
              type="text"
              name="title"
              value={newProduct.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
            <input
              type="number"
              name="stock"
              // value={newProduct.stock}
              // onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={newProduct.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
