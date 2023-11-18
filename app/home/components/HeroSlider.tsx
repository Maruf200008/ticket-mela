"use client";
import Image from "next/image";
import poster1 from "../../images/poster/poster1.jpg";
import poster2 from "../../images/poster/poster2.jpg";
import poster3 from "../../images/poster/poster3.jpg";

export default function HeroSlider() {
  const handlePrev = () => {
    console.log("Prev Button");
  };
  const handleNext = () => {
    console.log("Prev Next");
  };
  return (
    <div className=" h-[800px]">
      <div className="gallary  w-full bg-slate-400 flex items-center justify-center">
        <div className="gallary-container w-full flex h-[400px] justify-center items-center max-w-[1000px] mx-0 relative">
          <Image
            className="gallary-item-1 gallary-item h-[200px] opacity-0 absolute"
            src={poster1}
            alt="posert"
          />
          <Image
            className="gallary-item-2 gallary-item"
            src={poster2}
            alt="posert"
          />
          <Image
            className="gallary-item-3 gallary-item"
            src={poster3}
            alt="posert"
          />
          <Image
            className="gallary-item-4 gallary-item"
            src={poster3}
            alt="posert"
          />
          <Image
            className="gallary-item-5 gallary-item"
            src={poster3}
            alt="posert"
          />
        </div>
        <div className="gallry-controls ">
          {/* <button
            onClick={handlePrev}
            className="prev bg-white px-5 py-3 rounded-md hover:bg-primary hover:text-white ease-in duration-300"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="next bg-white px-5 py-3 rounded-md hover:bg-primary hover:text-white ease-in duration-300"
          >
            <FaArrowRightLong />
          </button> */}
        </div>
      </div>
    </div>
  );
}
