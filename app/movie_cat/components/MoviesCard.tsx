import Image from "next/image";
import Link from "next/link";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsTagsFill } from "react-icons/bs";
import imag1 from "../../images/topMovies/poster3.jpg";

export default function MoviesCard() {
  return (
    <div className="  ">
      <div className=" relative group">
        <div className=" ">
          <Image
            src={imag1}
            alt="image"
            className=" group-hover:translate-y-3 md:w-[400px] cursor-pointer transition duration-150 ease-in"
          />
        </div>
        <div className=" flex items-center justify-center flex-col mx-5">
          <div className="  bg-white p-7 w-full z-50   shadow-xl mt-[-20px]  space-y-2 ">
            <h2 className=" text-xl font-semibold cursor-pointer hover:text-secondary transition">
              The Witcher Season 2
            </h2>
            <div className=" flex items-center gap-3 pb-4">
              <div>
                <div className=" flex items-center gap-2">
                  <div className=" text-sm text-secondary">
                    <BsTagsFill />
                  </div>
                  <p className=" text-neutral-500 font-light text-sm">
                    Action, Thriller
                  </p>
                </div>
              </div>
              <div className=" flex items-center gap-2">
                <div className=" text-sm text-secondary">
                  <BiSolidTimeFive />
                </div>
                <p className=" text-neutral-500 font-light text-sm">180 Mins</p>
              </div>
            </div>
            <div className=" flex items-center gap-3 mt-4 text-sm justify-center">
              <Link
                href="/"
                className=" hover:bg-secondary  p-2  hover:text-white bg-neutral-200  font-semibold text-neutral-500 transition delay-150 duration-300 ease-in-out"
              >
                Watch Trailer
              </Link>
              <Link
                href="/ticket"
                className=" hover:bg-primary p-2 transition delay-150 duration-300 ease-in-out  hover:text-white bg-neutral-200  font-semibold text-neutral-500  "
              >
                Get Ticket
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
