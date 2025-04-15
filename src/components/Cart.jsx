import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { RemoveFromCart, IncrimentItem, DecrementItem } from '../store/cartslice';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

function SlideInCart() {
    const [isOpen, setIsOpen] = useState(false);
    const itemdata = useSelector((state) => state.cart.items)

    const total = itemdata.reduce((total, item) => total += item.qty * item.price, 0)

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const checkouthandler = () => {
        if (itemdata.length === 0) {
            navigate("/");
            toast.error("Please Add Item In Cart !")
        } else {
            navigate("/checkout");
            toast.success("Let's Goo !")
        }
    };

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            {/* Cart Toggle Button */}
            <button
                onClick={toggleCart}
                className="fixed bottom-5 right-6 z-50 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition"
            >
                Cart 🛒
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={toggleCart}
                    className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40"
                ></div>
            )}

            {/* Cart Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-100 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? ' translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Cart Header */}
                <div className="flex justify-between items-center px-4 py-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
                    <button onClick={toggleCart} className="text-gray-600 hover:text-red-500 text-xl">  <IoClose /></button>
                </div>

                {/* Cart Items */}
                <div className="overflow-y-auto max-h-[calc(100vh-160px)] px-4 py-4 space-y-4">
                    {
                        itemdata.length > 0 ? (
                            itemdata.map((item) => (
                                <div key={item.id} className="flex gap-3 border border-gray-200 rounded-lg p-3 shadow-sm">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-16 h-16 object-contain bg-gray-100 rounded"
                                    />
                                    <div className="flex-1">
                                        <h4 className="text-sm font-semibold text-gray-700">{item.title.slice(0, 50)}...</h4>
                                        <p className="text-sm text-gray-500 mb-1">${item.price}</p>

                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                onClick={() => dispatch(DecrementItem(item.id))}
                                                className="bg-gray-200 text-gray-700 px-2 rounded hover:bg-gray-300 cursor-pointer"
                                            >
                                                −
                                            </button>
                                            <span className="px-2 text-sm">{item.qty}</span>
                                            <button
                                                onClick={() => dispatch(IncrimentItem(item.id))}
                                                className="bg-gray-200 text-gray-700 px-2 rounded hover:bg-gray-300 cursor-pointer"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        className="text-red-500 hover:text-red-600 text-sm cursor-pointer"
                                        onClick={() => {
                                            dispatch(RemoveFromCart(item.id))
                                            toast.error(`${item.title.slice(0, 20)} removed from cart`)
                                        }}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))) : (
                            <div className="flex justify-center items-center h-[calc(100vh-200px)] bg-gray-100 rounded-lg shadow-sm">
                                <p className="text-gray-500 text-lg font-medium text-center">
                                    🛒 No items found in your cart. Let’s go shopping!
                                </p>
                            </div>
                        )
                    }
                </div>

                {/* Cart Footer */}
                <div className="absolute bottom-0 w-full px-4 py-4 border-t bg-white">
                    <div className="flex justify-between mb-3 text-lg font-semibold">
                        <span>Total:</span>
                        <span className="text-indigo-600">${total.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-full font-medium"
                        onClick={checkouthandler}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
}

export default SlideInCart;
