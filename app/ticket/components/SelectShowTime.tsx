"use client";

import { addHallName, addShowTime } from "@/app/redux/ticket/ticketSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import SelectSeat from "./SelectSeat";

export default function SelectShowTime() {
  const [selectDate, setSelectDate] = useState("");
  const dispatch = useDispatch();

  const handleSelectDate = (value) => {
    setSelectDate(value?.time);
    dispatch(addHallName(value?.hall));
    dispatch(addShowTime(value?.time));
  };

  return (
    <div>
      <div className=" pt-10">
        <p className=" text-xl font-semibold">Select Show Time</p>
        <div className=" space-y-5">
          <div className=" flex flex-col md:flex-row gap-4 items-center justify-between my-4 bg-secondary p-4 rounded-md">
            <div>
              <h1 className=" text-xl text-white font-semibold">Hall 1</h1>
            </div>
            <div className=" flex items-center gap-3 ">
              <div
                onClick={() =>
                  handleSelectDate({ time: "11:50 AM", hall: "Hall 1" })
                }
                className={
                  selectDate === "11:50 AM"
                    ? ` border border-white  px-5 py-2  cursor-pointer bg-white text-secondary transition`
                    : `border-white border px-5 py-2 text-white cursor-pointer hover:bg-white hover:text-secondary transition`
                }
              >
                11:50 AM
              </div>
              <div
                onClick={() =>
                  handleSelectDate({ time: "7:00 PM", hall: "Hall 1" })
                }
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
          <div className=" flex flex-col md:flex-row  gap-3 items-center justify-between my-4 bg-secondary p-4 rounded-md">
            <div>
              <h1 className=" text-xl text-white font-semibold">Hall 2</h1>
            </div>
            <div className=" flex flex-wrap items-center gap-3 ">
              <div
                onClick={() =>
                  handleSelectDate({ time: "11:30 AM", hall: "Hall 2" })
                }
                className={
                  selectDate === "11:30 AM"
                    ? ` border border-white  px-5 py-2  cursor-pointer bg-white text-secondary transition`
                    : `border-white border px-5 py-2 text-white cursor-pointer hover:bg-white hover:text-secondary transition`
                }
              >
                11:30 AM
              </div>
              <div
                onClick={() =>
                  handleSelectDate({ time: "3:15 PM", hall: "Hall 2" })
                }
                className={
                  selectDate === "3:15 PM"
                    ? ` border border-white  px-5 py-2  cursor-pointer bg-white text-secondary transition`
                    : `border-white border px-5 py-2 text-white cursor-pointer hover:bg-white hover:text-secondary transition`
                }
              >
                3:15 PM
              </div>
              <div
                onClick={() =>
                  handleSelectDate({ time: "7:45 PM", hall: "Hall 2" })
                }
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
