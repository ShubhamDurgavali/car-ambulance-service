import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformations: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformations: (state, action) => {
      state.travelTimeInformations = action.pay;
    },
  },
});

export const {setOrigin, setDestination, setTravelTimeInformations} = navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.destination;
export const selectTravelTimeInformations = (state) => state.travelTimeInformations;

export default navSlice.reducer;