import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../../utils/baseURL';

const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL()}/api/`,
    prepareHeaders: async (headers) => {
      const token = await window?.Clerk?.session?.getToken();
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWeatherByDistrict: builder.mutation({
      query: (district) => ({
        url: `weather/${district}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetWeatherByDistrictMutation } = weatherApi;
export default weatherApi;
