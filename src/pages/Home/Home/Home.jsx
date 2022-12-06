import React, { useContext } from "react";
import { BlurContext } from "../../../Context/SetBlur";
import BannerSection from "../BannerSection/BannerSection";
import Service from "../Service/Service";

function Home() {
  const { blur } = useContext(BlurContext);
  return (
    <div className={`${blur ? "blur-sm" : undefined}`}>
      <BannerSection />
      <Service />
    </div>
  );
}

export default Home;
