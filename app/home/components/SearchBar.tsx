import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  return (
    <form className=" relative ">
      <div className="serch-box">
        <input
          type="text"
          placeholder="Search anything..."
          className=" relative z-20 w-[40px] text-[14px] text-slate-500 h-[40px] bg-transparent border-primary  rounded-full border cursor-pointer outline-none focus:w-[250px]  focus:cursor-text pr-4 pl-5 ease-out duration-300 "
        />
        <button className="  absolute inset-y-0 my-auto  h-8  w-12 -ml-7 text-secondary  ">
          <BsSearch />
        </button>
      </div>
    </form>
  );
}
