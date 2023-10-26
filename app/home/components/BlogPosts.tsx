import Image from "next/image";
import { FaComments } from "react-icons/fa";
import { GrBottomCorner } from "react-icons/gr";
import { PiFilmReelFill } from "react-icons/pi";
import { josefin_sans } from "../../fonts";
import avatar from "../../images/avatar.png";
import blogIm1 from "../../images/blogImg/blog-1.jpg";
import blogIm2 from "../../images/blogImg/blog-2.jpg";
import blogIm3 from "../../images/blogImg/blog-3.jpg";

export default function BlogPosts() {
  const blogData = [
    {
      img: blogIm1,
      title: "See Meila Enjoyable Capturing moment",
      comment: 4,
      date: "21 Feb, 2024",
    },
    {
      img: blogIm2,
      title: "The Foreign Oscar Nominations 2023",
      comment: 3,
      date: "2 Jun, 2024",
    },
    {
      img: blogIm3,
      title: "Upcoming New Season 5 Just Flow in!",
      comment: 7,
      date: "28 Aug, 2024",
    },
  ];
  return (
    <div className=" h-[950px] mt-20">
      <div className=" bg-secondary h-[500px]">
        <div className="max-w-screen-xl  mx-auto p-4 flex items-center flex-col">
          <div className="  mt-[80px] flex items-center flex-col space-y-2">
            <div className=" text-center text-[30px] text-white">
              <PiFilmReelFill />
            </div>
            <p className=" text-white text-[18px]">Directly Blog Posts</p>
            <h1
              className={` text-[50px] text-center pb-10 text-white font-bold leading-[60px] ${josefin_sans.className}`}
            >
              Latest News & Articles <br /> from the Posts
            </h1>
            <div className="   mt-[30px] grid md:grid-cols-3 gap-10">
              {blogData.map((data, index) => (
                <div key={index}>
                  <div className=" group">
                    <div className="relative   ">
                      <div className=" overflow-hidden">
                        <div className=" absolute w-full h-full z-30 ease-in-out duration-300 group-hover:bg-black/50 bg-black/0"></div>
                        <Image
                          src={data?.img}
                          alt="blogIm"
                          className=" group-hover:scale-110 ease-in-out duration-300"
                        />
                      </div>
                    </div>
                    <div className=" bg-white mb-32 relative  p-8 w-full shadow-2xl shadow-gray-200 ease-in-out duration-300 hover:shadow-gray-500/30 transition">
                      <div className=" absolute -top-3 z-50 bg-secondary right-10 px-2 text-white text-sm py-1">
                        <p>{data?.date}</p>
                      </div>
                      <div className=" flex items-center gap-3 mb-5">
                        <div className="  flex items-center gap-2 border-r pr-5">
                          <Image
                            src={avatar}
                            alt="avatar"
                            width={50}
                            className=" rounded-full shadow-md"
                          />
                          <p className=" text-sm text-neutral-600">
                            By <br /> Duno
                          </p>
                        </div>
                        <div className=" flex items-center gap-2">
                          <div className=" text-secondary">
                            <FaComments />
                          </div>
                          <div>
                            <p className=" text-neutral-500 hover:text-secondary cursor-pointer transition">
                              {data?.comment} Comments
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=" mr-6 space-y-3">
                        <h1 className=" text-[22px] font-semibold hover:text-secondary cursor-pointer transition">
                          {data?.title}
                        </h1>
                        <div className=" flex items-center text-neutral-500">
                          <p className=" text-sm hover:text-secondary transition cursor-pointer">
                            Read More
                          </p>
                          <div className=" mt-2 text-neutral-500  text-sm">
                            <GrBottomCorner />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
