"use client";
import { useState } from "react";
import playImg from "../../images/playButton.png";
import ticketImg from "../../images/ticket.png";

// import required modules
import { useTheaterMoviesQuery } from "@/app/redux/movies/moviesApi";
import Image from "next/image";
import Link from "next/link";
import TrailerModal from "./TrailerModal";

export default function TheatersSlider() {
  const [toggle, setToggle] = useState(false);
  const [trailer, setTrailer] = useState("");
  const [movieName, setMovieName] = useState("");
  const { isLoading, isError, data: movieData } = useTheaterMoviesQuery();
  const { data } = movieData || {};
  console.log(data);

  const handleToogle = (value) => {
    setToggle(!toggle);
    setTrailer(value?.triler);
    setMovieName(value?.title);
  };
  console.log(movieData);

  // what to render
  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>Somthing is error.</div>;
  } else if (!isLoading && !isError && data.length === 0) {
    content = <div>No data Found!</div>;
  } else if (!isLoading && !isError && data.length >= 0) {
    console.log("Is Data");
    content = data?.map((movie) => (
      <div key={movie?.id}>
        <div className="">
          <div className=" rounded-md overflow-hidden shadow-xl relative group ">
            <Image
              loading="lazy"
              src={movie?.poster}
              alt="poster"
              width={300}
              height={200}
            />
            <div className=" absolute flex items-center justify-center bg-gradient-to-t from-black   w-full h-full bottom-[-350px] ease-out duration-300 group-hover:bottom-0">
              <div className=" space-y-3">
                <div
                  onClick={() =>
                    handleToogle({
                      triler: movie?.trilarUrl,
                      title: movie?.name,
                    })
                  }
                  className=" flex items-center justify-center gap-3 font-semibold text-xl px-4 py-2 rounded-full ease-out duration-300 hover:bg-[#03151f] text-white text-center cursor-pointer bg-[#05484a]"
                >
                  <Image src={playImg} alt="playImg" width={17} />
                  <p>Play Trailer</p>
                </div>
                <Link
                  href={`/ticket/${movie?._id}`}
                  className=" flex items-center justify-center uppercase bg-[#9e450e] hover:bg-[#803506] ease-out duration-300 px-4 py-2 rounded-full text-white font-semibold gap-3"
                >
                  <Image src={ticketImg} alt="ticketImg" width={20} />
                  <button>Buy Tickets</button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" mt-4 space-y-2">
            <Link href={`/details/${movie?._id}`}>
              <h1 className=" text-xl font-semibold hover:text-primary transition">
                {movie?.name}
              </h1>
            </Link>
            <p className=" text-sm">{movie?.time}</p>

            <div className=" flex items-center flex-row gap-3 ">
              {movie?.catagory.map((c, index) => {
                return (
                  <div key={index}>
                    <Link
                      href={`movie_cat/${c}`}
                      className=" bg-slate-100 py-1 border-slate-300 cursor-pointer hover:bg-slate-200 ease-out duration-300 border px-2 rounded-full text-[12px]"
                    >
                      {c}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className=" mt-20">
      <h1 className=" text-[25px] font-semibold text-gray-600">In Theaters</h1>
      <TrailerModal
        handleToogle={handleToogle}
        toggle={toggle}
        trailer={trailer}
        title={movieName}
      />

      <div className=" mt-10 grid grid-cols-5 gap-7">{content}</div>
    </div>
  );
}
