import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <>
        <footer className="bg-gray-900 text-white py-10">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      
          
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MdLocationPin className="text-red-500 text-xl" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-sm text-gray-300">India, Asia</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MdAddCall className="text-green-500 text-xl" />
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-sm text-gray-300">9876543212</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <SiGmail className="text-red-400 text-xl" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-sm text-gray-300">krish@gmail.com</p>
                </div>
              </div>
            </div>
      
           
            <div></div>
      
            
            <div className="flex flex-col justify-between items-center md:items-end space-y-4">
              <div className="text-sm text-gray-400">© Cartify. All rights reserved.</div>
              <div className="flex space-x-4 text-xl">
                <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
                <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
                <a href="#" className="hover:text-gray-400 transition"><FaGithub /></a>
                <a href="#" className="hover:text-blue-500 transition"><FaFacebook /></a>
              </div>
            </div>
      
          </div>
        </footer>
      </>
      
    )
}

export default Footer