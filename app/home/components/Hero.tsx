"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { josefin_sans } from "../../fonts";

export default function Hero() {
  return (
    <div className=" heroContainer">
      <div>
        <div className=" w-full h-[700px] overflow-hidden relative">
          <div className=" bg-gradient-to-t from-black  absolute h-full w-full">
            <div className=" flex items-center justify-center my-[300px] flex-col">
              <h1
                className={` text-[35px] md:text-[50px] text-white font-bold uppercase text-center ${josefin_sans.className}`}
              >
                Unlimited movies
              </h1>
              <p className=" text-neutral-300 text-center text-sm  md:text-xl">
                The Best Movie Ticket Distributor
              </p>

              <div className=" mt-10 md:w-[500px]">
                <form>
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      className="  focus:outline-none block w-full p-4 pl-10 text-sm text-white border border-gray-600 rounded-lg bg-black/50"
                      placeholder="Search your fevourite movies..."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2 bottom-2 sm:right-2.5 sm:bottom-2.5 bg-primary  font-medium rounded-lg text-sm px-4 py-2 "
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
