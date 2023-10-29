import Image from "next/image";
import { PiFilmReelFill } from "react-icons/pi";
import { josefin_sans } from "../../fonts";

import feedback from "../../images/feedbackImg.png";
import FeedbackSlider from "./FeedbackSlider";

export default function Feedbacks() {
  return (
    <div className=" bg-neutral-100 mt-10">
      <div className=" max-w-screen-xl  mx-auto p-4 grid lg:grid-cols-2 gap-5 py-32">
        <div className=" ">
          <div className=" text-[30px] text-secondary text-center">
            <PiFilmReelFill />
          </div>
          <p className=" text-neutral-500 font-semibold mt-3">Our Feedbacks</p>
          <h2
            className={` text-[33px]  md:text-[45px] lg:text-[55px] font-bold md:leading-[70px] mt-6 ${josefin_sans.className}`}
          >
            What They’re Talking About us?
          </h2>
          <FeedbackSlider />
        </div>
        <div>
          <Image src={feedback} alt="feedback" className=" w-full" />
        </div>
      </div>
    </div>
  );
}
