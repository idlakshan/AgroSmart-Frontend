import { configureStore } from "@reduxjs/toolkit";
import cropReducer from "./features/cropSlice";
import cropApi from './features/crop/cropApi';
import weatherApi from "./features/weather/weatherApi";

export const store = configureStore({
  reducer: {
    crop: cropReducer,
    [cropApi.reducerPath]: cropApi.reducer,
     [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cropApi.middleware, weatherApi.middleware),
});
