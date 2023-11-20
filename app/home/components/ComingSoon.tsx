"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import poster1 from "../../images/poster/poster1.jpg";
import poster2 from "../../images/poster/poster2.jpg";
import poster3 from "../../images/poster/poster3.jpg";
import poster4 from "../../images/poster/poster4.jpg";
import poster5 from "../../images/poster/poster5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Pagination } from "swiper/modules";

export default function ComingSoon() {
  const moviesData = [
    {
      id: 1,
      img: poster1,
      title: "Bell Bottom",
      catagori: ["Action", "Thriller"],
      time: "2 Hours 49 Mins",
    },
    {
      id: 2,
      img: poster2,
      title: "Jailer",
      catagori: ["Action", "Thriller"],
      time: "2 Hours 49 Mins",
    },
    {
      id: 3,
      img: poster3,
      title: "Priotoma",
      catagori: ["Action", "Thriller"],
      time: "2 Hours 49 Mins",
    },
    {
      id: 4,
      img: poster4,
      title: "Shurongo",
      catagori: ["Action", "Thriller"],
      time: "2 Hours 49 Mins",
    },
    {
      id: 1,
      img: poster5,
      title: "Pathaan",
      catagori: ["Action", "Thriller"],
      time: "2 Hours 49 Mins",
    },
  ];
  return (
    <div className="  my-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="w-full">
        <div className=" mt-20">
          <h1 className=" text-[25px] font-semibold text-gray-600">
            Coming Soon
          </h1>
          <div className=" mt-10">
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              modules={[Pagination]}
              className="mySwiper"
            >
              {moviesData.map((movie) => {
                return (
                  <SwiperSlide key={movie.id}>
                    <div className="  ">
                      <div className=" rounded-md overflow-hidden shadow-xl relative group ">
                        <Image
                          src={movie?.img}
                          alt="poster"
                          className=" group-hover:blur-[3px] ease-out duration-300 "
                        />
                        <div className=" absolute flex items-center justify-center bg-black/40  w-full h-full bottom-[-350px] ease-out duration-300 group-hover:bottom-0">
                          <div className=" space-y-3">
                            <h1 className=" font-semibold text-xl text-white text-center">
                              Play Trailer
                            </h1>
                            <button className=" uppercase bg-secondary hover:bg-primary ease-out duration-300 px-4 py-2 rounded-full text-white font-semibold">
                              Buy Tickets
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-4 space-y-1">
                        <h1 className=" text-xl font-semibold">
                          {movie?.title}
                        </h1>
                        <p className=" text-sm">{movie?.time}</p>
                        <div className=" flex items-center flex-row gap-3 ">
                          {movie?.catagori.map((c, index) => {
                            return (
                              <div key={index}>
                                <p className=" bg-slate-100 py-1 border-slate-300 cursor-pointer hover:bg-slate-200 ease-out duration-300 border px-3 rounded-full">
                                  {c}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
