import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: { area: "東京都", weather: "" },
  },
  reducers: {
    weatherInput: (state, action) => {
      state.weather.area = action.payload.area;
    },
    weatherSubmit: (state, action) => {
      state.weather.weather = action.payload.weather;
    },
  },
});

export const { weatherInput, weatherSubmit } = weatherSlice.actions;
export const selectWeather = (state) => state.weather.weather;
export default weatherSlice.reducer;
