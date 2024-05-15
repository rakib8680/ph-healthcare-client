import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";




export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    updateMyProfile: build.mutation({
      query: (data) => {
         return {
            url: '/user/update-my-profile',
            method: 'PATCH',
            data,
            contentType: 'multipart/form-data',
         };
      },
      invalidatesTags: [tagTypes.user],
   }),
  }),
});

export const { useGetMyProfileQuery, useUpdateMyProfileMutation } = userApi;