import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const FLASK_BASE = import.meta.env.VITE_FLASK_BASE ?? 'http://localhost:5000';

const soilApi = createApi({
  reducerPath: 'soilApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${FLASK_BASE}/` }),
  endpoints: (builder) => ({
    analyzeSoil: builder.mutation({
      query: (file) => {
        const fd = new FormData();
        fd.append('image', file);
        return { url: 'predict', method: 'POST', body: fd };
      },
    }),
  }),
});

export const { useAnalyzeSoilMutation } = soilApi;
export default soilApi;
