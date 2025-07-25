import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cropApi = createApi({
  reducerPath: "cropApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/"
  }),
  endpoints: (builder) => ({
    createCrop: builder.mutation({
      query: (newCrop) => ({
        url: "crops",
        method: "POST",
        body: newCrop
      })
    })
  })
});

export const { useCreateCropMutation } = cropApi;
