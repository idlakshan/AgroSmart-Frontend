// src/redux/features/cropSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cropSlice = createSlice({
  name: "crop",
  initialState: {
    success: false,
    error: null
  },
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetCropStatus: (state) => {
      state.success = false;
      state.error = null;
    }
  }
});

export const { setSuccess, setError, resetCropStatus } = cropSlice.actions;
export default cropSlice.reducer;
