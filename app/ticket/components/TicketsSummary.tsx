"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import hollImg from "../../images/TicketDetails/hall.png";

import locationImg from "../../images/TicketDetails/location.png";
import seatImg from "../../images/TicketDetails/seat.png";
import showDateImg from "../../images/TicketDetails/showDate.png";
import showTimeImg from "../../images/TicketDetails/showTime.png";
import ticketImg from "../../images/TicketDetails/ticket.png";
import totalAmountImg from "../../images/TicketDetails/total.png";

import { useAddPaymentMutation } from "@/app/redux/ticket/ticketApi";
import Link from "next/link";
import poster1 from "../../images/poster/poster1.jpg";
export default function TicketsSummary() {
  const {
    location,
    showDate,
    hallName,
    showTime,
    seatType,
    ticketQuantity,
    totalAmount,
  } = useSelector((state) => state.ticket);

  const TicketInfo = [
    {
      icon: locationImg,
      title: "Location",
      des: location ? location : <FiMinus />,
    },
    {
      icon: showDateImg,
      title: "Show Date",
      des: showDate ? showDate : <FiMinus />,
    },
    {
      icon: hollImg,
      title: "Hall Name",
      des: hallName ? hallName : <FiMinus />,
    },
    {
      icon: showTimeImg,
      title: "Show Time",
      des: showTime ? showTime : <FiMinus />,
    },
    {
      icon: seatImg,
      title: "Seat Type",
      des: seatType ? seatType : <FiMinus />,
    },
    {
      icon: ticketImg,
      title: "Ticket Quantity",
      des: ticketQuantity ? ticketQuantity : <FiMinus />,
    },
    {
      icon: totalAmountImg,
      title: "Total Amount",
      des: totalAmount ? totalAmount : <FiMinus />,
    },
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState();

  const [
    addPayment,
    { data, isLoading, isError, isSuccess, error: responseError },
  ] = useAddPaymentMutation();

  if (!isLoading && !isError && data) {
    const { url } = data;
    redirect(url);
  }

  useEffect(() => {
    if (responseError) {
      const { error: err } = responseError?.data || {};
      console.log(err);
      setError(err);
    } else if (!responseError && isSuccess) {
      setError("");
    }
  }, [responseError, isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      location &&
      showDate &&
      hallName &&
      showTime &&
      seatType &&
      ticketQuantity &&
      totalAmount
    ) {
      addPayment({
        location,
        showDate,
        hallName,
        showTime,
        email,
        seatType,
        ticketQuantity,
        totalAmount,
        name,
        mobile,
      });
    } else {
      toast.error("Please Give All Information", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
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
          {TicketInfo.map((data, index) => (
            <div
              key={index}
              className=" mt-5 flex items-center justify-between"
            >
              <div className=" flex items-center gap-3">
                <Image src={data?.icon} alt="location" width={20} />
                <p className=" text-neutral-400">{data?.title}</p>
              </div>
              <div className=" text-primary font-semibold">{data?.des}</div>
            </div>
          ))}
        </div>
        <div className=" mt-10 ">
          <h2 className=" text-xl font-semibold text-primary">Ticket For</h2>
          <form onSubmit={handleSubmit} className=" mt-3 clear-left space-y-5">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
                className=" text-neutral-500 px-3 py-3 rounded-md w-full focus:outline-none border border-neutral-400"
              />
              {error?.name?.msg ? (
                <p className=" text-sm text-primary">{error?.name?.msg}</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className=" text-neutral-500 px-3 py-3 rounded-md w-full focus:outline-none border border-neutral-400"
              />
              {error?.email?.msg ? (
                <p className=" text-sm text-primary">{error?.email?.msg}</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <input
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                type="text"
                placeholder="Enter your mobile number"
                className=" text-neutral-500 px-3 py-3 rounded-md w-full focus:outline-none border border-neutral-400"
              />
              {error?.mobile?.msg ? (
                <p className=" text-sm text-primary">{error?.mobile?.msg}</p>
              ) : (
                ""
              )}
            </div>

            <div>
              <button
                disabled={isLoading}
                type="submit"
                className=" w-full py-3 rounded-md text-white font-semibold uppercase bg-primary"
              >
                Purchase Ticket
              </button>
            </div>
          </form>
          {/* error modal  */}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          {/* error modal  */}

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
