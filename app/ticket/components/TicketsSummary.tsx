import Image from "next/image";
import holl from "../../images/TicketDetails/hall.png";
import location from "../../images/TicketDetails/location.png";
import seat from "../../images/TicketDetails/seat.png";
import showDate from "../../images/TicketDetails/showDate.png";
import showTime from "../../images/TicketDetails/showTime.png";
import ticket from "../../images/TicketDetails/ticket.png";
import totalAmount from "../../images/TicketDetails/total.png";

import Link from "next/link";
import poster1 from "../../images/poster/poster1.jpg";
export default function TicketsSummary() {
  return (
    <div>
      <h2 className=" mb-5 text-xl font-semibold text-primary">
        Tickets Summary
      </h2>
      <div className="  bg-white shadow-xl w-full shadow-gray-300/20 p-5 rounded-md  ">
        <div className=" border-b pb-5">
          <div className=" flex gap-4 items-center">
            <div className=" rounded-md overflow-hidden">
              <Image src={poster1} alt="psoter" width={130} />
            </div>
            <div className=" space-y-1">
              <p className=" rounded-md border border-neutral-500 w-[40px] px-2">
                2D
              </p>
              <h1 className=" text-[20px] font-semibold text-primary">
                Bell Bottom
              </h1>
              <p>Duration - 169Min</p>
            </div>
          </div>
        </div>
        <div className=" space-y-5">
          <div className=" mt-5 flex items-center justify-between">
            <div className=" flex items-center gap-3">
              <Image src={location} alt="location" width={20} />
              <p className=" text-neutral-400">Location</p>
            </div>
            <div className=" text-primary font-semibold">SKS</div>
          </div>
          <div className=" mt-5 flex items-center justify-between">
            <div className=" flex items-center gap-3">
              <Image src={showDate} alt="location" width={20} />
              <p className=" text-neutral-400">Show Date</p>
            </div>
            <div className=" text-primary font-semibold">08/10/2023</div>
          </div>
          <div className=" mt-5 flex items-center justify-between">
            <div className=" flex items-center gap-3">
              <Image src={holl} alt="location" width={20} />
              <p className=" text-neutral-400">Hall Name </p>
            </div>
            <div className=" text-primary font-semibold">Hall 2</div>
          </div>
          <div className=" mt-5 flex items-center justify-between">
            <div className=" flex items-center gap-3">
              <Image src={showTime} alt="location" width={20} />
              <p className=" text-neutral-400">Show Time </p>
            </div>
            <div className=" text-primary font-semibold">11:30 AM</div>
          </div>
          <div className=" mt-5 flex items-center justify-between">
            <div className=" flex items-center gap-3">
              <Image src={seat} alt="location" width={20} />
              <p className=" text-neutral-400">Seat Type </p>
            </div>
            <div className=" text-primary font-semibold">Regular</div>
          </div>
          <div className=" mt-5 flex items-center justify-between">
            <div className=" flex items-center gap-3">
              <Image src={ticket} alt="location" width={20} />
              <p className=" text-neutral-400">Ticket Quantity </p>
            </div>
            <div className=" text-primary font-semibold">1</div>
          </div>
          <div className=" mt-5 flex items-center justify-between">
            <div className=" flex items-center gap-3">
              <Image src={totalAmount} alt="totalAmount" width={20} />
              <p className=" text-neutral-400">Total Amount </p>
            </div>
            <div className=" text-primary font-semibold">450 BDT</div>
          </div>
        </div>
        <div className=" mt-10 ">
          <h2 className=" text-xl font-semibold text-primary">Ticket For</h2>
          <form className=" mt-3 clear-left space-y-5">
            <div>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className=" text-neutral-500 px-3 py-3 rounded-md w-full focus:outline-none border border-neutral-400"
              />
            </div>
            <div>
              <input
                required
                type="number"
                placeholder="Enter your mobile number"
                className=" text-neutral-500 px-3 py-3 rounded-md w-full focus:outline-none border border-neutral-400"
              />
            </div>
            <div>
              <button
                type="submit"
                className=" w-full py-3 rounded-md text-white font-semibold uppercase bg-primary"
              >
                Purchase Ticket
              </button>
            </div>
          </form>
          <p className=" text-[12px] text-justify mt-4">
            By clicking the Purchase Tickets you are accepting{" "}
            <Link target="_" href="/" className=" text-primary underline">
              Terms & Conditions
            </Link>{" "}
            of Ticket Mela.
          </p>
        </div>
      </div>
    </div>
  );
}
