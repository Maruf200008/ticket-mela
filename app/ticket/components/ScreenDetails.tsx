"use client";
import Image from "next/image";
import screenImg from "../../images/ticket/screen.png";
import ExecutiveA from "./executive/ExecutiveA";
import ExecutiveB from "./executive/ExecutiveB";
import ExecutiveC from "./executive/ExecutiveC";
import ExecutiveD from "./executive/ExecutiveD";
import ExecutiveE from "./executive/ExecutiveE";
import ExecutiveF from "./executive/ExecutiveF";

export default function ScreenDetails() {
  let count;
  const handleAmount = (amount) => {
    console.log(amount);
  };
  return (
    <div>
      <div className=" flex items-center w-full justify-center ">
        <Image src={screenImg} alt="screenImg" width={700} />
      </div>
      <div className=" mt-10 p-4 space-y-7">
        <p>Executive - 250/-</p>
        <ExecutiveF handleAmount={handleAmount} amount="500" />
        <ExecutiveE handleAmount={handleAmount} />
        <p>Premium - 340/-</p>
        <ExecutiveD handleAmount={handleAmount} />
        <ExecutiveC handleAmount={handleAmount} />
        <p>Platinum- 640/-</p>
        <ExecutiveB handleAmount={handleAmount} />
        <ExecutiveA handleAmount={handleAmount} />
      </div>
      <div className=" flex items-center justify-center w-full p-4 mt-10">
        <button className=" bg-[#ff6969] ease-in duration-300 hover:bg-primary px-7 py-2 rounded-full text-white font-semibold shadow-xl">
          Confirm & Pay
        </button>
      </div>
    </div>
  );
}
