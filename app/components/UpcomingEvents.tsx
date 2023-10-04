import Image from "next/image";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { PiFilmReelFill } from "react-icons/pi";
import patternBg from "../images/patternBg.jpg";
import img1 from "../images/upCommingEvent/img1.jpg";
import img2 from "../images/upCommingEvent/img2.jpg";
import img3 from "../images/upCommingEvent/img3.jpg";

export default function UpcomingEvents() {
  const eventsData = [
    {
      img: img1,
      date: "29 Apr, 2025",
      title: "Best Magical Movies Ever Made",
      loaction: "Dhaka",
    },
    {
      img: img2,
      date: "05 Nov, 2025",
      title: "The Strange Love Movie 2023 Festival",
      loaction: "Chittagong",
    },
    {
      img: img3,
      date: "15 Dec, 2025",
      title: "Best Historical Movies Of 2023",
      loaction: "Chnadpur",
    },
  ];
  return (
    <div className=" relative  w-full  ">
      <Image src={patternBg} alt="patternBg" width={700} />
      <div>
        <div className=" absolute  w-full left-[10%]  top-[100px] max-w-screen-xl  mx-auto p-4 flex items-center justify-center flex-col">
          <div className=" flex items-center justify-center flex-col gap-3">
            <div className=" text-center text-[30px] text-secondary">
              <PiFilmReelFill />
            </div>
            <div className=" text-center">
              <p className=" text-[18px] text-neutral-500">Upcoming Events</p>
              <h2 className=" text-[45px] font-bold leading-[50px] mt-2">
                Register Yourself now <br /> for the Events
              </h2>
            </div>
            <div className=" grid grid-cols-3 gap-5 mt-7  w-full  ">
              {eventsData.map((data, index) => (
                <div key={index} className=" relative">
                  <div className="  to-transparent absolute bg-black/70  w-full h-full  group overflow-hidden     p-7 ">
                    <div className=" absolute -bottom-[170px] group-hover:bottom-[15px] ease-in-out duration-300 space-y-2 text-white">
                      <div className=" bg-secondary  p-2 text-[12px] w-[100px] ">
                        <p>{data?.date}</p>
                      </div>
                      <h2 className="text-[25px] font-semibold hover:text-secondary cursor-pointer transition">
                        {data?.title}
                      </h2>
                      <div className=" space-y-2">
                        <div className=" flex items-start gap-3 pt-5">
                          <div className=" text-secondary text-[18px]">
                            <BiSolidTimeFive />
                          </div>
                          <div>
                            <h3 className=" font-semibold -mt-1">6:00-9:00</h3>
                            <p className=" text-sm text-neutral-300 font-thin">
                              Timing
                            </p>
                          </div>
                        </div>
                        <div className=" flex items-start gap-3 pt-5">
                          <div className=" text-secondary text-[18px]">
                            <FaLocationDot />
                          </div>
                          <div>
                            <h3 className=" font-semibold -mt-1">
                              {data?.loaction}
                            </h3>
                            <p className=" text-sm text-neutral-300 font-thin">
                              Location
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="  flex items-end justify-end mr-7  ">
                        <div className="bg-white  text-secondary hover:text-white transition hover:bg-secondary cursor-pointer rounded-full p-1 text-[35px]">
                          <BsArrowRightShort />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image src={data?.img} alt="img1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
