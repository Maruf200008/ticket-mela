"use client";
import { useMoviesCatagoriesQuery } from "@/app/redux/movies/moviesApi";
import MoviesCard from "./MoviesCard";
export default function MoviesCards({ catagorie }) {
  const {
    isLoading,
    isError,
    data: movieData,
  } = useMoviesCatagoriesQuery(catagorie);

  // what to render

  let content;
  const { data } = movieData || {};

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>Somthing is error</div>;
  } else if (!isLoading && !isError && data.length === 0) {
    content = <div>No data found!</div>;
  } else if (!isLoading && !isError && data.length > 0) {
    content = data.map((movie) => {
      return (
        <div key={movie?._id}>
          <MoviesCard movie={movie} />
        </div>
      );
    });
  }

  return (
    <div className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full ">
      {content}
    </div>
  );
}
