import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import ticketReducer from "./ticket/ticketSlice";

const store = configureStore({
  reducer: {
    ticket: ticketReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
