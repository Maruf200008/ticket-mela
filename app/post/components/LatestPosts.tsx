import Image from "next/image";
import blog1 from "../../images/blogImg/blog-1.jpg";
import chat from "../../images/post/chat2.png";
export default function LatestPosts() {
  return (
    <div className=" bg-[#f3f3f3] p-5">
      <h1 className=" font-semibold text-xl">Latest Posts</h1>
      <div className=" flex  items-center gap-5 p-3 mt-5 bg-transparent hover:bg-white">
        <div className=" ">
          <Image src={blog1} alt="blog1" className=" w-[130px] h-[100px]" />
        </div>
        <div className=" space-y-3">
          <div className=" flex items-center gap-3">
            <Image src={chat} alt="chat" width={15} />
            <p>0 Comments</p>
          </div>
          <h1 className=" font-semibold">
            See Meila enjoyable capturing moment
          </h1>
        </div>
      </div>
    </div>
  );
}
