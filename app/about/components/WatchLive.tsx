import { josefin_sans } from "../../fonts";
import ProducerDetail from "./ProducerDetail";

export default function WatchLive() {
  return (
    <div>
      <div className=" my-20  h-[550px] aboutContainer ">
        <div className=" relative ">
          <div className=" bg-black/40 w-full h-full   "></div>

          <div className="  top-[150px] text-center w-full text-white flex items-center justify-center ">
            <div className=" w-full md:w-[780px] ">
              <h2
                className={` text-[40px] md:text-[60px] mt-[100px] md:leading-[70px] font-semibold ${josefin_sans.className}`}
              >
                Watch Live Interview with Movie Producer
              </h2>
              <div className=" mt-10">
                <button className=" bg-secondary px-10 py-4 hover:bg-black transition font-semibold">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-[-200px]">
        <ProducerDetail />
      </div>
    </div>
  );
}
