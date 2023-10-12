"use client";
import {
  decrementSumTotalAmount,
  decrementTicketQuantity,
  incrementSumTotalAmount,
  incrementTicketQuantity,
} from "@/app/redux/ticket/ticketSlice";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";

export default function TicketQuantity({ price }) {
  console.log(price);
  const [count, setCout] = useState(0);
  const dispatch = useDispatch();
  const handleTicketIncrementCount = () => {
    setCout((prev) => prev + 1);
    dispatch(incrementTicketQuantity(count));
    dispatch(incrementSumTotalAmount(price));
  };
  const handleTicketDecrementCount = () => {
    setCout((prev) => prev - 1);
    dispatch(decrementTicketQuantity(count));
    dispatch(decrementSumTotalAmount(price));
  };
  return (
    <div>
      <div className=" mt-10 w-[250px]">
        {" "}
        <p className=" text-xl font-semibold">Ticket Quantity</p>
        <div className=" mt-4">
          <div className="flex gap-2 items-center justify-between px-5 py-3 border border-neutral-300 rounded-md  ">
            <button
              disabled={count <= 0}
              onClick={() => handleTicketDecrementCount()}
              className={
                count != 0
                  ? ` bg-[#f33360] hover:bg-primary transition p-2 text-xl rounded-full text-white `
                  : `  bg-primary transition p-2 text-xl rounded-full text-white `
              }
            >
              <AiOutlineMinus />
            </button>
            <div className=" text-center">
              <h1 className=" text-xl font-semibold">{count} Tickets</h1>
              <p className=" text-sm text-neutral-400">Max 10 Tickets</p>
            </div>
            <button
              disabled={count >= 10}
              onClick={() => handleTicketIncrementCount()}
              className={
                count != 10
                  ? ` bg-[#f33360] hover:bg-primary transition p-2 text-xl rounded-full text-white `
                  : `  bg-primary transition p-2 text-xl rounded-full text-white `
              }
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
