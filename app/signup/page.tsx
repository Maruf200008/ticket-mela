import Image from "next/image";
import Link from "next/link";
import facebook from "../images/facebook.png";
import google from "../images/google.png";
import bg from "../images/login/sideBg2.jpg";

export default function SignUp() {
  return (
    <div className="max-w-screen-xl flex flex-wrap flex-col items-center mx-auto my-20">
      <div className=" grid grid-cols-2 gap-10 w-full">
        <div className=" ">
          <h1 className=" text-[25px] text-center font-semibold">
            Create account
          </h1>
          <div className=" ">
            <form className=" space-y-4 text-neutral-500 mt-20 flex items-center justify-center flex-col gap-4">
              <div>
                <input
                  required
                  placeholder="Name"
                  type="text"
                  className="w-[400px] focus:outline-none px-5 py-5 rounded-full border-primary border"
                />
              </div>
              <div>
                <input
                  required
                  placeholder="Email"
                  type="text"
                  className="w-[400px] focus:outline-none px-5 py-5 rounded-full border-primary border"
                />
              </div>
              <div>
                <input
                  required
                  placeholder="Phone"
                  type="text"
                  className="w-[400px] focus:outline-none px-5 py-5 rounded-full border-primary border"
                />
              </div>
              <div>
                <input
                  placeholder="Password"
                  required
                  type="password"
                  className="w-[400px] text-neutral-500 focus:outline-none px-5 py-5 rounded-full border-primary border"
                />
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
