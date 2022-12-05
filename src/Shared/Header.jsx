import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-01.png"

const Header = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="w-20 h-28" src={logo} alt="" />
          <span class="ml-3 text-2xl font-semibold w-4">BEE 2 BEE</span>
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-end w-1/2 font-medium text-xl">
          <Link to="/" class="mr-5 hover:text-gray-900">Search</Link>
          <Link to="/" class="mr-5 hover:text-gray-900">Offers</Link>
          <Link to="/" class="mr-5 hover:text-gray-900">Cart</Link>
        </nav>
        <button class="inline-flex items-center bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-500 rounded-full text-black mt-4 md:mt-0 font-semibold shadow-lg">
          Login/Signup
        </button>
      </div>
    </header>
  );
};

export default Header;
