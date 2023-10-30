import BlogDetails from "./components/BlogDetails";
import LatestPosts from "./components/LatestPosts";

export default function page() {
  return (
    <div className="max-w-screen-xl  mx-auto  py-10">
      <div className=" grid grid-cols-12 gap-10">
        <div className=" col-span-8  p-4">
          <BlogDetails />
        </div>
        <div className=" col-span-4 p-4 ">
          <LatestPosts />
        </div>
      </div>
    </div>
  );
}
