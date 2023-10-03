"use client";

import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import man1 from "../images/feedback/man1.jpg";
import man2 from "../images/feedback/man2.jpg";
import man3 from "../images/feedback/man3.jpg";
import man4 from "../images/feedback/man4.jpg";
import man5 from "../images/feedback/man5.jpg";
import man6 from "../images/feedback/man6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import message from "../images/message.png";
// import required modules
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

export default function FeedbackSlider() {
  const personData = [
    {
      name: "Ahmed Rahman",
      img: man1,
    },
    {
      name: "Tahmina Ahmed",
      img: man2,
    },
    {
      name: "Farhan Khan",
      img: man3,
    },
    {
      name: "Nusrat Jahan",
      img: man4,
    },
    {
      name: "Aryan Islam",
      img: man5,
    },
    {
      name: "Sumaiya Akter",
      img: man6,
    },
  ];
  return (
    <div className=" mt-10">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper  relative group  "
      >
        {personData.map((data, index) => (
          <SwiperSlide key={index}>
            <div>
              <div className=" flex items-center gap-7">
                <div className="bg-secondary rounded-full p-2">
                  <div className=" bg-white rounded-full p-1">
                    <Image
                      src={message}
                      alt="message"
                      className=" absolute right-3 -z-30  top-20"
                      width={250}
                    />
                    <Image
                      src={data?.img}
                      alt="man1"
                      width={130}
                      className=" rounded-full"
                    />
                  </div>
                </div>
                <div className=" space-y-1">
                  <div className=" flex items-center gap-2 text-secondary">
                    <div>
                      <AiFillStar />
                    </div>
                    <div>
                      <AiFillStar />
                    </div>
                    <div>
                      <AiFillStar />
                    </div>
                    <div>
                      <AiFillStar />
                    </div>
                    <div>
                      <AiFillStar />
                    </div>
                  </div>
                  <div>
                    <h2 className=" text-[28px] font-semibold text-gray-800">
                      {data?.name}
                    </h2>
                    <p className=" text-neutral-500">Customer</p>
                  </div>
                </div>
              </div>
              <div className=" mt-5">
                <p className=" text-[18px] leading-10 text-neutral-600">
                  This is due to their excellent service, competitive pricing
                  and customer support. It's refresing to get such a personal
                  touch. Duis aute lorem ipsum is simply free text available in
                  the market reprehen.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
