// redux/features/crop/cropApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../../utils/baseURL";

const cropApi = createApi({
  reducerPath: "cropApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL()}/api/`,
    prepareHeaders: async (headers) => {
      const token = await window?.Clerk?.session?.getToken();
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createCrop: builder.mutation({
      query: (newCrop) => ({
        url: "crops",
        method: "POST",
        body: newCrop,
      }),
    }),

    // ✅ encodeURIComponent to be safe
    getCropsForSearchQuery: builder.query({
      query: ({ query }) => `crops/search/retrieve?query=${encodeURIComponent(query)}`,
    }),
  }),
});

export const {
  useCreateCropMutation,
  // ✅ use the *lazy* hook so you can trigger it after soil+weather are ready
  useLazyGetCropsForSearchQueryQuery,
} = cropApi;

export default cropApi;
