import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-01.png";
import { UserContext } from "../../Context/AuthProvider";
import { BlurContext } from "../../Context/SetBlur";

const Login = () => {
  const [login, setLogin] = useState(true);
  const { setBlur } = useContext(BlurContext);
  const { createUserWithEmail } = useContext(UserContext);

  // form submit handler
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // create user with email and pass
    createUserWithEmail(email, password)
      .then((res) => {
        setBlur((e) => !e);
        toast.success("User Created Successfully!");
      })
      .catch((err) => {
        toast.error(
          err.message
            .split("Firebase: ")
            .join("")
            .split(" (")
            .join(": ")
            .split("auth/")
            .join(" ")
            .split("-")
            .join(" ")
            .split(")")
            .join("")
        );
      });
  };

  // login handler
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="absolute z-20 w-2/4 right-0 h-full">
      <div
        style={{ height: "90vh", marginTop: "5vh" }}
        className="my-auto bg-white rounded-tl-3xl rounded-bl-3xl relative border border-black border-r-0"
      >
        <svg
          className="absolute top-0 rounded-tl-3xl z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F5FCF4"
            fillOpacity="1"
            d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,170.7C1120,171,1280,117,1360,90.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <div className="flex justify-between mx-10">
          <div className="z-50 flex items-center justify-center mt-4 w-1/2">
            <img className="w-16 h-24" src={logo} alt="" />
            <span class="ml-3 text-2xl font-semibold w-4">BEE 2 BEE</span>
          </div>
          <button onClick={() => setBlur((e) => !e)} className="z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="w-3/4 h-full flex justify-center pt-10">
          {!login && (
            <form onSubmit={handleSignUp}>
              <h3 className="text-2xl font-semibold">New here?</h3>
              <p className="text-lg font-medium text-red-900">
                Sign up with email
              </p>
              <div>
                <label
                  for="full-name"
                  class="leading-7 text-sm font-semibold text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="full-name"
                  name="email"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div>
                <label
                  for="full-name"
                  class="leading-7 text-sm font-semibold text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="full-name"
                  name="password"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 checked:text-black"
                  />
                </div>
                <div className="ml-3 text-sm w-full flex justify-between">
                  <label htmlFor="offers" className="font-medium text-gray-700">
                    Remember me
                  </label>
                  <label className="font-medium  text-red-500">
                    <Link to="/">Forgot password?</Link>
                  </label>
                </div>
              </div>
              <div className="flex justify-center py-5">
                <button
                  type="submit"
                  className="bg-yellow-400 border-0 text-base py-2 px-3 focus:outline-none hover:bg-yellow-500 rounded-full text-black md:mt-0 font-semibold shadow-lg w-3/4"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex justify-center">
                <div className="flex h-5 items-center">
                  <input
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 checked:text-black"
                    onChange={() => setLogin((e) => !e)}
                  />
                </div>
                <div className="ml-3 text-sm w-full flex justify-between">
                  <label className="font-medium text-yellow-500">
                    {login ? "Register" : "Login"}
                  </label>
                </div>
              </div>
            </form>
          )}
          {login && (
            <form onSubmit={handleLogin}>
              <h3 className="text-2xl font-semibold">Welcome Back</h3>
              <p className="text-lg font-medium text-red-900">
                Log in to continue
              </p>
              <div>
                <label
                  for="full-name"
                  class="leading-7 text-sm font-semibold text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="full-name"
                  name="email"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div>
                <label
                  for="full-name"
                  class="leading-7 text-sm font-semibold text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="full-name"
                  name="password"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 checked:text-black"
                  />
                </div>
                <div className="ml-3 text-sm w-full flex justify-between">
                  <label htmlFor="offers" className="font-medium text-gray-700">
                    Remember me
                  </label>
                  <label className="font-medium  text-red-500">
                    <Link to="/">Forgot password?</Link>
                  </label>
                </div>
              </div>
              <div className="flex justify-center py-5">
                <button
                  type="submit"
                  className="bg-yellow-400 border-0 text-base py-2 px-3 focus:outline-none hover:bg-yellow-500 rounded-full text-black md:mt-0 font-semibold shadow-lg w-3/4"
                >
                  Login
                </button>
              </div>
              <div className="flex justify-center">
                <div className="flex h-5 items-center">
                  <input
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 checked:text-black"
                    onChange={() => setLogin((e) => !e)}
                  />
                </div>
                <div className="ml-3 text-sm w-full flex justify-between">
                  <label className="font-medium text-yellow-500">
                    {login ? "Register" : "Login"}
                  </label>
                </div>
              </div>
            </form>
          )}
        </div>
        <svg
          className="absolute bottom-0 rounded-bl-3xl"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F5FCF4"
            fillOpacity="1"
            d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,170.7C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Login;
