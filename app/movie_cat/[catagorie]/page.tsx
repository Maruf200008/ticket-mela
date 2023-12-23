import MoviesCards from "../components/MoviesCards";

export default function page({ params }) {
  const { catagorie } = params;

  return (
    <div className=" my-20 max-w-screen-xl   mx-auto p-4 flex items-center flex-col ">
      <MoviesCards catagorie={catagorie} />
    </div>
  );
}
