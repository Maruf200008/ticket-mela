import Image from "next/image";
import { PiFilmReelFill } from "react-icons/pi";
import { josefin_sans } from "../fonts";
import tick from "../images/ticketPrice/checked.png";
export default function page() {
  return (
    <div className=" ticketPricegContainter">
      <div className="max-w-screen-xl w-full flex  items-center mx-auto p-4 top-2">
        <div className=" w-full my-10  flex items-center justify-center flex-col ">
          <div className=" text-[25px] text-center text-secondary">
            <PiFilmReelFill />
          </div>
          <div className=" text-center">
            <h1 className={`text-[50px] font-bold ${josefin_sans.className}`}>
              Ticket Price
            </h1>
            <p className=" text-neutral-700 font-semibold">
              Tickets are on sale one day in advance
            </p>

            <p className=" md:w-[900px] mx-auto text-neutral-700 flex text-center justify-center pt-5">
              And now you can purchase tickets online through our "Entertainment
              Card" available at the ticket counters. You can book tickets over
              the phone through our member hotline and pick up your tickets
              conveniently right before the show from our exclusive platinum
              member counter once you become our Platinum Member.
            </p>
            <div className=" pt-10 w-full">
              <h1 className=" text-2xl font-semibold text-secondary">
                STAR Cineplex, Bashundhara City Shopping Mall
              </h1>
              <div className=" grid md:grid-cols-2 gap-10 mt-10">
                <div className=" bg-white shadow-xl  shadow-gray-400/30 p-7 rounded-md">
                  <h1 className=" text-2xl font-semibold text-primary">
                    2D Movies:
                  </h1>
                  <h3 className=" text-lg font-semibold text-neutral-500 ">
                    Hall 1 through Hall 3
                  </h3>
                  <div className=" text-start space-y-3 mt-4">
                    <div className=" flex items-center gap-2">
                      <div>
                        <Image src={tick} alt="tick" width={20} />
                      </div>
                      <p>
                        Matinee price (Shows starting before 3:00 pm except
                        holidays)
                      </p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div>
                        <Image src={tick} alt="tick" width={20} />
                      </div>
                      <p>Regular - 300.00 Taka & Premium - 350.00 Taka</p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div>
                        <Image src={tick} alt="tick" width={20} />
                      </div>
                      <p>
                        Regular price (Shows starting at or after 3:00 pm except
                        holidays)
                      </p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div>
                        <Image src={tick} alt="tick" width={20} />
                      </div>
                      <p>Regular - 350.00 Taka & Premium - 400.00 Taka</p>
                    </div>
                  </div>
                </div>
                <div className=" bg-white shadow-xl  shadow-gray-400/30 p-7 rounded-md">
                  <h1 className=" text-2xl font-semibold text-primary">
                    3D Movies:
                  </h1>
                  <h3 className=" text-lg font-semibold text-neutral-500 ">
                    Friday/Saturday & holidays:
                  </h3>
                  <div className=" text-start space-y-3 mt-4">
                    <div className=" flex items-center gap-2">
                      <div>
                        <Image src={tick} alt="tick" width={20} />
                      </div>
                      <p>Regular seat - 450.00</p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div>
                        <Image src={tick} alt="tick" width={20} />
                      </div>
                      <p>Premium seat - 500.00</p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div>
                        <Image src={tick} alt="tick" width={20} />
                      </div>
                      <p>Regular seat - 400.00</p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div>
                        <Image src={tick} alt="tick" width={20} />
                      </div>
                      <p>Premium seat - 450.00</p>
                    </div>
                  </div>
                </div>
                <div className=" bg-white shadow-xl  shadow-gray-400/30 p-7 rounded-md">
                  <h1 className=" text-2xl font-semibold text-primary">
                    3D Movies:
                  </h1>
                  <h3 className=" text-lg font-semibold text-neutral-500 ">
                    Friday/Saturday & holidays:
                  </h3>
                  <div className=" text-start space-y-3 mt-4">
                    <div className=" flex items-center gap-2">
                      <div>
                        <Image src={tick} alt="tick" width={20} />
                      </div>
                      <p>Regular seat - 450.00</p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div>
                        <Image src={tick} alt="tick" width={20} />
                      </div>
                      <p>Premium seat - 500.00</p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div>
                        <Image src={tick} alt="tick" width={20} />
                      </div>
                      <p>Regular seat - 400.00</p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div>
                        <Image src={tick} alt="tick" width={20} />
                      </div>
                      <p>Premium seat - 450.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
