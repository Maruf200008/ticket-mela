"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import poster from "../images/poster7.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import { Navigation } from "swiper/modules";

export default function Hero() {
  return (
    <div className="">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className=" w-[100%] h-[600px]">
            <Image src={poster} alt="poster" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-[100%] h-[600px]">
            <Image src={poster} alt="poster" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
