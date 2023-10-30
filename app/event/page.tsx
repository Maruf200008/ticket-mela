import EventDetails from "./components/EventDetails";
import EventLoaction from "./components/EventLoaction";

export default function page() {
  return (
    <div>
      <div className=" eventBg h-[300px] w-full flex items-center justify-center text-white">
        <h1 className=" text-[30px] sm:text-[40px] text-center font-semibold">
          The Strange Love Movie 2023 Festival
        </h1>
      </div>
      <div className="max-w-screen-xl   mx-auto  flex items-center flex-col  py-10">
        <div className=" my-20 grid md:grid-cols-12 gap-5 w-full ">
          <div className=" md:col-span-8 w-full p-5">
            <EventDetails />
          </div>
          <div className="md:col-span-4  w-full p-5">
            <EventLoaction />
          </div>
        </div>
      </div>
    </div>
  );
}
