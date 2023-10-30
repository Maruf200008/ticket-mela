import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function EventLoaction() {
  return (
    <div>
      <div className=" bg-[#f3f3f3] p-10 space-y-7">
        <div className=" space-y-2">
          <h1 className=" font-semibold">4:00 pm to 10:00 pm</h1>
          <p className=" text-neutral-600">Timing</p>
        </div>
        <div className=" space-y-2">
          <h1 className=" font-semibold">April 26, 2025</h1>
          <p className=" text-neutral-600">Date</p>
        </div>
        <div className=" space-y-2">
          <h1 className=" font-semibold">Film Festival</h1>
          <p className=" text-neutral-600">Category</p>
        </div>
        <div className=" space-y-2">
          <h1 className=" font-semibold">New York</h1>
          <p className=" text-neutral-600">Location</p>
        </div>
        <div className=" flex items-center gap-3">
          <div className=" bg-white hover:bg-primary hover:text-white p-3 rounded-full cursor-pointer  transition">
            <BsTwitter />
          </div>
          <div className=" bg-white hover:bg-primary hover:text-white p-3 rounded-full cursor-pointer  transition">
            <BsFacebook />
          </div>
          <div className=" bg-white hover:bg-primary hover:text-white p-3 rounded-full cursor-pointer  transition">
            <BsInstagram />
          </div>
        </div>
      </div>
      <div className=" mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930760905!2d90.25487655769838!3d23.781067236006688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1698663088447!5m2!1sen!2sbd"
          className=" w-full h-[350px]"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
