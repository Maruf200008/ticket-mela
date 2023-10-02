"use client";

import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import poster1 from "../images/poster1.jpg";
import poster2 from "../images/poster2.jpg";
import poster3 from "../images/poster3.jpg";
import poste4 from "../images/poster4.jpg";
import poster5 from "../images/poster5.jpg";
import poster6 from "../images/poster6.jpg";
import poster7 from "../images/poster7.jpg";
import poster8 from "../images/poster8.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";

export default function Hero() {
  const moviePoster = [
    poster1,
    poster2,
    poster3,
    poste4,
    poster5,
    poster6,
    poster7,
    poster8,
  ];
  return (
    <div>
      <Swiper
        navigation={{
          nextEl: ".buton-next-slide",
          prevEl: ".buton-prev-slide",
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper  relative group  "
      >
        {moviePoster.map((poster, index) => (
          <SwiperSlide key={index}>
            <div className=" w-[100%] h-[600px] ">
              <div className=" flex items-center justify-center">
                <Image src={poster} alt="poster" />
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="buton-next-slide z-10 group-hover:left-[50px] -left-[23rem] mr-11 w-[40px] h-[40px] bg-primary rounded-md cursor-pointer grid place-items-center text-white absolute top-[50%] ease-in duration-300">
          <AiFillCaretRight />
        </div>
        <div className="buton-prev-slide z-10 group-hover:right-0  -right-[23rem] mr-11 w-[40px] h-[40px] bg-primary rounded-md cursor-pointer grid place-items-center text-white absolute top-[50%] ease-in duration-300">
          <AiFillCaretLeft />
        </div>
      </Swiper>

      <div className=" mb-10 bg-primary h-[80px] mx-auto p-5 ">
        <div className=" flex items-center justify-center gap-10">
          <Link
            href="https://www.facebook.com/profile.php?id=100088210389764"
            target="_"
            className=" border px-5 py-2 flex items-center gap-3 text-white hover:bg-white hover:text-primary transition rounded-md"
          >
            <div>
              <FaFacebookF />
            </div>
            <div>
              <p>Visit Facebook</p>
            </div>
          </Link>
          <Link
            href="https://github.com/Maruf200008"
            target="_"
            className=" border px-5 py-2 flex items-center gap-3 text-white hover:bg-white hover:text-primary transition rounded-md"
          >
            <div>
              <AiFillGithub />
            </div>
            <div>
              <p>Visit GitHub</p>
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mohammad-maruf-a77b9621a"
            target="_"
            className=" border px-5 py-2 flex items-center gap-3 text-white hover:bg-white hover:text-primary transition rounded-md"
          >
            <div>
              <AiFillLinkedin />
            </div>
            <div>
              <p>Visit Linkdin</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
