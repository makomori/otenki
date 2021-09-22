import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../features/weatherSaga";

export const InputWeather = (props) => {
  const [areaName, setAreaName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAreaName(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(getWeather({ area: areaName }));
  };

  return (
    <>
      <form>
        <label>
          <input
            type="text"
            value={areaName}
            onChange={handleChange}
            placeholder="都道府県名"
          />
        </label>
      </form>
      <button onClick={handleSubmit}>送信</button>
    </>
  );
};
