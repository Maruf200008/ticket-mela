import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { PiFilmReelFill } from "react-icons/pi";
import { josefin_sans } from "../../fonts";

import image1 from "../../images/about/image-1-our-team.jpg";
import image2 from "../../images/about/image-2-our-team.jpg";
import image3 from "../../images/about/image-3-our-team.jpg";

export default function FilmCrew() {
  return (
    <div className="max-w-screen-xl mt-10  mx-auto flex items-center flex-col p-4">
      <div className=" text-[30px] text-secondary">
        <PiFilmReelFill />
      </div>
      <p className=" text-sm md:text-lg text-neutral-500">The Film Crew</p>
      <h1
        className={` text-[40px] text-center md:text-[50px] font-semibold ${josefin_sans.className}`}
      >
        Professional Film Crew
      </h1>
      <div className=" my-10 grid md:grid-cols-3 gap-10 w-full p-3">
        <div className="group  ">
          <div className=" w-full">
            <Image src={image1} alt="Image" width={500} />
          </div>
          <div className=" mt-10 flex gap-5 flex-col md:flex-row md:items-center justify-between ">
            <div>
              <h2 className=" text-2xl font-semibold">Kevin Martin</h2>
              <p className=" text-sm text-neutral-400">Film Director</p>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary transition">
                <BsTwitter />
              </div>
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary transition">
                <BsFacebook />
              </div>
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary transition">
                <BsInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="group  ">
          <div className=" w-full">
            <Image src={image2} alt="Image" width={500} />
          </div>
          <div className=" mt-10 flex gap-5 flex-col md:flex-row md:items-center justify-between ">
            <div>
              <h2 className=" text-2xl font-semibold">Jessica Brown</h2>
              <p className=" text-sm text-neutral-400">Film Director</p>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary transition">
                <BsTwitter />
              </div>
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary transition">
                <BsFacebook />
              </div>
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary transition">
                <BsInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="group  ">
          <div className=" w-full">
            <Image src={image3} alt="Image" width={500} />
          </div>
          <div className=" mt-10 flex gap-5 flex-col md:flex-row md:items-center justify-between ">
            <div>
              <h2 className=" text-2xl font-semibold">Kevin Martin</h2>
              <p className=" text-sm text-neutral-400">Film Director</p>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary transition">
                <BsTwitter />
              </div>
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary transition">
                <BsFacebook />
              </div>
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary transition">
                <BsInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
