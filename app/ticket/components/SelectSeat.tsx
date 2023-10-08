"use client";

import Image from "next/image";
import { useState } from "react";

import tick from "../../images/tick.png";
import TicketQuantity from "./TicketQuantity";
export default function SelectSeat() {
  const [seatType, setSeatType] = useState("");
  return (
    <div className=" mt-7">
      <div>
        <div>
          <p className=" text-xl font-semibold">Select Seat Type</p>
          <div className=" mt-5 flex items-center gap-4">
            <div className="flex gap-3 items-center px-6 py-2 border border-gray-300 rounded ">
              {seatType !== "" && seatType === "Lounger" ? (
                <div
                  onClick={() => setSeatType("")}
                  className=" bg-primary rounded-full p-1 cursor-pointer"
                >
                  <Image src={tick} alt="tick" width={15} />
                </div>
              ) : (
                <div
                  onClick={() => setSeatType("Lounger")}
                  className=" w-[25px] h-[25px] rounded-full border-2 cursor-pointer border-gray-300"
                />
              )}
              <div className=" space-y-1">
                <h2 className=" text-xl font-semibold">Lounger</h2>
                <p className=" text-sm text-neutral-400">BDT 450 TK</p>
              </div>
            </div>
            <div className="flex gap-3 items-center px-6 py-2 border border-gray-300 rounded ">
              {seatType !== "" && seatType === "Regular" ? (
                <div
                  onClick={() => setSeatType("")}
                  className=" bg-primary rounded-full p-1 cursor-pointer"
                >
                  <Image src={tick} alt="tick" width={15} />
                </div>
              ) : (
                <div
                  onClick={() => setSeatType("Regular")}
                  className=" w-[25px] h-[25px] rounded-full border-2 cursor-pointer border-gray-300"
                />
              )}
              <div className=" space-y-1">
                <h2 className=" text-xl font-semibold">Regular</h2>
                <p className=" text-sm text-neutral-400">BDT 450 TK</p>
              </div>
            </div>
            <div className="flex gap-3 items-center px-6 py-2 border border-gray-300 rounded ">
              {seatType !== "" && seatType === "Semi Recliner" ? (
                <div
                  onClick={() => setSeatType("")}
                  className=" bg-primary rounded-full p-1 cursor-pointer"
                >
                  <Image src={tick} alt="tick" width={15} />
                </div>
              ) : (
                <div
                  onClick={() => setSeatType("Semi Recliner")}
                  className=" w-[25px] h-[25px] rounded-full border-2 cursor-pointer border-gray-300"
                />
              )}
              <div className=" space-y-1">
                <h2 className=" text-xl font-semibold">Semi Recliner</h2>
                <p className=" text-sm text-neutral-400">BDT 550 TK</p>
              </div>
            </div>
          </div>
        </div>
        {seatType ? <TicketQuantity /> : ""}
      </div>
    </div>
  );
}
