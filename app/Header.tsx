"use client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import avatar from "./images/avatar.png";
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
    <div className=" bg-black shadow-xl shadow-gray-200/30">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={200}
            className=" cursor-pointer"
          />
        </Link>
        <div>
          <ul className=" flex items-center gap-5">
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
        <div className=" flex items-center gap-5">
          <div onClick={handleLogOut}>
            <Image
              src={avatar}
              alt="avatar"
              width={50}
              height={50}
              className=" cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
