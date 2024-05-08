import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";






  export const baseApi = createApi({
    reducerPath: 'api',
    tagTypes:tagTypesList,
    baseQuery: axiosBaseQuery({
        baseUrl:'http://localhost:5000/api/v1'
    }),
    endpoints:(builder) =>({})
  });