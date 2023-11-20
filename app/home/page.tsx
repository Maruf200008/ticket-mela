"use client";
import { useHomeQuery } from "../redux/auth/authApi";
import BlogPosts from "./components/BlogPosts";
import ComingSoon from "./components/ComingSoon";
import Feedbacks from "./components/Feedbacks";
import HeroSlider from "./components/HeroSlider";
import InTheaters from "./components/InTheaters";
import UpcomingEvents from "./components/UpcomingEvents";

export default function page() {
  const { data, isLoading, isError, isSuccess, error } = useHomeQuery();

  return (
    <div className="">
      <HeroSlider />
      {/* <Hero /> */}
      <InTheaters />
      {/* <WatchMovies /> */}
      {/* <TopMovies /> */}
      <ComingSoon />
      <Feedbacks />
      <UpcomingEvents />
      <BlogPosts />
    </div>
  );
}
