import React from "react";
import img1 from "../../../assets/services/service-01.png";
import img2 from "../../../assets/services/service-02.png";
import img3 from "../../../assets/services/service-03.png";

const Service = () => {
  return (
    <div className="mt-40 relative">
      <div className="absolute bottom-0 grid grid-cols-3 gap-6 mb-4">
        <div className="flex flex-col justify-center items-center relative">
          <img className="h-96 w-96 mb-5" src={img1} alt="" />
          <p className="absolute text-lg font-semibold bottom-5 text-center px-4">
            No Minimum Order Order in for yourself or for the group, with no
            restrictions on order value
          </p>
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <img className="h-80 w-80" src={img2} alt="" />
          <p className="text-lg font-semibold text-center px-4">
            Live Order Tracking Know where your order is at all times, from the
            restaurant to your doorstep
          </p>
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <img className="h-80 w-96 -mb-5" src={img3} alt="" />
          <p className="text-lg font-semibold text-center px-4">
            Lightning-Fast Delivery Experience Bee2Bee's super-fast delivery for
            food delivered fresh & on time
          </p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFF0C9"
          fill-opacity="1"
          d="M0,128L40,117.3C80,107,160,85,240,69.3C320,53,400,43,480,64C560,85,640,139,720,165.3C800,192,880,192,960,160C1040,128,1120,64,1200,48C1280,32,1360,64,1400,80L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Service;
