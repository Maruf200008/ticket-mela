import { PiFilmReelFill } from "react-icons/pi";
import { josefin_sans } from "../../fonts";
import TopMoviesSlider from "./TopMoviesSlider";

export default function TopMovies() {
  return (
    <div className=" mt-[250px] max-w-screen-xl  mx-auto p-4 flex items-center justify-center flex-col">
      <div className=" flex items-center justify-center gap-y-3 flex-col mb-2">
        <div className=" text-2xl text-secondary ">
          <PiFilmReelFill />
        </div>
        <p className=" text-center text-lg font-semibold text-neutral-500">
          Checkout Top Movies
        </p>
      </div>
      <h1 className={` text-[50px] font-bold ${josefin_sans.className}`}>
        Top Movies in Theater
      </h1>
      <TopMoviesSlider />
    </div>
  );
}
