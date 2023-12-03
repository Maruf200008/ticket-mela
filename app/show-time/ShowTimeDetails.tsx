import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TrailerModal from "../home/components/TrailerModal";
import others from "../images/OthersTicket.png";
import infoImg from "../images/info.png";
import playImg from "../images/playButton.png";
import poster1 from "../images/poster/poster1.jpg";
import premium from "../images/premiumTicket.png";
import ticketImg from "../images/ticket.png";
import vip from "../images/vipTicket.png";
export default function ShowTimeDetails({ hall }) {
  let ticketQuality;
  if (hall === "Vip") {
    ticketQuality = premium;
  } else if (hall === "Premium") {
    ticketQuality = vip;
  } else if (hall === "Others") {
    ticketQuality = others;
  }

  const [toggle, setTogglae] = useState(false);
  const [trailer, setTrailer] = useState("");

  const handleToogle = (value) => {
    setTogglae(!toggle);
    setTrailer(value);
  };
  return (
    <div>
      <div className=" grid grid-cols-12 gap-3 p-3 rounded-md shadow-xl  ">
        <div className=" col-span-6 ">
          <TrailerModal
            handleToogle={handleToogle}
            toggle={toggle}
            trailer={trailer}
          />
          <div className=" flex items-center gap-5">
            <div className=" rounded-md overflow-hidden">
              <Image src={poster1} alt="poster" height={400} />
            </div>
            <div className="  px-2">
              <h1 className=" text-xl font-semibold mb-4 text-violet-600">
                The Exorcist: Believer
              </h1>
              <div>
                <div className=" space-y-3">
                  <div className=" flex gap-5 items-end">
                    <p className=" font-semibold">Time</p>
                    <span className="ml-[32px]">:</span>
                    <p className="">2h 30m</p>
                  </div>
                  <div className=" flex gap-5">
                    <p className=" font-semibold">Category</p>
                    <span className=" ">:</span>
                    <p className="">2D</p>
                  </div>
                  <div className=" flex gap-5">
                    <p className=" font-semibold">Actor</p>
                    <span className=" ml-[30px]">:</span>
                    <p className="">
                      Ellen Burstyn, Max von Sydow, Linda Blair
                    </p>
                  </div>
                  <div className=" flex gap-5">
                    <p className=" font-semibold">Release</p>
                    <span className=" ml-[15px]">:</span>
                    <p className="">13-10-2022</p>
                  </div>
                  <div className=" flex gap-5">
                    <p className=" font-semibold">Language</p>
                    <span>:</span>
                    <p className="">English</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-center gap-5  p-4 mt-5 ">
                <Link
                  href="/details"
                  className=" bg-[#de7207] ease-out duration-300 px-6 py-2 rounded-md hover:bg-[#de9e07]  text-white cursor-pointer flex items-center gap-3"
                >
                  <Image
                    src={infoImg}
                    alt="infoImg"
                    width={20}
                    style={{ filter: "hue-rotate(90deg)" }}
                  />
                  <p>Details</p>
                </Link>
                <div
                  onClick={() =>
                    handleToogle(
                      "https://www.youtube.com/embed/RHuMV3R9M4w?si=4dcc4ZmuE7m2f3Ml"
                    )
                  }
                  className=" bg-[#035594] flex items-center gap-3  hover:bg-[#03355c] text-white ease-out duration-300 px-3 py-2 rounded-md cursor-pointer"
                >
                  <Image
                    src={playImg}
                    alt="playImg"
                    width={15}
                    style={{ filter: "hue-rotate(90deg)" }}
                  />
                  <p> Watch Trailer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-6 border-l-2 pl-5 border-red-300 ">
          <div className=" grid gap-3 grid-cols-2">
            <div className="text-center">
              <div className=" bg-[#FEECEA] py-3 rounded-md">
                <h1 className=" text-lg font-semibold ">Wednesday </h1>
                <p className=" text-sm">22nd , November 2023 </p>
              </div>
              <div className=" my-5 ">
                <div className=" flex items-center justify-center gap-4 flex-wrap">
                  <div className=" relative">
                    <Image src={ticketQuality} alt="premium" width={100} />
                    <div className=" top-2 absolute left-3  text-white flex items-center justify-center">
                      <p>01:50 PM </p>
                    </div>
                  </div>

                  <div className=" relative">
                    <Image src={ticketQuality} alt="premium" width={100} />
                    <div className=" top-2 absolute left-3  text-white flex items-center justify-center">
                      <p>04:10 PM </p>
                    </div>
                  </div>
                  <div className=" relative">
                    <Image src={ticketQuality} alt="premium" width={100} />
                    <div className=" top-2 absolute left-3  text-white flex items-center justify-center">
                      <p>06:45 PM </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-center">
                <Link
                  href="/ticket"
                  className=" flex items-center justify-center uppercase w-[180px] bg-[#ED4370] hover:bg-[#FC1348] ease-out duration-300 px-4 py-2 rounded-full text-white font-semibold gap-3"
                >
                  <Image src={ticketImg} alt="ticketImg" width={20} />
                  <button>Buy Tickets</button>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className=" bg-[#FEECEA] py-3 rounded-md">
                <h1 className=" text-lg font-semibold ">Thursday </h1>
                <p className=" text-sm">23rd , November 2023 </p>
              </div>
              <div className=" my-5 ">
                <div className=" flex items-center justify-center gap-4 flex-wrap">
                  <div className=" relative">
                    <Image src={ticketQuality} alt="premium" width={100} />
                    <div className=" top-2 absolute left-3  text-white flex items-center justify-center">
                      <p>11:20 AM </p>
                    </div>
                  </div>

                  <div className=" relative">
                    <Image src={ticketQuality} alt="premium" width={100} />
                    <div className=" top-2 absolute left-3  text-white flex items-center justify-center">
                      <p>04:20 PM </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-center">
                <Link
                  href="/ticket"
                  className=" flex items-center justify-center uppercase w-[180px] bg-[#ED4370] hover:bg-[#FC1348] ease-out duration-300 px-4 py-2 rounded-full text-white font-semibold gap-3"
                >
                  <Image src={ticketImg} alt="ticketImg" width={20} />
                  <button>Buy Tickets</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
