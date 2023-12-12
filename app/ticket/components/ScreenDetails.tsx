"use client";
import Image from "next/image";
import { useState } from "react";
import bookSeatImg from "../../images/ticket/bookSeat.png";
import screenImg from "../../images/ticket/screen.png";
import seatImg from "../../images/ticket/seat.png";
import ExecutiveA from "./executive/ExecutiveA";
import ExecutiveB from "./executive/ExecutiveB";
import ExecutiveC from "./executive/ExecutiveC";
import ExecutiveD from "./executive/ExecutiveD";
import ExecutiveE from "./executive/ExecutiveE";
import ExecutiveF from "./executive/ExecutiveF";

export default function ScreenDetails() {
  const [seatData1, setSeatData1] = useState([
    {
      id: 1,
      img: bookSeatImg,
      seletcted: false,
      seatIsBooking: false,
    },
    {
      id: 2,
      img: bookSeatImg,
      seletcted: false,
      seatIsBooking: false,
    },
    {
      id: 3,
      img: seatImg,
      seletcted: false,
      seatIsBooking: true,
    },
    {
      id: 4,
      img: seatImg,
      seletcted: false,
      seatIsBooking: true,
    },
  ]);

  const handleSeat = (id) => {
    const updateseatData = seatData1.map((seat) => {
      if (seat?.id === id) {
        if (seat?.seletcted) {
          seat.seletcted = false;
        } else {
          seat.seletcted = true;
        }
      }
      return seat; // Return the modified seat object
    });
    setSeatData1(updateseatData);
  };

  return (
    <div>
      <div className=" flex items-center w-full justify-center ">
        <Image src={screenImg} alt="screenImg" width={700} />
      </div>
      <div className=" mt-10 p-4 space-y-7">
        <p>Executive - 250/-</p>
        <ExecutiveF />
        <ExecutiveE />
        <p>Premium - 340/-</p>
        <ExecutiveD />
        <ExecutiveC />
        <p>Platinum- 640/-</p>
        <ExecutiveB />
        <ExecutiveA />
      </div>
      <div className=" flex items-center justify-center w-full p-4 mt-10">
        <button className=" bg-[#ff6969] ease-in duration-300 hover:bg-primary px-7 py-2 rounded-full text-white font-semibold shadow-xl">
          Confirm & Pay
        </button>
      </div>
    </div>
  );
}
