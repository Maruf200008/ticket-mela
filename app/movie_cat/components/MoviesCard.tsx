"use client";
import TrailerModal from "@/app/home/components/TrailerModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsTagsFill } from "react-icons/bs";

export default function MoviesCard({ movie }) {
  const [toggle, setToggle] = useState(false);
  const [trailer, setTrailer] = useState("");
  const [movieName, setMovieName] = useState("");
  const { catagory, name, poster, time, trilarUrl, releaseDate, _id } =
    movie || {};
  console.log(_id);

  const handleToogle = (value) => {
    setToggle(!toggle);
    setTrailer(value?.triler);
    setMovieName(value?.title);
  };

  return (
    <div className=" w-full ">
      <div className=" relative group">
        <div className=" ">
          <Image
            src={poster}
            width={200}
            height={100}
            alt="poster"
            className=" group-hover:translate-y-3 md:w-[400px] cursor-pointer transition duration-150 ease-in"
          />
        </div>
        <div className=" flex items-center justify-center flex-col ">
          <div className="  bg-white px-3 py-7 w-full z-20   shadow-xl mt-[-20px]  space-y-2 ">
            <Link
              href={`/details/${_id}`}
              className=" text-xl font-semibold cursor-pointer hover:text-secondary transition"
            >
              {name.length > 20 ? name.slice(0, 20) + "..." : name}
            </Link>
            <div className="pb-4 space-y-2">
              <div>
                <div className=" flex items-center gap-2">
                  <div className=" text-sm text-secondary">
                    <BsTagsFill />
                  </div>
                  <div className=" flex items-center gap-1">
                    {catagory?.map((cat, index) => (
                      <p
                        key={index}
                        className=" text-neutral-500 font-light text-sm"
                      >
                        {index === catagory.length - 1 ? cat : cat + ","}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" flex items-center gap-2">
                <div className=" text-sm text-secondary">
                  <BiSolidTimeFive />
                </div>
                <p className=" text-neutral-500 font-light text-sm">{time}</p>
              </div>
            </div>

            <div className=" flex items-center gap-3 mt-4 text-sm justify-center ">
              <div
                onClick={() =>
                  handleToogle({
                    triler: trilarUrl,
                    title: name,
                  })
                }
                className=" hover:bg-secondary cursor-pointer  p-2  hover:text-white bg-neutral-200  font-semibold text-neutral-500 transition delay-150 duration-300 ease-in-out"
              >
                Watch Trailer
              </div>
              {!releaseDate ? (
                <Link
                  href="/ticket"
                  className=" hover:bg-primary p-2 cursor-pointer transition delay-150 duration-300 ease-in-out  hover:text-white bg-neutral-200  font-semibold text-neutral-500  "
                >
                  Get Ticket
                </Link>
              ) : (
                <div className="  p-2 transition delay-150 duration-300 ease-in-out   bg-neutral-200  font-semibold text-neutral-500  ">
                  {" "}
                  Up Comming...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <TrailerModal
        handleToogle={handleToogle}
        toggle={toggle}
        trailer={trailer}
        title={movieName}
      />
    </div>
  );
}
