import Image from "next/image";
import { PiFilmReelFill } from "react-icons/pi";

import film from "../../images/about/filmIcon.png";
import img1 from "../../images/about/image1.jpg";
export default function GetToKnow() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4  overflow-hidden">
      <div className=" grid grid-cols-2 gap-5 my-11">
        <div>
          <Image src={img1} alt="img" />
        </div>
        <div className=" space-y-3">
          <div className=" text-secondary text-2xl">
            <PiFilmReelFill />
          </div>
          <p className=" text-gray-500">Get To Know</p>
          <h1 className=" text-[55px] leading-[55px] font-semibold">
            Proving the Best Film Services
          </h1>
          <div className=" pt-14 leading-7 text-[18px] text-gray-400">
            <p>
              Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
              tempor incididunt labore dolore magna aliquaenim ad minim. Sed
              risus commodo ornare felis non, eleifend molestie metus pharetra
              eleifend.
            </p>
          </div>
          <div className=" flex items-center gap-3 pt-3">
            <div>
              <Image src={film} alt="film" width={60} />
            </div>
            <div className=" space-y-2">
              <h2 className=" text-xl font-semibold">6 Years of Innovation</h2>
              <p className=" text-gray-500">
                We're here for look even you from start to finish.
              </p>
            </div>
          </div>
          <div className="  pt-5">
            <button className=" bg-black text-white px-10 py-5 hover:bg-secondary transition">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
