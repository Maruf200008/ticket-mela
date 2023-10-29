export default function Students() {
  return (
    <div className="">
      <div className="max-w-screen-xl studentContainer h-[300px]  md:h-[200px]  relative  mx-auto   my-10 bg-secondary px-5 md:px-10 text-white">
        <div className=" w-full ">
          <div className=" flex gap-5 flex-col md:flex-row md:items-center justify-between absolute top-[85px] w-full">
            <div>
              <h1 className=" text-[35px] font-semibold">
                40% Discount for Students
              </h1>
            </div>
            <div className=" md:mr-[100px] ">
              <button className="bg-black px-10 py-5 font-semibold hover:bg-white hover:text-secondary transition">
                Book Your Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
