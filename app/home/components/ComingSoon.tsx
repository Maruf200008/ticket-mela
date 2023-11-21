"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import playImg from "../../images/playButton.png";
import poster1 from "../../images/poster/poster1.jpg";
import poster2 from "../../images/poster/poster2.jpg";
import poster3 from "../../images/poster/poster3.jpg";
import poster4 from "../../images/poster/poster4.jpg";
import poster5 from "../../images/poster/poster5.jpg";
import ticketImg from "../../images/ticket.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import TrailerModal from "./TrailerModal";

export default function ComingSoon() {
  const moviesData = [
    {
      id: 1,
      img: poster1,
      title: "Bell Bottom",
      catagori: ["Action", "Thriller"],
      time: "2 Hours 49 Mins",
      trailer: "https://www.youtube.com/embed/A6eZ49O67YQ?si=j5sQZh4WGNH2onup",
    },
    {
      id: 2,
      img: poster2,
      title: "Jailer",
      catagori: ["Action", "Thriller"],
      time: "2 Hours 49 Mins",
      trailer: "https://www.youtube.com/embed/Y5BeWdODPqo?si=zmV24Us0a-wZGULo",
    },
    {
      id: 3,
      img: poster3,
      title: "Priotoma",
      catagori: ["Action", "Thriller"],
      time: "2 Hours 49 Mins",
      trailer: "https://www.youtube.com/embed/oy7FY3k3TJc?si=qlDNN61I1Lzu_Jgf",
    },
    {
      id: 4,
      img: poster4,
      title: "Shurongo",
      catagori: ["Action", "Thriller"],
      time: "2 Hours 49 Mins",
      trailer: "https://www.youtube.com/embed/9OuJwweHJ_I?si=R7_ksykgv5Sqay_A",
    },
    {
      id: 5,
      img: poster5,
      title: "Pathaan",
      catagori: ["Action", "Thriller"],
      time: "2 Hours 49 Mins",
      trailer: "https://www.youtube.com/embed/vqu4z34wENw?si=7D5EvNJGJ43axbbx",
    },
  ];

  const [toggle, setToggle] = useState(false);
  const [trailer, setTrailer] = useState("");

  const handleToogle = (value) => {
    setToggle(!toggle);
    setTrailer(value);
  };

  return (
    <div className="  my-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="w-full">
        <div className=" mt-20">
          <h1 className=" text-[25px] font-semibold text-gray-600">
            Coming Soon
          </h1>
          <TrailerModal
            handleToogle={handleToogle}
            toggle={toggle}
            trailer={trailer}
          />
          <div className=" mt-10">
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              modules={[Pagination]}
              className="mySwiper"
            >
              {moviesData.map((movie, index) => {
                return (
                  <div key={index}>
                    <SwiperSlide>
                      <div className="  ">
                        <div className=" rounded-md overflow-hidden shadow-xl relative group ">
                          <Image src={movie?.img} alt="poster" />
                          <div className=" absolute flex items-center justify-center bg-gradient-to-t from-black   w-full h-full bottom-[-350px] ease-out duration-300 group-hover:bottom-0">
                            <div className=" space-y-3">
                              <div
                                onClick={() => handleToogle(movie?.trailer)}
                                className=" flex items-center justify-center gap-3 font-semibold text-xl px-4 py-2 rounded-full ease-out duration-300 hover:bg-[#03151f] text-white text-center cursor-pointer bg-[#05484a]"
                              >
                                <Image src={playImg} alt="playImg" width={17} />
                                <p>Play Trailer</p>
                              </div>
                              <Link
                                href="/ticket"
                                className=" flex items-center justify-center uppercase bg-[#9e450e] hover:bg-[#803506] ease-out duration-300 px-4 py-2 rounded-full text-white font-semibold gap-3"
                              >
                                <Image
                                  src={ticketImg}
                                  alt="ticketImg"
                                  width={20}
                                />
                                <button>Buy Tickets</button>
                              </Link>
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
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
