import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/sliderImg/img-1.jpg";
import img2 from "../../../assets/sliderImg/img-2.jpg";
import img3 from "../../../assets/sliderImg/img-3.jpg";

// Import Swiper styles
import "swiper/css";
import "./BannerSlider.css";
import { Autoplay } from "swiper";

const sliders = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
];

export default function BannerSlider() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {sliders.map((slider, i) => (
          <SwiperSlide key={i}>
            <img src={slider.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}