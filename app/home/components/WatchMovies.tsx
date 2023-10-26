import Image from "next/image";
import Link from "next/link";
import { PiFilmReelFill } from "react-icons/pi";
import { josefin_sans } from "../../fonts";
import poster1 from "../../images/poster/poster1.jpg";
import poster2 from "../../images/poster/poster2.jpg";
import poster3 from "../../images/poster/poster3.jpg";
import poster4 from "../../images/poster/poster4.jpg";
import poster5 from "../../images/poster/poster5.jpg";
export default function WatchMovies() {
  const posterDetails = [
    {
      catagory: "Action, Thriller",
      name: "Bellbottom",
      img: poster1,
    },
    {
      catagory: "Action, Comedy, Crime, Thriller",
      name: "Jailer",
      img: poster2,
    },
    {
      catagory: "Action, Drama, Romance",
      name: "Priyotoma",
      img: poster3,
    },
    {
      catagory: "Crime, Drama, Mystery, Romance, Thriller",
      name: "Surongo",
      img: poster4,
    },
    {
      catagory: "Action, Adventure, Thriller",
      name: "Pathaan",
      img: poster5,
    },
  ];
  return (
    <div className=" bg-gradient-to-t from-[#F15109] to-[#FC1348]  h-[450px] mb-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className=" w-full mt-20 flex items-center justify-center flex-col space-y-3">
          <div className=" text-[#f8ab88] text-[30px]">
            <PiFilmReelFill />
          </div>
          <div>
            <h3 className=" text-center text-[#f8ab88]">Watch New Movies</h3>
            <h1
              className={` text-[40px] lg:text-[60px] text-white font-bold text-center ${josefin_sans.className}`}
            >
              Movie Now Playing
            </h1>

            <div className=" mt-5 grid md:grid-cols-5 gap-10 ">
              {posterDetails.map((data, index) => (
                <div
                  key={index}
                  className=" group relative  hover:border-secondary border-4 border-transparent transition overflow-hidden cursor-pointer "
                >
                  <div className=" absolute w-full h-full bg-gradient-to-t from-slate-800/50 z-40  ">
                    <div className=" absolute bottom-2 p-3 text-white ">
                      <p className=" text-[12px]">{data?.catagory}</p>
                      <h2 className=" text-[20px] font-semibold pb-4">
                        {data?.name}
                      </h2>
                      <Link
                        href="/ticket"
                        className=" mt-2 text-[14px] bg-white text-slate-600 px-3 py-2 hover:bg-secondary hover:text-white transition"
                      >
                        Get Ticket
                      </Link>
                    </div>
                  </div>
                  <Image
                    src={data?.img}
                    alt="poster"
                    height={350}
                    className="group-hover:scale-110 ease-in-out duration-300 "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
