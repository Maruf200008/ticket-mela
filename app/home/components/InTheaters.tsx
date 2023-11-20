"use client";

import { IoSearch } from "react-icons/io5";
import TheatersSlider from "./TheatersSlider";

export default function InTheaters() {
  return (
    <div className="  my-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="w-full">
        <div className=" flex items-end justify-end ">
          <form className="flex items-center border-b-2 pb-2 border-b-gray-500 w-[250px]">
            <div className="relative w-full ">
              <input type="text" className=" focus:outline-none" />
              <button
                type="button"
                className="absolute text-[20px] inset-y-0 end-0 flex items-center pe-3"
              >
                <IoSearch />
              </button>
            </div>
          </form>
        </div>
        <TheatersSlider />
      </div>
    </div>
  );
}
