import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import successSound from '../assets/success.mp3'; // Put a success sound in /assets
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromCart } from '../store/cartslice';

function PaymentSuccess() {
    const [play] = useSound(successSound);
    const dispatch = useDispatch();
    const itemData = useSelector((state) => state.cart.items);

    useEffect(() => {
        play(); // Play success sound once when page loads
    }, [play]);

    const endhandler = () => {
        itemData.map((item) => {
            dispatch(RemoveFromCart(item.id))
        })
        navigate("/")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center px-4 relative overflow-hidden">
            <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} />

            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center animate-fade-in-up">
                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4 animate-bounce" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
                <p className="text-gray-600 mb-6">
                    Thank you for your purchase. Your order has been placed successfully.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition"
                    onClick={endhandler}
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
}

export default PaymentSuccess;
