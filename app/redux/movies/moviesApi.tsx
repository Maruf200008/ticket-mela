import { apiSlice } from "../apiSlice";

const movieApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    upcommingMovie: builder.query({
      query: () => "/movies/upcomming",
    }),
    theaterMovies: builder.query({
      query: () => "/movies/inTheaters",
    }),
    moviesCatagories: builder.query({
      query: (catagorie) => `/movies/categories/${catagorie}`,
    }),
    movieDetails: builder.query({
      query: (id) => `/movies/categories/${id}`,
    }),
    getMovie: builder.query({
      query: (id) => `/movies/detail/${id}`,
    }),
  }),
});

export const {
  useUpcommingMovieQuery,
  useTheaterMoviesQuery,
  useGetMovieQuery,
  useMoviesCatagoriesQuery,
  useMovieDetailsQuery,
} = movieApi;
