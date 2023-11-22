"use client";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineStar } from "react-icons/md";
import LocationModal from "./LocationModal";
import ShowTimeDetails from "./ShowTimeDetails";

export default function page() {
  const [toggle, setToggle] = useState(false);
  const [location, setLocation] = useState("");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const locationHandle = (value) => {
    setLocation(value);
  };

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center flex-col my-10  mx-auto p-4">
      <div className=" flex items-center justify-between w-full">
        <div>
          <h2 className=" text-[25px] font-semibold text-gray-700">
            Weekly Showtime
          </h2>
          <p>[ {!location ? "Shimanto Shambhar, Dhanmondi 2" : location} ]</p>
          <div
            onClick={handleToggle}
            className=" flex items-center gap-3 mt-3 ease-out duration-300 font-semibold bg-[#db6b2a] hover:bg-[#d95000] px-4 py-3 w-[200px] rounded-full text-white cursor-pointer"
          >
            <p>Change Location</p>
            <div>
              <FaLocationDot />
            </div>
          </div>
        </div>
        <LocationModal
          handleToggle={handleToggle}
          toggle={toggle}
          locationHandle={locationHandle}
        />
        <div className=" flex items-center justify-center gap-4">
          <div className=" flex items-center gap-2">
            <div className=" bg-blue-500 py-3 px-2 rounded-md text-white text-xl">
              <MdOutlineStar />
            </div>
            <div>
              <h1 className=" text-xl text-blue-500">Vip</h1>
            </div>
          </div>
          <div className=" flex items-center gap-2">
            <div className=" bg-purple-600 py-3 px-2 rounded-md text-white text-xl">
              <MdOutlineStar />
            </div>
            <div>
              <h1 className=" text-xl text-purple-600">Premium</h1>
            </div>
          </div>
          <div className=" flex items-center gap-2">
            <div className=" bg-orange-500 py-3 px-2 rounded-md text-white text-xl">
              <MdOutlineStar />
            </div>
            <div>
              <h1 className=" text-xl text-orange-500">Others Hall</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full my-[70px] space-y-14">
        <ShowTimeDetails hall={"Vip"} />
        <ShowTimeDetails hall={"Premium"} />
        <ShowTimeDetails hall={"Others"} />
      </div>
    </div>
  );
}
