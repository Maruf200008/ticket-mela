import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { PiFilmReelFill } from "react-icons/pi";
import { josefin_sans } from "../../fonts";

import image1 from "../../images/about/image-1-our-team.jpg";
import image2 from "../../images/about/image-2-our-team.jpg";
import image3 from "../../images/about/image-3-our-team.jpg";

export default function FilmCrew() {
  return (
    <div className="max-w-screen-xl  mx-auto p-4 flex items-center flex-col">
      <div className=" text-[30px] text-secondary">
        <PiFilmReelFill />
      </div>
      <p className=" text-lg text-neutral-500">The Film Crew</p>
      <h1 className={` text-[50px] font-semibold ${josefin_sans.className}`}>
        Professional Film Crew
      </h1>
      <div className=" my-10 grid grid-cols-3 gap-10 w-full p-3">
        <div className="group ">
          <div className=" relative ">
            <div className=" h-[500px] w-[360px] overflow-hidden relative">
              <div className=" w-full h-full bg-black/0 group-hover:bg-black/50 ease-in duration-300 absolute z-40" />
              <Image
                src={image1}
                height={600}
                alt="image1"
                className=" relative"
              />
            </div>
            <div className=" w-[10px] h-[200px] bg-secondary group-hover:h-[250px] ease-in duration-300  absolute right-[0px] -bottom-6"></div>
            <div className=" w-[240px] h-[10px] bg-secondary group-hover:w-[270px] ease-in duration-300  absolute right-[0px] -bottom-6"></div>
          </div>
          <div className=" mt-10 flex items-center justify-between ">
            <div>
              <h2 className=" text-2xl font-semibold">Kevin Martin</h2>
              <p className=" text-sm text-neutral-400">Film Director</p>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary">
                <BsTwitter />
              </div>
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary">
                <BsFacebook />
              </div>
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary">
                <BsInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="group ">
          <div className=" relative ">
            <div className=" h-[500px] w-[360px] overflow-hidden relative">
              <div className=" w-full h-full bg-black/0 group-hover:bg-black/50 ease-in duration-300 absolute z-40" />
              <Image
                src={image2}
                height={600}
                alt="image1"
                className=" relative"
              />
            </div>
            <div className=" w-[10px] h-[200px] bg-secondary group-hover:h-[250px] ease-in duration-300  absolute right-[0px] -bottom-6"></div>
            <div className=" w-[240px] h-[10px] bg-secondary group-hover:w-[270px] ease-in duration-300  absolute right-[0px] -bottom-6"></div>
          </div>
          <div className=" mt-10 flex items-center justify-between ">
            <div>
              <h2 className=" text-2xl font-semibold">Jessica Brown</h2>
              <p className=" text-sm text-neutral-400">Film Director</p>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary">
                <BsTwitter />
              </div>
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary">
                <BsFacebook />
              </div>
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary">
                <BsInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="group ">
          <div className=" relative ">
            <div className=" h-[500px] w-[360px] overflow-hidden relative">
              <div className=" w-full h-full bg-black/0 group-hover:bg-black/50 ease-in duration-300 absolute z-40" />
              <Image
                src={image3}
                height={600}
                alt="image1"
                className=" relative"
              />
            </div>
            <div className=" w-[10px] h-[200px] bg-secondary group-hover:h-[250px] ease-in duration-300  absolute right-[0px] -bottom-6"></div>
            <div className=" w-[240px] h-[10px] bg-secondary group-hover:w-[270px] ease-in duration-300  absolute right-[0px] -bottom-6"></div>
          </div>
          <div className=" mt-10 flex items-center justify-between ">
            <div>
              <h2 className=" text-2xl font-semibold">Mike Hardson</h2>
              <p className=" text-sm text-neutral-400">Film Director</p>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary">
                <BsTwitter />
              </div>
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary">
                <BsFacebook />
              </div>
              <div className=" bg-neutral-200 p-3 rounded-full cursor-pointer hover:text-secondary">
                <BsInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
