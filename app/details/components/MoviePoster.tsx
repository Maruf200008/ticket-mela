import Image from "next/image";
import Link from "next/link";
import poster from "../../images/movieDetails/bellBottom1.jpg";
import icon from "../../images/movieIcon.png";

export default function MoviePoster() {
  return (
    <div>
      <div className=" w-full mt-10 grid md:grid-cols-12  gap-3 border-b ">
        <div className=" md:col-span-3 order-last md:order-first ">
          <Image src={poster} alt="poster" />
        </div>
        <div className=" md:col-span-9 ">
          <iframe
            className=" w-full h-[300px] sm:h-[350px] md:h-full"
            src="https://www.youtube.com/embed/COv52Qyctws?si=AL3WiOdjUYUCepPC"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className=" mt-5 space-y-5">
        <div className=" flex items-center gap-5">
          <Link
            href="/"
            className=" border border-neutral-200 px-8 py-2 bg-neutral-100 hover:bg-neutral-200  rounded-full ease-in duration-300"
          >
            Action
          </Link>
          <Link
            href="/"
            className=" border border-neutral-200 px-8 py-2 bg-neutral-100 hover:bg-neutral-200  rounded-full ease-in duration-300"
          >
            Thriller
          </Link>
        </div>
        <div className=" border-b border-neutral-200 w-[80%]  pb-3">
          <p>
            A high-octane action thriller which outlines the emotional journey
            of a man who is set to rectify the wrongs in the society.
          </p>
        </div>
        <div className=" border-b border-neutral-200 w-[80%]  pb-3">
          <div className=" flex flex-col md:flex-row gap-2 md:gap-5">
            <h3 className=" font-semibold text-primary">Director</h3>
            <p>Atlee</p>
          </div>
        </div>
        <div className=" border-b border-neutral-200 w-[80%]  pb-3">
          <div className=" flex flex-col md:flex-row gap-2 md:gap-5">
            <h3 className=" font-semibold text-primary">Writers</h3>
            <div className=" flex gap-3 items-center flex-wrap">
              <p>Sumit Arora</p>
              <Image src={icon} alt="icon" className=" w-[5px] h-[5px]" />
              <p>Atlee</p>
              <Image src={icon} alt="icon" className=" w-[5px] h-[5px]" />
              <p>Ramanagirivasan</p>
            </div>
          </div>
        </div>
        <div className=" border-b border-neutral-200 w-[80%]  pb-3">
          <div className="flex flex-col md:flex-row gap-2 md:gap-5">
            <h3 className=" font-semibold text-primary">Stars</h3>
            <div className=" flex gap-3 items-center flex-wrap">
              <p>Shah Rukh Khan</p>
              <Image src={icon} alt="icon" className=" w-[5px] h-[5px]" />
              <p>Nayanthara</p>
              <Image src={icon} alt="icon" className=" w-[5px] h-[5px]" />
              <p>Vijay Sethupathi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
