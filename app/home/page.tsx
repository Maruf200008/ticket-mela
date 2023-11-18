"use client";
import { useHomeQuery } from "../redux/auth/authApi";
import BlogPosts from "./components/BlogPosts";
import Feedbacks from "./components/Feedbacks";
import HeroSlider from "./components/HeroSlider";
import TopMovies from "./components/TopMovies";
import UpcomingEvents from "./components/UpcomingEvents";
import WatchMovies from "./components/WatchMovies";

export default function page() {
  const { data, isLoading, isError, isSuccess, error } = useHomeQuery();

  return (
    <div>
      <HeroSlider />
      {/* <Hero /> */}
      <WatchMovies />
      <TopMovies />
      <Feedbacks />
      <UpcomingEvents />
      <BlogPosts />
    </div>
  );
}
