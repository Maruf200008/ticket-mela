"use client";
import { BiSolidTimeFive } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import filmBc from "../images/filmBackground.png";
import tag from "../images/tag.png";
import poster1 from "../images/topMovies/poster1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { FreeMode, Pagination } from "swiper/modules";

export default function TopMoviesSlider() {
  return (
    <div className=" w-full my-7">
      <Swiper
        slidesPerView={2}
        spaceBetween={80}
        freeMode={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" bg-white w-[550px] relative    shadow-xl flex group gap-x-3 overflow-hidden">
            <Image
              src={filmBc}
              alt="film"
              width={350}
              className=" absolute -right-[150px] opacity-10 mt-10  "
            />
            <div className=" h-full overflow-hidden">
              <Image src={poster1} alt="poster" width={270} className="" />
            </div>
            <div className=" p-4 mt-7 space-y-2 z-40">
              <div className=" flex items-center gap-3">
                <Image src={tag} alt="tag" width={15} />
                <p className=" text-sm text-neutral-500">Adventure / Crime</p>
              </div>
              <div className=" flex items-center gap-3 ">
                <div className=" text-secondary text-xl">
                  <BiSolidTimeFive />
                </div>
                <p className=" text-sm text-neutral-500 ">150 Mins</p>
              </div>
              <h2 className=" cursor-pointer text-2xl font-semibold pt-5 hover:text-secondary transition">
                The Way of Water
              </h2>
              <div>
                <button className="  bg-neutral-200 px-3 py-2 mt-5 hover:bg-secondary hover:text-white transition">
                  Get Ticket
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white w-[550px] relative    shadow-xl flex group gap-x-3 overflow-hidden">
            <Image
              src={filmBc}
              alt="film"
              width={350}
              className=" absolute -right-[150px] opacity-10 mt-10  "
            />
            <div className=" h-full overflow-hidden">
              <Image src={poster1} alt="poster" width={270} className="" />
            </div>
            <div className=" p-4 mt-7 space-y-2 z-40">
              <div className=" flex items-center gap-3">
                <Image src={tag} alt="tag" width={15} />
                <p className=" text-sm text-neutral-500">Adventure / Crime</p>
              </div>
              <div className=" flex items-center gap-3 ">
                <div className=" text-secondary text-xl">
                  <BiSolidTimeFive />
                </div>
                <p className=" text-sm text-neutral-500 ">150 Mins</p>
              </div>
              <h2 className=" cursor-pointer text-2xl font-semibold pt-5 hover:text-secondary transition">
                The Way of Water
              </h2>
              <div>
                <button className="  bg-neutral-200 px-3 py-2 mt-5 hover:bg-secondary hover:text-white transition">
                  Get Ticket
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white w-[550px] relative mb-8    shadow-xl flex group gap-x-3 overflow-hidden">
            <Image
              src={filmBc}
              alt="film"
              width={350}
              className=" absolute -right-[150px] opacity-10 mt-10  "
            />
            <div className=" h-full overflow-hidden">
              <Image
                src={poster1}
                alt="poster"
                width={270}
                className="  mb-10"
              />
            </div>
            <div className=" p-4 mt-7 space-y-2 z-40">
              <div className=" flex items-center gap-3">
                <Image src={tag} alt="tag" width={15} />
                <p className=" text-sm text-neutral-500">Adventure / Crime</p>
              </div>
              <div className=" flex items-center gap-3 ">
                <div className=" text-secondary text-xl">
                  <BiSolidTimeFive />
                </div>
                <p className=" text-sm text-neutral-500 ">150 Mins</p>
              </div>
              <h2 className=" cursor-pointer text-2xl font-semibold pt-5 hover:text-secondary transition">
                The Way of Water
              </h2>
              <div>
                <button className="  bg-neutral-200 px-3 py-2 mt-5 hover:bg-secondary hover:text-white transition">
                  Get Ticket
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
