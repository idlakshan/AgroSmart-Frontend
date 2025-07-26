
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../../utils/baseURL';

const cropApi = createApi({
  reducerPath: 'cropApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL()}/api/`,
    prepareHeaders: async (headers) => {
      const token = await window?.Clerk?.session?.getToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    createCrop: builder.mutation({
      query: (newCrop) => ({
        url: 'crops',
        method: 'POST',
        body: newCrop
      })
    }),

  })
});

export const {
  useCreateCropMutation
} = cropApi;

export default cropApi;
