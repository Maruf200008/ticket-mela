import Image from "next/image";
import Link from "next/link";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsTagsFill } from "react-icons/bs";
import imag1 from "../../images/topMovies/poster3.jpg";

export default function MoviesCard() {
  return (
    <div>
      <div className=" relative group">
        <div className=" ">
          <Image
            src={imag1}
            alt="sdfasdf"
            width={300}
            className=" group-hover:translate-y-3 cursor-pointer transition duration-150 ease-in"
          />
        </div>
        <div className="  bg-white mx-2 p-7 w-[280px] shadow-xl mt-[-20px] translate-x-1 space-y-2 ">
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
              href="/"
              className=" hover:bg-primary p-2  hover:text-white bg-neutral-200  font-semibold text-neutral-500  "
            >
              Get Ticket
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}