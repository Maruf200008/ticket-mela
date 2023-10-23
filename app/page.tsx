"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import facebook from "./images/facebook.png";
import google from "./images/google.png";
import bg from "./images/login/sideBg.jpg";
import { useGoogleAuthQuery, useLoginMutation } from "./redux/auth/authApi";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isCall, setIsCall] = useState(false);
  const {
    data,
    isError: googleError,
    isSuccess: googleSucess,
    isLoading: googleLoading,
    error: responseGoogleError,
  } = useGoogleAuthQuery({
    isCall,
  });

  if (googleLoading) {
    console.log("I am google Loading");
  } else if (!googleLoading && googleError) {
    console.log(responseGoogleError);
  } else if (!googleLoading && !googleError && googleSucess) {
    console.log("I am sucess");
    console.log(data);
  }
  console.log(isCall);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    login({
      email,
      password,
    });
  };

  const [login, { isError, isLoading, isSuccess, error: responseError }] =
    useLoginMutation();
  let content;
  if (isLoading && !isError) {
    content = <div>Loading</div>;
  } else if (!isLoading && isError) {
    content = <div>Somthing is error</div>;
    console.log(error);
  } else if (!isLoading && !isError && isSuccess) {
    redirect("/home");
  }

  useEffect(() => {
    if (responseError) {
      const { error: err } = responseError?.data || {};
      setError(err.common?.msg);
    } else if (isSuccess) {
      setError("");
    }
  }, [responseError, isSuccess]);

  const handleAuth = () => {
    setIsCall(!isCall);
    console.log("Hi I am Login Page");
  };

  return (
    <div className="max-w-screen-xl flex flex-wrap flex-col items-center mx-auto my-20">
      <div className=" grid grid-cols-2 gap-10 w-full">
        <div className=" ">
          <h1 className=" text-[25px] text-center font-semibold">
            Welcome Back
          </h1>
          <div className=" ">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-neutral-500 mt-20 flex items-center justify-center flex-col gap-4"
            >
              <div>
                <input
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="w-[400px] focus:outline-none px-5 py-5 rounded-full border-primary border"
                />
              </div>
              <div>
                <input
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="w-[400px] text-neutral-500 focus:outline-none px-5 py-5 rounded-full border-primary border"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-[400px] bg-primary py-5 rounded-full text-white font-semibold hover:bg-white hover:text-primary transition border border-transparent hover:border-primary"
                >
                  Log in
                </button>
                {error && <p className=" ml-5 text-primary">{error}</p>}
              </div>
            </form>

            <div className=" mt-10 text-center">
              <div className=" flex items-center gap-5 justify-center">
                <div
                  onClick={handleAuth}
                  className=" bg-neutral-100 p-3 cursor-pointer rounded-full"
                >
                  <Image src={google} alt="google" width={30} />
                </div>
                <div className="bg-neutral-100 p-3 cursor-pointer rounded-full">
                  <Image src={facebook} alt="google" width={30} />
                </div>
              </div>
              <p className=" mt-3">
                Don't have an account?{" "}
                <Link href="signup" className=" text-primary">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-[-80px]">
          <Image src={bg} alt="bg" width={700} />
        </div>
      </div>
    </div>
  );
}
