"use client";
import Image from "next/image";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import award from "../../images/about/award.png";
import director from "../../images/about/director.png";
import produce from "../../images/about/produce.png";
import ticket from "../../images/about/ticket.png";

export default function ProducerDetail() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <div className=" bg-white shadow-xl shadow-gray-400/40 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  border-b-[10px]  px-10 border-secondary  ">
        <ScrollTrigger onEnter={() => setCounterOn(true)}>
          <div className=" grid md:grid-cols-4 gap-10 w-full md:px-20 pb-5">
            <div className=" flex items-center gap-5">
              <div className=" bg-neutral-100 px-5 mb-10">
                <Image src={award} alt="award" width={55} className=" mt-28 " />
              </div>
              <div className=" flexflex-col ">
                <h2 className=" text-[60px] font-semibold">
                  {counterOn && (
                    <CountUp start={0} end={23} duration={2} delay={0} />
                  )}
                </h2>
                <p className=" text-gray-400">Awards Won</p>
              </div>
            </div>
            <div className=" flex items-center gap-5">
              <div className=" bg-neutral-100 px-5 mb-10">
                <Image
                  src={produce}
                  alt="award"
                  width={55}
                  className=" mt-28 "
                />
              </div>
              <div className=" flexflex-col ">
                <h2 className=" text-[60px] font-semibold">
                  {counterOn && (
                    <CountUp start={0} end={870} duration={2} delay={0} />
                  )}
                </h2>
                <p className=" text-gray-400">Films Produce</p>
              </div>
            </div>
            <div className=" flex items-center gap-5">
              <div className=" bg-neutral-100 px-5 mb-10">
                <Image
                  src={director}
                  alt="award"
                  width={55}
                  className=" mt-28 "
                />
              </div>
              <div className=" flexflex-col ">
                <h2 className=" text-[60px] font-semibold">
                  {" "}
                  {counterOn && (
                    <CountUp start={0} end={30} duration={2} delay={0} />
                  )}
                </h2>
                <p className=" text-gray-400">Pro Directors</p>
              </div>
            </div>
            <div className=" flex items-center gap-5">
              <div className=" bg-neutral-100 px-5 mb-10">
                <Image
                  src={ticket}
                  alt="award"
                  width={55}
                  className=" mt-28 "
                />
              </div>
              <div className=" flexflex-col ">
                <h2 className=" text-[60px] font-semibold">
                  {" "}
                  {counterOn && (
                    <CountUp start={0} end={980} duration={2} delay={0} />
                  )}
                </h2>
                <p className=" text-gray-400">Tickets Sold</p>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
}
