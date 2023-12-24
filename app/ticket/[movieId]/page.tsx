"use client";
import Image from "next/image";
import { FaClock, FaHeart } from "react-icons/fa6";
import { IoCalendarSharp } from "react-icons/io5";

import { useGetMovieQuery } from "@/app/redux/movies/moviesApi";
import Link from "next/link";
import ScreenDetails from "../components/screenDetails";

export default function page({ params }) {
  const { movieId } = params;

  const { isLoading, isError, data: movieData } = useGetMovieQuery(movieId);
  const { data } = movieData || {};

  //   what to render
  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>Somthing is rong!!</div>;
  } else if (!isLoading && !isError && data.length === 0) {
    content = <div>No data found!!</div>;
  } else if (!isLoading && !isError && data.length > 0) {
    content = data.map((movie) => {
      const { _id, name, Director, catagory, poster, time } = movie;

      return (
        <div key={_id} className=" col-span-4 rounded-lg overflow-hidden">
          <div>
            <div className=" relative">
              <Image src={poster} width={600} alt="poster" height={600} />
              <div className=" bg-gradient-to-t from-white via-transparent absolute top-0 w-full h-full" />
            </div>
            <div className=" p-5 my-10 space-y-2">
              <div className=" flex items-center gap-2 flex-wrap">
                {Director.map((dir, index) => (
                  <div key={index}>
                    <p className=" font-semibold text-neutral-500">
                      {index === Director.length - 1 ? dir : dir + ","}
                    </p>
                  </div>
                ))}
              </div>
              <Link href={`/details/${_id}`}>
                <h1 className=" text-xl font-semibold hover:text-primary transition">
                  {name}
                </h1>
              </Link>
              <div className=" flex items-center gap-3 ">
                {catagory.map((cat, index) => (
                  <div
                    key={index}
                    className="   text-neutral-500  border-neutral-300 px-4 py-1 rounded-full border"
                  >
                    <p>{cat}</p>
                  </div>
                ))}
              </div>
              <div className=" pt-10 space-y-4">
                <div className=" flex items-center gap-5">
                  <div className=" text-slate-600">
                    <FaHeart />
                  </div>
                  <div>
                    <p className="text-slate-600">95% (12323 votes)</p>
                  </div>
                </div>
                <div className=" flex items-center gap-5">
                  <div className=" text-slate-600">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-slate-600">{time}</p>
                  </div>
                </div>
                <div className=" flex items-center gap-5">
                  <div className=" text-slate-600">
                    <IoCalendarSharp />
                  </div>
                  <div>
                    <p className="text-slate-600">Apr 28, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="my-20 max-w-screen-xl mx-auto p-4 ">
      <div className=" grid md:grid-cols-12 w-full gap-16">
        {content}
        <div className="  col-span-8 w-full   ">
          <ScreenDetails />
        </div>
      </div>
    </div>
  );
}
