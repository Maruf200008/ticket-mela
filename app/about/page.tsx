import Image from "next/image";
import bgImg from "../images/about/bgImg.png";
import FilmCrew from "./components/FilmCrew";
import GetToKnow from "./components/GetToKnow";
import WatchLive from "./components/WatchLive";

export default function page() {
  return (
    <div className="">
      <div>
        <Image
          src={bgImg}
          alt="bgImg"
          className="absolute opacity-70 right-0 -z-30 overflow-hidden"
        />
        <div className=" w-full">
          <GetToKnow />
        </div>
        <WatchLive />
        <FilmCrew />
      </div>
    </div>
  );
}
