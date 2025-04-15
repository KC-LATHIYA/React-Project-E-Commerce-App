import React from 'react'
import { NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { dosearch } from '../store/searchslice'

function Header() {

    const dispatch = useDispatch();

    return (
        <>
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">

                    {/* Brand */}
                    <div className="text-2xl font-bold text-indigo-600">
                        <img src="/src/assets/logo-3.png" 
                        alt="logo" 
                        className='h-10' 
                        />
                    </div>

                    {/* Search Bar */}
                    <div className="w-full md:w-1/3 mt-4 md:mt-0">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full px-4 py-2 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onChange={(e) => dispatch(dosearch(e.target.value))}
                        />
                    </div>

                    {/* Nav Links + Auth Buttons */}
                    <div className="mt-4 md:mt-0 flex items-center space-x-6">
                        <nav>
                            <ul className="flex space-x-6 text-gray-700 font-medium">
                                <NavLink to="/">
                                    <li className="hover:text-indigo-600 cursor-pointer transition duration-300">Home</li>
                                </NavLink>
                                <NavLink to="/shop">
                                    <li className="hover:text-indigo-600 cursor-pointer transition duration-300">Shop</li>
                                </NavLink>
                                <NavLink to="/about">
                                    <li className="hover:text-indigo-600 cursor-pointer transition duration-300">About</li>
                                </NavLink>
                                <NavLink to="/contact">
                                    <li className="hover:text-indigo-600 cursor-pointer transition duration-300">Contact</li>
                                </NavLink>
                            </ul>
                        </nav>

                        {/* Auth Buttons */}
                        <div className="flex space-x-3">
                            <NavLink to="/login">
                                <button className="px-4 py-1 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition">
                                    Login
                                </button>
                            </NavLink>
                            <NavLink to="/signup">
                                <button className="px-4 py-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                                    Sign Up
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
