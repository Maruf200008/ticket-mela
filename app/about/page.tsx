import Feedbacks from "../home/components/Feedbacks";
import FilmCrew from "./components/FilmCrew";
import GetToKnow from "./components/GetToKnow";
import Students from "./components/Students";
import WatchLive from "./components/WatchLive";

export default function page() {
  return (
    <div className="  ">
      <div>
        <div className=" w-full">
          <GetToKnow />
        </div>
        <WatchLive />
        <FilmCrew />
        <Feedbacks />
        <Students />
      </div>
    </div>
  );
}
