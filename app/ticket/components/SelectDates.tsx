"use client";
import { addLocation, addShowDate } from "@/app/redux/ticket/ticketSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import poster1 from "../../images/poster/poster1.jpg";
import poster2 from "../../images/poster/poster2.jpg";
import poster3 from "../../images/poster/poster3.jpg";
import tick from "../../images/tick.png";
import SelectShowTime from "./SelectShowTime";

export default function SelectDates() {
  const [toggle, setToggle] = useState(false);
  const [showCalander, setShowCalander] = useState(false);
  const [date, setDate] = useState();
  const [fullDate, setFullDate] = useState();
  const [showTick, setShowTick] = useState();
  const dispatch = useDispatch();

  const [location, setLocation] = useState(
    "Star Cineplex, SKS Tower, Mohakhali"
  );

  //   set location
  const handleLocation = (value) => {
    setLocation(value?.fullLocation);
    setToggle(false);
    console.log(value);
    dispatch(addLocation(value?.shortLocation));
  };

  //   handle date
  const handleClander = (value) => {
    setDate(value);

    setShowCalander(false);
  };
  useEffect(() => {
    if (date) {
      const year = date?.getFullYear();
      const month = date?.getMonth();
      const day = date?.getDate();
      const fullDate = day + "/" + month + "/" + year;

      setFullDate(fullDate);
      dispatch(addShowDate(fullDate));
      console.log(fullDate);
    }
  }, [fullDate, date, fullDate, dispatch]);

  const handleClik = (value) => {
    setShowTick(value);
  };

  const moviesPoster = [
    {
      id: 1,
      title: "BellBottom",
      img: poster1,
    },
    {
      id: 2,
      title: "Jailer",
      img: poster2,
    },
    {
      id: 3,
      title: "Priotoma",
      img: poster3,
    },
  ];

  return (
    <div>
      <div className=" ">
        <div
          onClick={() => setToggle(!toggle)}
          className=" flex items-center justify-start gap-10 w-[350px] p-4 bg-white border-secondary border group  rounded-md cursor-pointer"
        >
          <div>
            <p className=" text-[25px] font-semibold text-neutral-500 transition group-hover:text-neutral-800">
              Select Your Theatre
            </p>
          </div>
          <div className=" text-[18px] text-neutral-500 transition group-hover:text-neutral-800">
            <FaLocationDot />
          </div>
        </div>
        {location ? (
          <div className=" -z-40 absolute mt-8 text-neutral-500 font-semibold flex items-center gap-5">
            <div className=" ">
              <FaLocationDot />
            </div>
            <p>{location}</p>
          </div>
        ) : (
          ""
        )}
        {toggle ? (
          <div>
            <div className=" absolute bg-white shadow-orange-500/10  shadow-xl p-7  w-[400px] mt-[10px] rounded-md z-50">
              <ul className=" space-y-3">
                <li
                  onClick={() =>
                    handleLocation({
                      fullLocation: "Bashundhara Shopping Mall, Panthapath",
                      shortLocation: "BSC",
                    })
                  }
                  className=" hover:text-neutral-700 transition text-neutral-400 cursor-pointer flex items-center gap-3"
                >
                  <div className=" ">
                    <FaLocationDot />
                  </div>
                  <p>Bashundhara Shopping Mall, Panthapath</p>
                </li>
                <li
                  onClick={() =>
                    handleLocation({
                      fullLocation: "Shimanto Shambhar, Dhanmondi 2",
                      shortLocation: "SMC",
                    })
                  }
                  className=" hover:text-neutral-700 transition text-neutral-400 cursor-pointer flex items-center gap-3"
                >
                  <div className=" ">
                    <FaLocationDot />
                  </div>
                  <p>Shimanto Shambhar, Dhanmondi 2</p>
                </li>
                <li
                  onClick={() =>
                    handleLocation({
                      fullLocation: "Star Cineplex, SKS Tower, Mohakhali",
                      shortLocation: "SKS",
                    })
                  }
                  className=" hover:text-neutral-700 transition text-neutral-400 cursor-pointer flex items-center gap-3"
                >
                  <div className=" ">
                    <FaLocationDot />
                  </div>
                  <p>Star Cineplex, SKS Tower, Mohakhali</p>
                </li>
                <li
                  onClick={() =>
                    handleLocation({
                      fullLocation: "Sony Square Start CINEPLEX",
                      shortLocation: "Sony",
                    })
                  }
                  className=" hover:text-neutral-700 transition text-neutral-400 cursor-pointer flex items-center gap-3"
                >
                  <div className=" ">
                    <FaLocationDot />
                  </div>
                  <p>Sony Square Start CINEPLEX</p>
                </li>
                <li
                  onClick={() =>
                    handleLocation({
                      fullLocation:
                        "Start Cineplex, Bangabandhu Military Museum",
                      shortLocation: "BMM",
                    })
                  }
                  className=" hover:text-neutral-700 transition text-neutral-400 cursor-pointer flex items-center gap-3"
                >
                  <div className=" ">
                    <FaLocationDot />
                  </div>
                  <p>Start Cineplex, Bangabandhu Military Museum</p>
                </li>
                <li
                  onClick={() =>
                    handleLocation({
                      fullLocation: "Start Cineplex, Bali, Arcade, Chattogram",
                      shortLocation: "BLI",
                    })
                  }
                  className=" hover:text-neutral-700 transition text-neutral-400 cursor-pointer flex items-center gap-3"
                >
                  <div className=" ">
                    <FaLocationDot />
                  </div>
                  <p>Start Cineplex, Bali, Arcade, Chattogram</p>
                </li>
                <li
                  onClick={() =>
                    handleLocation({
                      fullLocation: "Start Cineplex, Hi-Tech Park, Rajshahi",
                      shortLocation: "RHP",
                    })
                  }
                  className=" hover:text-neutral-700 transition text-neutral-400 cursor-pointer flex items-center gap-3"
                >
                  <div className=" ">
                    <FaLocationDot />
                  </div>
                  <p>Start Cineplex, Hi-Tech Park, Rajshahi</p>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className=" mt-[120px]">
        <div className=" border border-neutral-300 p-4 w-[300px] rounded-md cursor-pointer ">
          <div
            onClick={() => setShowCalander(!showCalander)}
            className="  group transition flex items-center gap-3 text-neutral-500"
          >
            <div className="  group-hover:text-secondary transition">
              <FaCalendarAlt />
            </div>
            <h2 className=" text-xl font-semibold group-hover:text-secondary transition">
              {!fullDate ? " Select Date" : fullDate}
            </h2>
          </div>
          {showCalander ? (
            <div className=" z-50 absolute w-[350px] bg-white mt-10 p-6 space-x-3 shadow-xl shadow-neutral-300">
              <Calendar onChange={handleClander} value={date} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className=" my-10">
        <h1 className=" text-xl font-semibold">Select Movie</h1>
        <div className=" w-[550px] grid grid-cols-3 gap-4 mt-5">
          {moviesPoster.map((data) => (
            <div
              key={data.id}
              className=" relative overflow-hidden border-secondary border-2 "
            >
              {showTick && showTick === data?.title ? (
                <div className=" absolute z-40 translate-y-20 translate-x-16 cursor-pointer bg-primary p-2 rounded-full">
                  <Image
                    onClick={() => setShowTick("")}
                    src={tick}
                    alt="tick"
                    width={35}
                  />
                </div>
              ) : (
                ""
              )}
              <Image
                onClick={() => handleClik(data?.title)}
                src={data?.img}
                alt="poster1"
                className=" hover:scale-110  cursor-pointer transition duration-700 ease-in-out "
              />
            </div>
          ))}
        </div>
      </div>

      {showTick ? <SelectShowTime /> : ""}
    </div>
  );
}
