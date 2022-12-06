import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-01.png";
import { UserContext } from "../Context/AuthProvider";
import { BlurContext } from "../Context/SetBlur";

const Header = () => {
  const { setBlur, blur } = useContext(BlurContext);
  const { user, logOut } = useContext(UserContext);

  // sing out user
  const handleSignOut = () => {
    logOut()
      .then((res) => {
        toast.success("User sing out successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <header class={`text-gray-600 body-font ${blur ? "blur-sm" : undefined}`}>
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img className="w-20 h-28" src={logo} alt="" />
          <span class="ml-3 text-2xl font-semibold w-4">BEE 2 BEE</span>
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-end w-1/2 font-bold text-black">
          {user?.uid && (
            <>
              <Link
                to="/"
                class="mr-5 hover:text-gray-900 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 font-bold"
                >
                  <path
                    strokLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                Search
              </Link>
              <Link
                to="/"
                class="mr-5 hover:text-gray-900 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 001.029.696l3.471-1.388 3.472 1.388a.75.75 0 00.556 0l3.472-1.388 3.471 1.388a.75.75 0 001.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0012 1.5zm3.53 7.28a.75.75 0 00-1.06-1.06l-6 6a.75.75 0 101.06 1.06l6-6zM8.625 9a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm5.625 3.375a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                    clipRule="evenodd"
                  />
                </svg>
                Offers
              </Link>
              <Link
                to="/"
                class="mr-5 hover:text-gray-900 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                Cart
              </Link>
              <Link
                to="/"
                class="mr-5 hover:text-gray-900 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Profile
              </Link>
            </>
          )}
        </nav>
        {user?.uid ? (
          <button
            onClick={handleSignOut}
            class="inline-flex items-center bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-500 rounded-full text-black mt-4 md:mt-0 font-semibold shadow-lg"
          >
            SignOut
          </button>
        ) : (
          <button
            onClick={() => setBlur((e) => !e)}
            class="inline-flex items-center bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-500 rounded-full text-black mt-4 md:mt-0 font-semibold shadow-lg"
          >
            Login/Signup
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;