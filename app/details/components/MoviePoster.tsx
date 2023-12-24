import Image from "next/image";
import Link from "next/link";
import icon from "../../images/movieIcon.png";

export default function MoviePoster({ movie }) {
  const { poster, trilarUrl, catagory, shortDes, Director, Writers, Stars } =
    movie || {};
  return (
    <div>
      <div className=" w-full mt-10 grid md:grid-cols-12  gap-3 border-b">
        <div className=" md:col-span-3 order-last md:order-first ">
          <Image src={poster} alt="poster" width={500} height={800} />
        </div>
        <div className=" md:col-span-9 ">
          <iframe
            className=" w-full h-[300px] sm:h-[350px] md:h-full"
            src={trilarUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className=" mt-5 space-y-5">
        <div className=" flex items-center gap-5">
          {catagory.map((cat, index) => (
            <Link
              href={`/movie_cat/${cat}`}
              key={index}
              className=" border border-neutral-200 px-8 py-2 bg-neutral-100 hover:bg-neutral-200  rounded-full ease-in duration-300"
            >
              {cat}
            </Link>
          ))}
        </div>
        <div className=" border-b border-neutral-200 w-[80%]  pb-3">
          <p>{shortDes}</p>
        </div>
        <div className=" border-b border-neutral-200 w-[80%]  pb-3">
          <div className=" flex flex-col md:flex-row gap-2 md:gap-5">
            <h3 className=" font-semibold text-primary">Director</h3>
            <div className=" flex items-center gap-2">
              {Director.map((dir, index) => (
                <>
                  {index === Director.length - 1 ? (
                    <p key={index}>{dir}</p>
                  ) : (
                    <>
                      {" "}
                      <p key={index}>{dir}</p>
                      <Image
                        src={icon}
                        alt="icon"
                        className=" w-[5px] h-[5px]"
                      />{" "}
                    </>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
        <div className=" border-b border-neutral-200 w-[80%]  pb-3">
          <div className=" flex flex-col md:flex-row gap-2 md:gap-5">
            <h3 className=" font-semibold text-primary">Writers</h3>
            {Writers?.map((wri, index) => (
              <div key={index} className=" flex gap-3 items-center flex-wrap">
                {index === Writers.length - 1 ? (
                  <p>{wri}</p>
                ) : (
                  <>
                    <p>{wri}</p>
                    <Image src={icon} alt="icon" className=" w-[5px] h-[5px]" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className=" border-b border-neutral-200 w-[80%]  pb-3">
          <div className="flex flex-col md:flex-row gap-2 md:gap-5">
            <h3 className=" font-semibold text-primary">Stars</h3>
            {Stars.map((sta, index) => (
              <div key={index} className=" flex gap-3 items-center flex-wrap">
                {index === Stars.length - 1 ? (
                  <p>{sta}</p>
                ) : (
                  <>
                    <p>{sta}</p>
                    <Image src={icon} alt="icon" className=" w-[5px] h-[5px]" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
