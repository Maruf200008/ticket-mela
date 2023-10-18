import Image from "next/image";
import img from "./images/404/notFoundImg.jpg";
export default function NotFound() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center flex-col my-10  mx-auto p-4">
      <Image src={img} alt="img" width={600} className="" />
      <h1 className=" text-[25px] font-semibold text-neutral-500">
        Page You are trying to access could not be found!
      </h1>
    </div>
  );
}
