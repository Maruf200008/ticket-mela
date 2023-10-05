import Image from "next/image";
import poster from "../../images/movieDetails/bellBottom1.jpg";
import poster2 from "../../images/movieDetails/bellBottom2.jpg";

export default function MoviePoster() {
  return (
    <div className=" w-full mt-10 grid-cols-12 grid gap-6 border-b">
      <div className=" col-span-5">
        <Image src={poster} alt="poster" height={700} />
        <div className=" my-7 space-y-6">
          <div className=" grid grid-cols-3">
            <p className=" font-semibold col-span-1">Director:</p>
            <p className=" text-neutral-500  text-start col-span-2">
              Ranjit Tewari
            </p>
          </div>
          <div className=" grid grid-cols-3">
            <p className=" font-semibold col-span-1">Writer:</p>
            <p className=" text-neutral-500  text-start col-span-2">
              Aseem Arrora
            </p>
          </div>
          <div className=" grid grid-cols-3">
            <p className=" font-semibold col-span-1">Rating:</p>
            <p className=" text-neutral-500  text-start col-span-2">G</p>
          </div>
        </div>
      </div>
      <div className=" col-span-7 ">
        <Image src={poster2} alt="poster" />
        <div className=" my-7 space-y-6">
          <div className=" grid grid-cols-3">
            <p className=" font-semibold col-span-1">Preimier:</p>
            <p className=" text-neutral-500  text-start col-span-2">
              26, March 2023
            </p>
          </div>
          <div className=" grid grid-cols-3">
            <p className=" font-semibold col-span-1">Time:</p>
            <p className=" text-neutral-500  text-start col-span-2">2h 3m</p>
          </div>
        </div>
      </div>
    </div>
  );
}
