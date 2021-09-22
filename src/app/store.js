import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weatherSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../features/weatherSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
