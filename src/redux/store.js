import { configureStore } from "@reduxjs/toolkit";
import cropReducer from "./features/cropSlice";
import { cropApi } from "./features/crop/cropApi";

export const store = configureStore({
  reducer: {
    crop: cropReducer,
    [cropApi.reducerPath]: cropApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cropApi.middleware),
});
