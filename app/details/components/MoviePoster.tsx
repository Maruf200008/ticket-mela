import Image from "next/image";
import Link from "next/link";
import poster from "../../images/movieDetails/bellBottom1.jpg";

export default function MoviePoster() {
  return (
    <div>
      <div className=" w-full mt-10 grid-cols-12 grid gap-6 border-b ">
        <div className=" col-span-3 ">
          <Image src={poster} alt="poster" />
        </div>
        <div className=" col-span-9 ">
          <iframe
            className=" w-full h-full"
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
        <div className=" border-b border-neutral-200 w-[80%]  pb-5">
          <p>
            A high-octane action thriller which outlines the emotional journey
            of a man who is set to rectify the wrongs in the society.
          </p>
        </div>
        <div className=" border-b border-neutral-200 w-[80%]  pb-5">
          <p>
            A high-octane action thriller which outlines the emotional journey
            of a man who is set to rectify the wrongs in the society.
          </p>
        </div>
      </div>
    </div>
  );
}
