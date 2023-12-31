"use client";
import { redirect } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import logo from "./images/footerLogo.png";
import { useLogOutMutation } from "./redux/auth/authApi";
export default function Header() {
  const [logOut, { isLoading, isError, isSuccess, error: responseError }] =
    useLogOutMutation();

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>Error</div>;
  } else if (!isLoading && !isError && isSuccess) {
    redirect("/");
  }

  const navDate = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "Show Times",
      link: "/show-time",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Ticket Price",
      link: "/ticket-price",
    },
    {
      title: "Contacts",
      link: "/contact",
    },
  ];
  const handleLogOut = () => {
    logOut();
  };
  return (
    <>
      <nav className="bg-black shadow-xl   w-full z-20 top-0 left-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/home">
            <Image
              src={logo}
              alt="logo"
              width={150}
              className=" cursor-pointer"
            />
          </Link>
          <div className="flex md:order-2">
            <button
              onClick={handleLogOut}
              className=" bg-primary px-8 text-white font-semibold py-2 hidden md:block"
            >
              Log Out
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium   md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
              {navDate.map((data, index) => (
                <li
                  key={index}
                  className=" text-slate-300 hover:text-slate-100 transition"
                >
                  <Link className="list" href={data?.link}>
                    {data?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
