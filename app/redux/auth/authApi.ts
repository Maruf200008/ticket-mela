import { apiSlice } from "../apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "/login",
        method: "DELETE",
      }),
    }),

    home: builder.query({
      query: () => ({
        url: `/home`,

        validateStatus: (response, result) => {
          console.log(`Bangladesh ${response}`);
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogOutMutation,
  useHomeQuery,
} = authApi;
