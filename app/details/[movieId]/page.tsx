"use client";
import { useGetMovieQuery } from "@/app/redux/movies/moviesApi";
import Link from "next/link";
import MoviePoster from "../components/MoviePoster";
import StoryLine from "../components/StoryLine";
import TopCast from "../components/TopCast";

export default function page({ params }) {
  const { movieId } = params;
  const { isLoading, isError, data: MovieData } = useGetMovieQuery(movieId);

  const { data } = MovieData || {};

  let content;

  // what to render

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>Somthing is rong.</div>;
  } else if (!isLoading && !isError && data?.length === 0) {
    content = <div>No content found!!</div>;
  } else if (!isLoading && !isError && data?.length > 0) {
    content = data.map((movie) => {
      const { name, catagory, time, releaseDate } = movie || {};
      console.log(movie);
      return (
        <div key={movie?._id} className="my-20 max-w-screen-xl   mx-auto p-4  ">
          <div className=" flex gap-10 flex-col md:flex-row md:items-center justify-between w-full">
            <div>
              <h1 className=" text-[35px] font-semibold">{name}</h1>
              <div className=" flex items-center gap-2">
                {catagory.map((cat, index) => (
                  <p key={index} className=" text-neutral-400">
                    {index === catagory.length - 1
                      ? `${cat}` + " /"
                      : cat + ","}
                  </p>
                ))}
                <p className=" text-neutral-400">{time}</p>
              </div>
            </div>
            {!releaseDate ? (
              <div>
                <Link
                  href={`/ticket/${movie?._id}`}
                  className="bg-secondary px-10 py-4 text-white border border-secondary hover:text-secondary hover:bg-white ease-in duration-300  font-semibold"
                >
                  Get Ticket
                </Link>
              </div>
            ) : null}
          </div>
          <MoviePoster movie={movie} />
          <TopCast movie={movie} />
          <StoryLine movie={movie} />
        </div>
      );
    });
  }

  return <>{content}</>;
}
