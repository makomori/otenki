import React from "react";
import { InputWeather } from "./InputWeather";
import { ResultWeather } from "./ResultWeather";
import { useSelector } from "react-redux";
import { selectWeather } from "../features/weatherSlice";

export const Weather = () => {
  const weather = useSelector(selectWeather);
  return (
    <div>
      <InputWeather area={weather.area} />
      <ResultWeather weather={weather.weather} />
    </div>
  );
};
