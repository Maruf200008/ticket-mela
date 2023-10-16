import Image from "next/image";
import about from "../../images/about/about.png";
import bg from "../../images/about/background-map-contact-page.jpg";
import contact from "../../images/about/contact.png";
import map from "../../images/about/location.png";
export default function AboutContact() {
  return (
    <div>
      <div className=" h-[450px] overflow-hidden relative  ">
        <Image src={bg} alt="bg" className=" opacity-10 " />
        <div className="my-20 max-w-screen-xl    mx-auto p-4 absolute top-2 w-full translate-x-[150px]">
          <div className=" flex items-center gap-10 justify-center ">
            <div className=" flex gap-3 bg-white border-2 border-transparent ease-in duration-300  hover:border-secondary shadow-neutral-200 shadow-xl p-10">
              <div className=" w-[200px] space-y-3">
                <h1 className=" text-2xl font-semibold">About</h1>
                <p className=" leading-[30px] text-neutral-500">
                  Morbi ut tellus ac leo mol stie luctus nec vehicula sed
                </p>
              </div>
              <div>
                <Image src={about} alt="about" width={70} />
              </div>
            </div>
            <div className=" flex gap-3 bg-white border-2 border-transparent ease-in duration-300  hover:border-secondary shadow-neutral-200 shadow-xl p-10">
              <div className=" w-[200px] space-y-3">
                <h1 className=" text-2xl font-semibold">Address</h1>
                <p className=" leading-[30px] text-neutral-500 cursor-pointer hover:text-secondary transition">
                  68 Road Broklyn Street, New York, UnitedStates of America
                </p>
              </div>
              <div>
                <Image src={map} alt="about" width={70} />
              </div>
            </div>
            <div className=" flex gap-3 bg-white border-2 border-transparent ease-in duration-300  hover:border-secondary shadow-neutral-200 shadow-xl p-10">
              <div className=" w-[200px] space-y-3">
                <h1 className=" text-2xl font-semibold">Contact</h1>
                <div className=" space-y-2">
                  <p className="  text-neutral-500">+8801648312050</p>
                  <p className="  text-neutral-500">needhelp@gmail.com</p>
                  <p className="  text-neutral-500">needhelp.com</p>
                </div>
              </div>
              <div>
                <Image src={contact} alt="about" width={70} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
