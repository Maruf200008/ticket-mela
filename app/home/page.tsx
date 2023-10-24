"use client";
import { useHomeQuery } from "../redux/auth/authApi";
import BlogPosts from "./components/BlogPosts";
import Feedbacks from "./components/Feedbacks";
import Hero from "./components/Hero";
import TopMovies from "./components/TopMovies";
import UpcomingEvents from "./components/UpcomingEvents";
import WatchMovies from "./components/WatchMovies";

export default function page() {
  const { data, isLoading, isError, isSuccess, error } = useHomeQuery();

  return (
    <div>
      <Hero />
      <WatchMovies />
      <TopMovies />
      <Feedbacks />
      <UpcomingEvents />
      <BlogPosts />
    </div>
  );
}
