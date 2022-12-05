import React from "react";
import BannerSlider from "../BannerSlider/BannerSlider"

const BannerSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-80">
      <div className="px-8 h-full flex justify-center items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Begin your business</h2>
          <p className="text-3xl font-medium">
            Welcome to Redsoft, Order from your favorite stores
          </p>
        </div>
      </div>
      <div>
        <BannerSlider/>
      </div>
    </div>
  );
};

export default BannerSection;
