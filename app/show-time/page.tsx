import Image from "next/image";
import bg from "../images/showTime/Working-from-Home-Illustration.jpg";
export default function page() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center flex-col my-10  mx-auto p-4">
      <h2 className=" text-[30px] font-semibold text-primary animate-pulse">
        Working On...
      </h2>
      <Image src={bg} alt="bg" width={600} />
    </div>
  );
}
