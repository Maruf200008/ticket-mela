import Image from "next/image";
import cast1 from "../../images/cast/cast1.jpg";
import cast2 from "../../images/cast/cast2.jpg";
import cast3 from "../../images/cast/cast3.jpg";
import cast4 from "../../images/cast/cast4.jpg";
import cast5 from "../../images/cast/cast5.jpg";
import cast6 from "../../images/cast/cast6.jpg";
import cast7 from "../../images/cast/cast7.jpg";
import cast8 from "../../images/cast/cast8.jpg";
export default function TopCast() {
  const castData = [
    {
      img: cast1,
      name: "Akshay Kumar",
      roll: "Anshul Malhotra",
    },
    {
      img: cast2,
      name: "Lara Dutta",
      roll: "Indira Gandhi",
    },
    {
      img: cast3,
      name: "Huma Qureshi",
      roll: "Adeela Rehman",
    },
    {
      img: cast4,
      name: "Vaani Kapoor",
      roll: "Radhika Malhotra",
    },
    {
      img: cast5,
      name: "Denzil Smith",
      roll: "Kao",
    },
    {
      img: cast6,
      name: "Adil Hussain",
      roll: "Santook",
    },
    {
      img: cast7,
      name: "Amit Kumar",
      roll: "Saand",
    },
    {
      img: cast8,
      name: "Neelam Bakshi",
      roll: "Passanger Lady",
    },
  ];
  return (
    <div className=" my-10">
      <h1 className=" text-[25px] font-semibold">Top Cast</h1>
      <div className=" my-10 grid sm:grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 ">
        {castData.map((data, index) => (
          <div key={index} className=" flex items-center gap-4">
            <div className=" rounded-full overflow-hidden bg-slate-100">
              <Image src={data?.img} alt="cast1" width={120} />
            </div>
            <div className=" space-y-3">
              <h2 className=" text-xl font-semibold">{data?.name}</h2>
              <p className=" text-sm text-neutral-500">{data?.roll}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
