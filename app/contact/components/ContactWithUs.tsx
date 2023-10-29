import { PiFilmReelFill } from "react-icons/pi";
import { josefin_sans } from "../../fonts";

export default function ContactWithUs() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center text-center  flex-col my-16 mx-auto p-4">
      <div className=" text-[25px] text-secondary">
        <PiFilmReelFill />
      </div>
      <p className=" text-neutral-500 pt-3">Contact With Us</p>
      <div className=" md:w-[700px]">
        <h1
          className={` text-[40px] sm:text-[50px] md:text-[60px] font-semibold md:leading-[65px] mt-5 ${josefin_sans.className}`}
        >
          Feel Free to Write us Anytime
        </h1>
      </div>

      <div className=" mt-[80px]  md:w-[750px]">
        <form>
          <div className=" space-y-4">
            <div className=" grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  required
                  placeholder="Your Name"
                  type="text"
                  className=" focus:outline-none bg-neutral-100 text-neutral-500 text-sm px-5 py-4  w-full"
                />
              </div>
              <div>
                <input
                  required
                  placeholder="Email Adress"
                  type="text"
                  className=" focus:outline-none bg-neutral-100 px-5 py-4 text-sm text-neutral-500  w-full"
                />
              </div>
            </div>
            <div className=" grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  required
                  placeholder="Phone"
                  type="text"
                  className=" focus:outline-none bg-neutral-100 text-neutral-500 text-sm px-5 py-4  w-full"
                />
              </div>
              <div>
                <input
                  required
                  placeholder="Subject"
                  type="text"
                  className=" focus:outline-none bg-neutral-100 px-5 py-4 text-sm text-neutral-500  w-full"
                />
              </div>
            </div>
            <div className="">
              <div>
                <textarea
                  name="Comment"
                  cols="30"
                  rows="10"
                  placeholder="Write a Comment"
                  className=" bg-neutral-100 text-neutral-500 text-sm px-5 py-4  w-full focus:outline-none"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className=" bg-secondary px-10 py-5 font-semibold text-white hover:bg-white hover:border-secondary border-2 border-transparent hover:text-secondary transition"
              >
                Send a Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
