"use client";
import Image from "next/image";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import OtherC from "../images/Otherschair.png";
import PrimerC from "../images/Premiumchair.png";
import VipC from "../images/vipChair.png";
import LocationModal from "./LocationModal";

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
            <div>
              <Image src={VipC} alt="VipC" width={20} />
            </div>
            <div>
              <h1 className=" text-xl">Vip</h1>
            </div>
          </div>
          <div className=" flex items-center gap-2">
            <div>
              <Image src={PrimerC} alt="VipC" width={20} />
            </div>
            <div>
              <h1 className=" text-xl">Premium</h1>
            </div>
          </div>
          <div className=" flex items-center gap-2">
            <div>
              <Image src={OtherC} alt="VipC" width={20} />
            </div>
            <div>
              <h1 className=" text-xl">Others Hall</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
