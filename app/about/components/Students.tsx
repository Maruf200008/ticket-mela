import Image from "next/image";
import bg1 from "../../images/about/bg-discount-for-student.png";

export default function Students() {
  return (
    <div className="max-w-screen-xl relative  mx-auto   my-10 bg-secondary px-10 text-white">
      <div className=" w-full ">
        <Image
          src={bg1}
          alt="py-32"
          className=" mx-auto  opacity-30 flex items-center justify-center"
        />
        <div className=" flex items-center justify-between absolute top-[85px] w-full">
          <div>
            <h1 className=" text-[35px] font-semibold">
              40% Discount for Students
            </h1>
          </div>
          <div className=" mr-[100px] ">
            <button className="bg-black px-10 py-5 font-semibold hover:bg-white hover:text-secondary transition">
              Book Your Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
