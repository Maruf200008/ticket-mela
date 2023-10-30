import Link from "next/link";
import MoviePoster from "./components/MoviePoster";
import StoryLine from "./components/StoryLine";
import TopCast from "./components/TopCast";

export default function page() {
  return (
    <div className="my-20 max-w-screen-xl   mx-auto p-4  ">
      <div className=" flex gap-10 flex-col md:flex-row md:items-center justify-between w-full">
        <div>
          <h1 className=" text-[35px] font-semibold">Bellbottom</h1>
          <p className=" text-neutral-400">Action, Thriller / 2h 3m</p>
        </div>
        <div className=" ">
          <Link
            href="/"
            className="bg-secondary px-10 py-4 text-white border border-secondary hover:text-secondary hover:bg-white ease-in duration-300  font-semibold"
          >
            Get Ticket
          </Link>
        </div>
      </div>
      <MoviePoster />
      <TopCast />
      <StoryLine />
    </div>
  );
}
