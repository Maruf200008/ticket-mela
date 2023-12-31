"use client";
import { AiFillPlayCircle } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import filmBc from "../../images/filmBackground.png";
import tag from "../../images/tag.png";
import poster1 from "../../images/topMovies/poster1.jpg";
import poster2 from "../../images/topMovies/poster2.jpg";
import poster3 from "../../images/topMovies/poster3.jpg";
import poster4 from "../../images/topMovies/poster4.jpg";
import poster5 from "../../images/topMovies/poster5.jpg";
import poster6 from "../../images/topMovies/poster6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import Link from "next/link";

export default function TopMoviesSlider() {
  const moviesDetails = [
    {
      id: 1,
      img: poster1,
      catagories: "Action/Thriller",
      time: "2 Hours 49 Mins",
      name: "Jawan",
      link: "https://youtu.be/COv52Qyctws?si=nI8wxTx_dfoCw0wX",
    },
    {
      id: 2,
      img: poster2,
      catagories: "Action/Thriller",
      time: "2 Hours 27 Mins",
      name: "Dhaka Attack",
      link: "https://youtu.be/TUyHjmgi2e8?si=6dbF8s3jEoh8WxdZ",
    },
    {
      id: 3,
      img: poster3,
      catagories: "Biography/Drama/History",
      time: "3 Hours",
      name: "Oppenheimer",
      link: "https://youtu.be/uYPbbksJxIg?si=lSNbogRb25dlwSCN",
    },
    {
      id: 4,
      img: poster4,
      catagories: "Action/Adventure/Fantasy/Sci-Fi",
      time: "2 Hours 28 Mins",
      name: "Spider-Man: No Way Home",
      link: "https://youtu.be/JfVOs4VSpmA?si=KDi6Xpw7MiowJar2",
    },
    {
      id: 5,
      img: poster5,
      catagories: "Action/Crime/Drama/Thriller",
      time: "2 Hours 48 Mins",
      name: "K.G.F: Chapter 2",
      link: "https://youtu.be/JKa05nyUmuQ?si=1M_F6zaCGmGYUUyE",
    },
    {
      id: 6,
      img: poster6,
      catagories: "Action",
      time: "2 Hours 10 Mins",
      name: "Black War: Mission Exteme 2",
      link: "https://youtu.be/JSCo-PF9dYA?si=IPbczi2dtmh3wnu1",
    },
  ];
  return (
    <div className=" w-full my-7">
      <Swiper
        spaceBetween={40}
        freeMode={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="mySwiper"
      >
        {moviesDetails.map((data) => (
          <SwiperSlide key={data?.id}>
            <div className=" bg-white lg:w-[550px] lg:h-[250px] relative    shadow-xl grid lg:grid-cols-2 group  gap-5 overflow-hidden ">
              <Image
                src={filmBc}
                alt="film"
                className=" hidden lg:block  order-last lg:order-last lg:absolute lg:-right-[150px] opacity-10 lg:mt-10"
              />

              <div className=" order-first lg:order-fast h-full overflow-hidde">
                <Image
                  src={data?.img}
                  alt="poster"
                  className="lg:absolute w-[400px] h-[300px] md:w-[400px] md:h-[300px] lg:w-[300px]  lg:bottom-7 group-hover:bottom-0 ease-in-out duration-300"
                />
                <Link
                  href={data?.link}
                  target="_"
                  className=" z-40 absolute top-[25%] lg:group-hover:top-[45%] text-[50px]  inset-x-[45%] lg:inset-x-[25%]  ease-in-out duration-300 text-white cursor-pointer hover:text-secondary "
                >
                  <AiFillPlayCircle />
                </Link>
              </div>
              <div className="  p-4   space-y-2 z-40 lg:ml-5 ">
                <div className=" flex items-center gap-3">
                  <Image src={tag} alt="tag" width={13} />
                  <p className=" text-[12px] text-neutral-500">
                    {data?.catagories}
                  </p>
                </div>
                <div className=" flex items-center gap-2 ">
                  <div className=" text-secondary text-lg">
                    <BiSolidTimeFive />
                  </div>
                  <p className=" text-[12px] text-neutral-500 ">{data?.time}</p>
                </div>
                <h2 className=" cursor-pointer text-2xl font-semibold hover:text-secondary transition">
                  {data?.name.length > 20
                    ? data?.name.slice(0, 15) + "..."
                    : data?.name}
                </h2>
                <div className="pt-5">
                  <Link
                    href="/ticket"
                    className="  bg-neutral-200 px-3 py-2  hover:bg-secondary hover:text-white transition"
                  >
                    Get Ticket
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
