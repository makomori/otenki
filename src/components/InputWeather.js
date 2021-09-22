import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { weatherInput } from "../features/weatherSlice";
import { getWeather } from "../features/weatherSaga";

export const InputWeather = (props) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      weatherInput({
        area: e.target.value,
      })
    );
  };

  const handleSubmit = () => {
    dispatch(getWeather());
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <form>
        <label>
          <input
            type="text"
            value={props.area}
            onChange={handleChange}
            placeholder="都道府県名"
          />
        </label>
      </form>
      <button onClick={handleSubmit}>送信</button>
    </>
  );
};
