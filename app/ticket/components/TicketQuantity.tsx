"use client";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function TicketQuantity() {
  const [count, setCout] = useState(0);
  return (
    <div>
      <div className=" mt-10 w-[250px]">
        {" "}
        <p className=" text-xl font-semibold">Ticket Quantity</p>
        <div className=" mt-4">
          <div className="flex gap-2 items-center justify-between px-5 py-3 border border-neutral-300 rounded-md  ">
            <button
              disabled={count <= 0}
              onClick={() => setCout(count - 1)}
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
              onClick={() => setCout(count + 1)}
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
