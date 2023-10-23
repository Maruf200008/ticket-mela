import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { useEffect, useState } from "react";
import facebook from "../images/facebook.png";
import google from "../images/google.png";
import bg from "../images/login/sideBg2.jpg";
import { useRegisterMutation } from "../redux/auth/authApi";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const [
    register,
    { data, isLoading, isError, isSuccess, error: responseError },
  ] = useRegisterMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    register({
      name,
      email,
      mobile,
      password,
    });
  };

  // what to render
  let content;

  if (isLoading && !isError) {
    <div>Loading...</div>;
  } else if (!isLoading && isError) {
  } else if (!isLoading && !isError && isSuccess) {
    redirect("/home");
  }

  useEffect(() => {
    if (responseError) {
      const { error: err } = responseError?.data || {};
      setError(err);
    }
  }, [responseError]);

  return (
    <div className="max-w-screen-xl flex flex-wrap flex-col items-center mx-auto my-20">
      <div className=" grid grid-cols-2 gap-10 w-full">
        <div className=" ">
          <h1 className=" text-[25px] text-center font-semibold">
            Create account
          </h1>
          <div className=" ">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-neutral-500 mt-20 flex items-center justify-center flex-col gap-4"
            >
              <div>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  type="text"
                  className={`w-[400px] text-neutral-500 focus:outline-none px-5 py-5 rounded-full ${
                    error && error?.name?.msg
                      ? "border-primary"
                      : " border-neutral-400"
                  } border`}
                />
                {error && error.name ? (
                  <p className=" text-[12px] ml-5 text-primary">
                    {error?.name?.msg}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className={`w-[400px] text-neutral-500 focus:outline-none px-5 py-5 rounded-full ${
                    error && error?.email?.msg
                      ? "border-primary"
                      : " border-neutral-400"
                  } border`}
                />

                {error && error.email ? (
                  <p className=" text-[12px] ml-5 text-primary">
                    {error?.email?.msg}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  required
                  placeholder="Phone"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  type="text"
                  className={`w-[400px] text-neutral-500 focus:outline-none px-5 py-5 rounded-full ${
                    error && error?.mobile?.msg
                      ? "border-primary"
                      : " border-neutral-400"
                  } border`}
                />
                {error && error.mobile ? (
                  <p className=" text-[12px] ml-5 text-primary">
                    {error?.mobile?.msg}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className={`w-[400px] text-neutral-500 focus:outline-none px-5 py-5 rounded-full ${
                    error && error?.password?.msg
                      ? "border-primary"
                      : " border-neutral-400"
                  } border`}
                />
                {error && error.password ? (
                  <p className=" text-[12px] ml-5 text-primary w-[350px]">
                    {error?.password?.msg}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-[400px] bg-primary py-5 rounded-full text-white font-semibold hover:bg-white hover:text-primary transition border border-transparent hover:border-primary"
                >
                  Create account
                </button>
                <p className=" mt-3">
                  Already have an account?{" "}
                  <Link href="/" className=" text-primary">
                    Log in
                  </Link>
                </p>
              </div>
            </form>

            <div className=" mt-10">
              <div className=" flex items-center gap-5 justify-center">
                <div className=" bg-neutral-100 p-3 cursor-pointer rounded-full">
                  <Image src={google} alt="google" width={30} />
                </div>
                <div className="bg-neutral-100 p-3 cursor-pointer rounded-full">
                  <Image src={facebook} alt="google" width={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-[-40px]">
          <Image src={bg} alt="bg" width={700} />
        </div>
      </div>
    </div>
  );
}
