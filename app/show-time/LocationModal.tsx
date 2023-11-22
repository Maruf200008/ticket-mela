"use client";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export default function LocationModal({
  handleToggle,
  toggle,
  locationHandle,
}) {
  const locationData = [
    {
      title: "Bashundhara Shopping Mall, Panthapath",
      des: "Show Motion Limited Level 8, Bashundhara City 13/3 Ka, Panthapath, Tejgaon Dhaka 1205, Bangladesh.",
    },
    {
      title: "Shimanto Shambhar, Dhanmondi 2",
      des: "Shimanto Shamvar Road no 2, Dhanmondi, Dhaka 1205,Bangladesh.",
    },
    {
      title: "Start Cineplex, SKS Tower, Mohakhali",
      des: "SKS Tower, Mohakhali, Dhaka 1205, Bangladesh.",
    },
    {
      title: "Start Cineplex, Sony Square",
      des: "Level-4, Plot-1, Road-2, Block-D, Section-2, Mirpur, Dhaka-1216.",
    },
    {
      title: "Start Cineplex, Bangabandhu Military Museum",
      des: "Bangabandhu Military Museum, Bijoy Shoroni, Dhaka-1215.",
    },
    {
      title: "Start Cineplex, Bali Arcade",
      des: "Level-9, Bali Arcade, 227 Nawab Sirajuddaula Road, Chawkbazar, Chittogram.",
    },
    {
      title: "Start Cineplex, Bangabandhu Sheikh Mujib Hi-Tech Park, Rajshahi",
      des: "Bangabandhu Sheikh Mujib Hi-Tech Park Nabinagar, Paba, Rajshahi.",
    },
  ];

  const handleClick = (value) => {
    locationHandle(value);
    handleToggle();
  };

  return (
    <div>
      <div className=" flex items-center justify-center">
        {/* Main modal */}
        <div
          aria-hidden="true"
          className={
            toggle
              ? "overflow-y-auto overflow-x-hidden fixed flex  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
              : " hidden"
          }
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content  */}
            <div className="relative bg-white rounded-lg h-[550px] overflow-auto shadow-xl  px-12">
              {/* Modal header */}
              <div className="flex items-center justify-end p-4 md:p-5 text-xl ">
                <div
                  onClick={handleToggle}
                  className=" cursor-pointer bg-red-200 rounded-full hover:bg-red-500 hover:text-white p-2 ease-out duration-300 text-red-500"
                >
                  <RxCross2 />
                </div>
              </div>
              <div className=" flex items-center justify-center">
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  Select Your Theatre
                </h3>
              </div>
              {/* Modal body  */}
              <div className="p-4 md:p-5 space-y-4">
                {locationData?.map((location, index) => (
                  <div
                    onClick={() => handleClick(location?.title)}
                    key={index}
                    className=" flex items-center  justify-start gap-5 border border-red-200 hover:border-primary px-4 rounded-md py-3 cursor-pointer ease-out duration-300   hover:shadow-xl"
                  >
                    <div className=" text-primary">
                      <FaLocationDot />
                    </div>
                    <div className=" space-y-2">
                      <h1 className=" text-xl font-semibold text-primary">
                        {location?.title}
                      </h1>
                      <p className=" text-sm">{location?.des}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
