export default function StoryLine({ movie }) {
  return (
    <div>
      <div className=" mt-[60px]">
        <h1 className=" text-[25px] font-semibold ">Story Line</h1>
        <div className=" my-5">
          <p className=" leading-8 text-neutral-500">{movie?.StoryLine}</p>
        </div>
      </div>
    </div>
  );
}
