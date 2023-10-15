import Image from "next/image";
import bgImg from "../../images/about/bgDiscoverMore.jpg";
import ProducerDetail from "./ProducerDetail";
export default function WatchLive() {
  return (
    <div className=" my-20  h-[750px] ">
      <div className=" relative ">
        <div className=" bg-black/40 w-full h-full absolute  "></div>
        <Image src={bgImg} alt="bgImg" className=" " />
        <div className=" absolute top-[150px] text-center w-full text-white flex items-center justify-center ">
          <div className=" w-[780px]">
            <h2 className=" text-[60px] leading-[70px] font-semibold">
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
      <div className=" mt-[-130px] z-50 absolute translate-x-[20%]">
        <ProducerDetail />
      </div>
    </div>
  );
}
