import Image from "next/image";
export default function TopCast({ movie }) {
  const { TopCast } = movie;

  return (
    <div className=" my-10">
      <h1 className=" text-[25px] font-semibold">Top Cast</h1>
      <div className=" my-10 grid sm:grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 ">
        {TopCast.map((data, index) => (
          <div key={index} className=" flex items-center gap-4">
            <div className=" rounded-full overflow-hidden bg-slate-100">
              <Image src={data?.CastImg} alt="cast1" width={120} height={120} />
            </div>
            <div className=" space-y-3">
              <h2 className=" text-xl font-semibold">{data?.CastName}</h2>
              <p className=" text-sm text-neutral-500">{data?.CastCharacter}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
