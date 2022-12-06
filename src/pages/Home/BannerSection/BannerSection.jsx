import React from "react";
import BannerSlider from "../BannerSlider/BannerSlider";

const BannerSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:h-80">
      <div className="px-8 h-full flex flex-col justify-center items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Begin your business</h2>
          <p className="text-3xl font-medium">
            Welcome to Redsoft, Order from your favorite stores
          </p>
        </div>
        <form className="w-full my-5">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-gray-900 dark:text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              class="block w-full px-4 py-2 pl-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="Search..."
              required
            />
          </div>
        </form>
      </div>
      <div>
        <BannerSlider />
      </div>
    </div>
  );
};

export default BannerSection;
