import Image from "next/image";
import { PiFilmReelFill } from "react-icons/pi";
import avatar from "../images/avatar.png";
import blogIm from "../images/blogImg/blog-1.jpg";
export default function BlogPosts() {
  return (
    <div className=" mt-[380px] bg-secondary h-[500px]">
      <div className="max-w-screen-xl  mx-auto p-4 flex items-center flex-col">
        <div className="  mt-[80px] flex items-center flex-col space-y-2">
          <div className=" text-center text-[30px] text-white">
            <PiFilmReelFill />
          </div>
          <p className=" text-white text-[18px]">Directly Blog Posts</p>
          <h1 className=" text-[50px] text-center pb-10 text-white font-bold leading-[60px]">
            Latest News & Articles <br /> from the Posts
          </h1>
          <div className=" mt-[30px] grid grid-cols-3 gap-10">
            <div>
              <div>
                <Image src={blogIm} alt="blogIm" />
              </div>
              <div className=" bg-white p-8 w-full shadow-2xl shadow-gray-300 hover:shadow-gray-400/75 transition">
                <div className=" flex items-center gap-3 mb-5">
                  <div className=" flex items-center gap-2 border-r pr-5">
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
                  <div></div>
                </div>
                <div className=" mr-6 space-y-3">
                  <h1 className=" text-[22px] font-semibold hover:text-secondary cursor-pointer transition">
                    See Meila enjoyable capturing moment
                  </h1>
                  <p className=" text-sm text-neutral-500">Read More</p>
                </div>
              </div>
            </div>
            <div>sdf</div>
            <div>sfsad</div>
          </div>
        </div>
      </div>
    </div>
  );
}
