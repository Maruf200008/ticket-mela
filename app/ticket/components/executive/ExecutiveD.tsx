"use client";
import Image from "next/image";
import { useState } from "react";
import activeSeatImg from "../../../images/ticket/activeSeat.png";
import seatImg from "../../../images/ticket/seat.png";

export default function ExecutiveD() {
  const [seatData1, setSeatData1] = useState([
    {
      id: 1,
      img: seatImg,
      seletcted: false,
      seatIsBooking: true,
    },
    {
      id: 2,
      img: seatImg,
      seletcted: false,
      seatIsBooking: true,
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
    {
      id: 5,
      img: seatImg,
      seletcted: false,
      seatIsBooking: true,
    },
    {
      id: 6,
      img: seatImg,
      seletcted: false,
      seatIsBooking: true,
    },
    {
      id: 7,
      img: seatImg,
      seletcted: false,
      seatIsBooking: true,
    },
  ]);

  const [seatData2, setSeatData2] = useState([
    {
      id: 1,
      img: seatImg,
      seletcted: false,
      seatIsBooking: true,
    },
    {
      id: 2,
      img: seatImg,
      seletcted: false,
      seatIsBooking: true,
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
    {
      id: 5,
      img: seatImg,
      seletcted: false,
      seatIsBooking: true,
    },
    {
      id: 6,
      img: seatImg,
      seletcted: false,
      seatIsBooking: true,
    },
    {
      id: 7,
      img: seatImg,
      seletcted: false,
      seatIsBooking: true,
    },
  ]);

  const handleSeat1 = (id) => {
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

  const handleSeat2 = (id) => {
    console.log("sdfsd");
    const updateseatData = seatData2.map((seat) => {
      if (seat?.id === id) {
        if (seat?.seletcted) {
          seat.seletcted = false;
        } else {
          seat.seletcted = true;
        }
      }
      return seat; // Return the modified seat object
    });
    setSeatData2(updateseatData);
  };
  return (
    <div>
      <div className=" grid gap-10 grid-cols-2 mt-10">
        <div className=" flex items-center justify-between">
          <p className=" text-slate-400">E</p>
          <div className=" flex items-center gap-3 justify-end">
            {seatData1.map((seat) => {
              return seat?.seatIsBooking ? (
                seat.seletcted ? (
                  <Image
                    key={seat?.id}
                    src={activeSeatImg}
                    alt="seatImg"
                    width={35}
                    onClick={() => handleSeat1(seat?.id)}
                    className=" cursor-pointer"
                  />
                ) : (
                  <Image
                    key={seat?.id}
                    src={seat?.img}
                    alt="seatImg"
                    width={35}
                    onClick={() => handleSeat1(seat?.id)}
                    className=" cursor-pointer"
                  />
                )
              ) : (
                <Image
                  key={seat?.id}
                  src={seat?.img}
                  alt="seatImg"
                  width={35}
                />
              );
            })}
          </div>
        </div>

        <div className=" flex items-center justify-between">
          <div className=" flex items-center gap-3 justify-end">
            {seatData2.map((seat) => {
              return seat?.seatIsBooking ? (
                seat.seletcted ? (
                  <Image
                    key={seat?.id}
                    src={activeSeatImg}
                    alt="seatImg"
                    width={35}
                    onClick={() => handleSeat2(seat?.id)}
                    className=" cursor-pointer"
                  />
                ) : (
                  <Image
                    key={seat?.id}
                    src={seat?.img}
                    alt="seatImg"
                    width={35}
                    onClick={() => handleSeat2(seat?.id)}
                    className=" cursor-pointer"
                  />
                )
              ) : (
                <Image
                  key={seat?.id}
                  src={seat?.img}
                  alt="seatImg"
                  width={35}
                />
              );
            })}
          </div>
          <p className=" text-slate-400">E</p>
        </div>
      </div>
    </div>
  );
}
