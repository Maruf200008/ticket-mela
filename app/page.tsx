import Header from "./Header";
import Hero from "./components/Hero";
import TopMovies from "./components/TopMovies";
import WatchMovies from "./components/WatchMovies";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WatchMovies />
      <TopMovies />
    </div>
  );
}
