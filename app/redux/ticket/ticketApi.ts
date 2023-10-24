import { apiSlice } from "../apiSlice";

const ticketApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPayment: builder.mutation({
      query: (data) => ({
        url: "/payment",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddPaymentMutation } = ticketApi;
