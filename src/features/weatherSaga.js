import axios from "axios";
import { put, call, takeLatest, all } from "redux-saga/effects";

const applyAxios = () => {
  const weather = useSelector(selectWeather);
  const api_key = process.env.REACT_APP_WEATHER_API_KEY;
  // 質問です。
  // 以下のスプレッド構文にstate(weather.area)を入れたいのですが、どうすればよいですか？
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${weather.area}&appid=${api_key}`;
  return axios.get(url);
};

function* callApi() {
  try {
    const res = yield call(applyAxios);
    console.log(res.data.weather[0].main);
    yield put({
      type: "GET_WEATHER",
      // 質問です。
      // 以下でstateを変更する処理(weatherをres.data.weather[0].mainにする)をしたいのですが、、
      // どうすればよいですか？おそらく上のtype: "GET_WEATHER"も間違っているかもしれません。
      payload: {
        weather: res.data.weather[0].main,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export const getWeather = () => ({ type: "GET_WEATHER" });

function* weatherSaga() {
  yield takeLatest("GET_WEATHER", callApi);
}

export default function* rootSaga() {
  yield all([weatherSaga()]);
}