import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";






  export const baseApi = createApi({
    reducerPath: 'api',
    tagTypes:['specialties'],
    baseQuery: axiosBaseQuery({
        baseUrl:'http://localhost:5000/api/v1'
    }),
    endpoints:(builder) =>({})
  });