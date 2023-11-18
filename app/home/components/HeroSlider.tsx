"use client";
import Image from "next/image";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import poster1 from "../../images/poster/poster1.jpg";
import poster2 from "../../images/poster/poster2.jpg";
import poster3 from "../../images/poster/poster3.jpg";
import fullPoster from "../../images/poster1.jpg";

export default function HeroSlider() {
  const handlePrev = () => {
    console.log("Prev Button");
  };
  const handleNext = () => {
    console.log("Prev Next");
  };
  return (
    <div className=" h-[800px]">
      <div className=" container absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[1000px] h-[600px] bg-[#f5f5f5] shadow-lg">
        <div className="slide">
          <div className="item">
            <div className="content">
              <div className="name">Switzerland</div>
              <div className="des">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti consectetur a, nulla eligendi similique mollitia
                repudiandae harum ab tenetur, distinctio ex ut, architecto illo
                labore.
              </div>
              <button>See More</button>
            </div>
          </div>
          <div className="">
            <Image src={fullPoster} alt="poster1" />
            <div className="content">
              <div className="name">Finland</div>
              <div className="des">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti consectetur a, nulla eligendi similique mollitia
                repudiandae harum ab tenetur, distinctio ex ut, architecto illo
                labore.
              </div>
              <button>See More</button>
            </div>
          </div>
          <div className="item overflow-hidden">
            <div className=" ">
              <Image src={poster1} alt="poster1" />
            </div>
            <div className="content">
              <div className="name">Iceland</div>
              <div className="des">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti consectetur a, nulla eligendi similique mollitia
                repudiandae harum ab tenetur, distinctio ex ut, architecto illo
                labore.
              </div>
              <button>See More</button>
            </div>
          </div>
          <div className="item overflow-hidden">
            <div className=" ">
              <Image src={poster2} alt="poster1" />
            </div>
            <div className="content">
              <div className="name">Iceland</div>
              <div className="des">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti consectetur a, nulla eligendi similique mollitia
                repudiandae harum ab tenetur, distinctio ex ut, architecto illo
                labore.
              </div>
              <button>See More</button>
            </div>
          </div>
          <div className="item overflow-hidden">
            <div className=" ">
              <Image src={poster3} alt="poster1" />
            </div>
            <div className="content">
              <div className="name">Iceland</div>
              <div className="des">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti consectetur a, nulla eligendi similique mollitia
                repudiandae harum ab tenetur, distinctio ex ut, architecto illo
                labore.
              </div>
              <button>See More</button>
            </div>
          </div>
        </div>
        <div className="button flex items-center gap-3 justify-center ">
          <button
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
          </button>
        </div>
      </div>
    </div>
  );
}
