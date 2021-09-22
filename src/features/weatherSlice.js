import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: { area: "東京都", weather: "" },
  },
  reducers: {
    weatherSubmit: (state, action) => {
      state.weather.weather = action.payload.weather;
    },
  },
});

export const { weatherSubmit } = weatherSlice.actions;
export const selectWeather = (state) => state.weather.weather;
export default weatherSlice.reducer;
