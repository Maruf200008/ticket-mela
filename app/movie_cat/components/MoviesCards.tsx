import MoviesCard from "./MoviesCard";
export default function MoviesCards() {
  return (
    <div className=" grid grid-cols-3 gap-10 w-full">
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
    </div>
  );
}
