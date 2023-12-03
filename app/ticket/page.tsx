"use client";
import Image from "next/image";
import { FaClock, FaHeart } from "react-icons/fa6";
import { IoCalendarSharp } from "react-icons/io5";

import poster from "../images/poster/poster1.jpg";
import ScreenDetails from "./components/screenDetails";

export default function page() {
  return (
    <div className="my-20 max-w-screen-xl mx-auto p-4">
      <div className=" grid md:grid-cols-12 w-full gap-5">
        <div className=" col-span-4 bg-neutral-100 rounded-lg overflow-hidden">
          <div>
            <div className=" relative">
              <Image src={poster} alt="poster" height={600} />
              <div className=" bg-gradient-to-t from-neutral-100 via-transparent absolute top-0 w-full h-full"></div>
            </div>
            <div className=" p-5 my-10 space-y-2">
              <p className=" font-semibold text-neutral-500">
                {`S.S. Rajamouli's`}
              </p>
              <h1 className=" font-semibold text-neutral-800 text-2xl">
                Baahubali2 - The Conclusion (Hindi) (U/A)
              </h1>
              <div className=" flex items-center gap-3 ">
                <div className="   text-neutral-500  border-neutral-300 px-4 py-1 rounded-full border">
                  <p>Action</p>
                </div>
                <div className="  text-neutral-500  border-neutral-300 px-4 py-1 rounded-full border">
                  <p>Drama</p>
                </div>
                <div className=" text-neutral-500  border-neutral-300 px-4 py-1 rounded-full border">
                  <p>Fantasy</p>
                </div>
              </div>
              <div className=" pt-10 space-y-4">
                <div className=" flex items-center gap-5">
                  <div className=" text-slate-600">
                    <FaHeart />
                  </div>
                  <div>
                    <p className="text-slate-600">95% (12323 votes)</p>
                  </div>
                </div>
                <div className=" flex items-center gap-5">
                  <div className=" text-slate-600">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-slate-600">2h 45m</p>
                  </div>
                </div>
                <div className=" flex items-center gap-5">
                  <div className=" text-slate-600">
                    <IoCalendarSharp />
                  </div>
                  <div>
                    <p className="text-slate-600">Apr 28, 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  col-span-7 w-full ">
          <ScreenDetails />
        </div>
      </div>
    </div>
  );
}
