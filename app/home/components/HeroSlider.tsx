"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import poster1 from "../../images/poster/poster1.jpg";
import poster2 from "../../images/poster/poster2.jpg";
import poster3 from "../../images/poster/poster3.jpg";
import poster4 from "../../images/poster/poster4.jpg";
import poster5 from "../../images/poster/poster5.jpg";

export default function HeroSlider() {
  const movieData = [
    {
      id: 1,
      title: "Bell Bottom",
      img: poster1,
      time: "2h 14min",
      catagorie: "Action/Drama/Comidey",
    },
    {
      id: 2,
      title: "Jailer",
      img: poster2,
      time: "2h 14min",
      catagorie: "Action/Drama/Comidey",
    },
    {
      id: 3,
      title: "Priotoma",
      img: poster3,
      time: "2h 14min",
      catagorie: "Action/Drama/Comidey",
    },
    {
      id: 4,
      title: "Shurongo",
      img: poster4,
      time: "2h 14min",
      catagorie: "Action/Drama/Comidey",
    },
    {
      id: 5,
      title: "Pathaan",
      img: poster5,
      time: "2h 14min",
      catagorie: "Action/Drama/Comidey",
    },
  ];

  const [movies, setMovies] = useState(movieData);

  const handleNext = () => {
    // Copy the array of movies
    const newMovies = [...movies];

    // Move the first element to the end of the array
    const firstMovie = newMovies.shift();

    newMovies.push(firstMovie);

    // Update the ids in the array based on the new order
    const updatedMovies = newMovies.map((movie, index) => {
      return { ...movie, id: index + 1 };
    });

    // Update the state with the new array of movies
    setMovies(updatedMovies);
  };

  const handlePrev = () => {
    // Copy the array of movies
    const newMovies = [...movies];

    // Move the last element to the beginning of the array
    const lastMovie = newMovies.pop();
    newMovies.unshift(lastMovie);

    // Update the ids in the array based on the new order
    const updatedMovies = newMovies.map((movie, index) => {
      return { ...movie, id: index + 1 };
    });

    // Update the state with the new array of movies
    setMovies(updatedMovies);
  };
  return (
    <div className="">
      <div className="gallary h-[700px]  w-full bg-slate-950 flex items-center justify-center">
        <div className="gallary-container w-full flex h-[400px] justify-center items-center max-w-[1000px] mx-0 relative">
          {movies?.map((movie, index) => {
            return (
              <div
                key={index}
                className=" flex items-center justify-center ease-in-out duration-300"
              >
                <Image
                  className={`gallary-item-${movie?.id} gallary-item   `}
                  src={movie?.img}
                  alt="posert"
                />
              </div>
            );
          })}
        </div>
        <div className=" flex items-center  justify-between  absolute w-[1200px]">
          <button
            onClick={handlePrev}
            className=" gallry-controls-previous  bg-white px-5 py-3 rounded-md hover:bg-primary hover:text-white "
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => handleNext()}
            className=" bg-white px-5 py-3 rounded-md hover:bg-primary hover:text-white "
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
