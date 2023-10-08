"use client";

import { useState } from "react";
import SelectSeat from "./SelectSeat";

export default function SelectShowTime() {
  const [selectDate, setSelectDate] = useState("");

  return (
    <div>
      <div className=" pt-10">
        <p className=" text-xl font-semibold">Select Show Time</p>
        <div className=" space-y-5">
          <div className=" flex items-center justify-between my-4 bg-secondary p-4 rounded-md">
            <div>
              <h1 className=" text-xl text-white font-semibold">Hall 1</h1>
            </div>
            <div className=" flex items-center gap-3 ">
              <div
                onClick={() => setSelectDate("11:50 AM")}
                className={
                  selectDate === "11:50 AM"
                    ? ` border border-white  px-5 py-2  cursor-pointer bg-white text-secondary transition`
                    : `border-white border px-5 py-2 text-white cursor-pointer hover:bg-white hover:text-secondary transition`
                }
              >
                11:50 AM
              </div>
              <div
                onClick={() => setSelectDate("7:00 PM")}
                className={
                  selectDate === "7:00 PM"
                    ? ` border border-white  px-5 py-2  cursor-pointer bg-white text-secondary transition`
                    : `border-white border px-5 py-2 text-white cursor-pointer hover:bg-white hover:text-secondary transition`
                }
              >
                7:00 PM
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-between my-4 bg-secondary p-4 rounded-md">
            <div>
              <h1 className=" text-xl text-white font-semibold">Hall 2</h1>
            </div>
            <div className=" flex items-center gap-3 ">
              <div
                onClick={() => setSelectDate("11:30 AM")}
                className={
                  selectDate === "11:30 AM"
                    ? ` border border-white  px-5 py-2  cursor-pointer bg-white text-secondary transition`
                    : `border-white border px-5 py-2 text-white cursor-pointer hover:bg-white hover:text-secondary transition`
                }
              >
                11:30 AM
              </div>
              <div
                onClick={() => setSelectDate("3:15 PM")}
                className={
                  selectDate === "3:15 PM"
                    ? ` border border-white  px-5 py-2  cursor-pointer bg-white text-secondary transition`
                    : `border-white border px-5 py-2 text-white cursor-pointer hover:bg-white hover:text-secondary transition`
                }
              >
                3:15 PM
              </div>
              <div
                onClick={() => setSelectDate("7:45 PM")}
                className={
                  selectDate === "7:45 PM"
                    ? ` border border-white  px-5 py-2  cursor-pointer bg-white text-secondary transition`
                    : `border-white border px-5 py-2 text-white cursor-pointer hover:bg-white hover:text-secondary transition`
                }
              >
                7:45 PM
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectDate !== "" ? <SelectSeat /> : ""}
    </div>
  );
}
