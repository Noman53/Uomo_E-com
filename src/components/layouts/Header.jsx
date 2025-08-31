import { useState } from "react";
import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/Logo.png";
import { FiUser, FiSearch, FiHeart, FiShoppingCart, FiMenu, } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <div className="py-8">
        <Container>
          <Flex>
            <div className="">
              <Link to={'/'}>
                <Image imgSrc={Logo} />
              </Link>
            </div>
            <div className="m-auto">
              <ul className="flex gap-x-10 font-medium text-[14px] text-[#000000] uppercase">
                <Link to={"/"}>
                  <li className="relative group cursor-pointer">
                    <span className="transition-colors duration-200">Home</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                  </li>
                </Link>
                <Link to={"shop"}>
                  <li className="relative group cursor-pointer">
                    <span className="transition-colors duration-200">Shop</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                  </li>
                </Link>
                <Link to={"collection"}>
                  <li className="relative group cursor-pointer">
                    <span className="transition-colors duration-200">Collection</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                  </li>
                </Link>
                <Link to={"journal"}>
                  <li className="relative group cursor-pointer">
                    <span className="transition-colors duration-200">Journal</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                  </li>
                </Link>
                <Link to={"lookbook"}>
                  <li className="relative group cursor-pointer">
                    <span className="transition-colors duration-200">Lookbook</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                  </li>
                </Link>
                <Link to={"pages"}>
                  <li className="relative group cursor-pointer">
                    <span className="transition-colors duration-200">Pages</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                  </li>
                </Link>
              </ul>
            </div>

            <div className="flex items-center gap-5 text-xl">
              <FiSearch className="cursor-pointer" />
              <FiHeart className="cursor-pointer" />
              <FiShoppingCart className="cursor-pointer" />
              <FiUser
                className="cursor-pointer"
                onClick={() => setShowLogin(true)}
              />
              <FiMenu className="cursor-pointer md:hidden" />
            </div>
          </Flex>
        </Container>
      </div>
     
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-96 relative">
            {/* Close button */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              Close
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
