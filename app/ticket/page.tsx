import SelectDates from "./components/SelectDates";
import TicketsSummary from "./components/TicketsSummary";

export default function page() {
  return (
    <div className="my-20 max-w-screen-xl   mx-auto p-4  ">
      <div className=" grid md:grid-cols-12 w-full gap-5">
        <div className=" md:col-span-8 ">
          <SelectDates />
        </div>
        <div className=" md:col-span-4 w-full ">
          <TicketsSummary />
        </div>
      </div>
    </div>
  );
}
