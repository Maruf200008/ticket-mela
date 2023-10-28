import Image from "next/image";
import Link from "next/link";
import { BsFillSendFill } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from "./images/footerLogo.png";

export default function Footer() {
  return (
    <div>
      <div className=" bg-black">
        <div className="max-w-screen-xl  mx-auto  flex items-center flex-col  text-white py-10">
          <div className=" w-full">
            <div className=" flex flex-col md:flex-row p-4 md:items-center justify-between border-b pb-7 border-gray-600">
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  width={180}
                  className=" mb-5 md:mb-0"
                />
              </Link>
              <div className=" flex flex-col md:flex-row  md:items-center gap-6">
                <div className=" flex items-center gap-2  font-light text-gray-500">
                  <Link
                    href="about"
                    className="cursor-pointer hover:text-secondary transition"
                  >
                    Help{" "}
                  </Link>
                  <p> / </p>
                  <Link
                    href="privacy-policy"
                    className="cursor-pointer hover:text-secondary transition"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div className=" flex items-center gap-3">
                  <Link
                    href="https://www.facebook.com/profile.php?id=100088210389764"
                    target="_"
                    className=" bg-gray-800 hover:bg-secondary hover:text-white  text-white text-xl p-3 rounded-full  transition duration-700 ease-in-out hover:-translate-y-4"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/mohammad-maruf-a77b9621a"
                    target="_"
                    className=" bg-gray-800 hover:bg-secondary hover:text-white  text-white text-xl p-3 rounded-full  transition duration-700 ease-in-out hover:-translate-y-4"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    href="https://github.com/Maruf200008"
                    target="_"
                    className=" bg-gray-800 hover:bg-secondary hover:text-white  text-white text-xl p-3 rounded-full  transition duration-700 ease-in-out hover:-translate-y-4"
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </div>
            <div className=" grid p-4 sm:grid-cols-2 lg:grid-cols-4 mt-10">
              <div className=" space-y-5 xl:mr-[60px]">
                <p className=" text-xl font-semibold leading-10">
                  Buy movie tickets easily with <br /> Aovis system nationwide
                </p>
                <button className=" bg-secondary px-3 py-2 hover:bg-white hover:text-secondary transition ">
                  Get Your Ticket
                </button>
              </div>
              <div className=" lg:mr-[90px] mt-10 sm:mt-0">
                <h2 className=" text-xl text-secondary font-semibold">
                  Movies
                </h2>
                <ul className=" mt-7 space-y-7 text-sm text-neutral-600">
                  <li className=" hover:text-secondary transition ">
                    <Link href="/" className="footer-list">
                      Action
                    </Link>
                  </li>
                  <li className=" hover:text-secondary transition ">
                    <Link href="/" className="footer-list">
                      Adventure
                    </Link>
                  </li>
                  <li className=" hover:text-secondary transition ">
                    <Link href="/" className="footer-list">
                      Animation
                    </Link>
                  </li>
                  <li className=" hover:text-secondary transition ">
                    <Link href="/" className="footer-list">
                      Comedy
                    </Link>
                  </li>
                  <li className=" hover:text-secondary transition ">
                    <Link href="/" className="footer-list">
                      Crime
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" lg:mr-[150px] mt-10 md:mt-0">
                <h2 className=" text-xl text-secondary font-semibold">Links</h2>
                <ul className=" mt-7 space-y-7 text-sm text-neutral-600">
                  <li className=" hover:text-secondary transition">
                    <Link href="/" className="footer-list">
                      About
                    </Link>
                  </li>
                  <li className=" hover:text-secondary transition">
                    <Link href="/" className="footer-list">
                      My Account
                    </Link>
                  </li>
                  <li className=" hover:text-secondary transition">
                    <Link href="/" className="footer-list">
                      News
                    </Link>
                  </li>
                  <li className=" hover:text-secondary transition">
                    <Link href="/" className="footer-list">
                      Latest Events
                    </Link>
                  </li>
                  <li className=" hover:text-secondary transition ">
                    <Link href="/" className="footer-list">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" space-y-10 mt-10 md:mt-0  ">
                <h2 className=" text-xl text-secondary font-semibold">
                  Newsletter
                </h2>

                <p className=" text-neutral-600">
                  Subscribe to leitmotif newsletter <br /> this very day.
                </p>
                <div className=" ">
                  <form className="flex items-center">
                    <label className="sr-only">Search</label>
                    <div className="relative w-full">
                      <input
                        type="text"
                        className="bg-gray-50  text-gray-900 text-sm  focus:outline-none h-[60px]  block w-full  p-3 "
                        placeholder="Email Address"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        <div className="w-4 h-4 text-xl text-black">
                          <BsFillSendFill />
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-neutral-900 py-6 text-center">
        <p className=" text-neutral-500">Copyright 2023 by Mohammad Maruf</p>
      </div>
    </div>
  );
}
