import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  showDate: "",
  hallName: "",
  showTime: "",
  seatType: "",
  ticketQuantity: 0,
  totalAmount: 0,
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.location = action.payload;
    },
    addShowDate: (state, action) => {
      state.showDate = action.payload;
    },
    addHallName: (state, action) => {
      state.hallName = action.payload;
    },
    addShowTime: (state, action) => {
      state.showTime = action.payload;
    },
    addSeatType: (state, action) => {
      state.seatType = action.payload;
    },
    incrementTicketQuantity: (state, action) => {
      state.ticketQuantity = action.payload + 1;
    },
    decrementTicketQuantity: (state, action) => {
      state.ticketQuantity = action.payload - 1;
    },
    addTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
    incrementSumTotalAmount: (state, action) => {
      state.totalAmount = state.totalAmount + action.payload;
    },
    decrementSumTotalAmount: (state, action) => {
      state.totalAmount = state.totalAmount - action.payload;
    },
  },
});

export const {
  addLocation,
  addShowDate,
  addHallName,
  addShowTime,
  addTotalAmount,
  addSeatType,
  incrementTicketQuantity,
  decrementTicketQuantity,
  incrementSumTotalAmount,
  decrementSumTotalAmount,
} = ticketSlice.actions;

export default ticketSlice.reducer;
