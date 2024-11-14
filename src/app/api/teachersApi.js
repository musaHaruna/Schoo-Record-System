import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const teachersApi = createApi({
  reducerPath: "teachersApi",
  tagTypes: ["Teachers"],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token || localStorage.getItem("token");

      // if we have a token set it in the headers
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllTeachers: builder.query({
      query: () => "/teacher",
      providesTags: ["Teachers"],
    }),
    getHeadTeacher: builder.query({
      query: () => "/teacher/head-teacher",
    }),
    getTeacherDetails: builder.query({
      query: (id) => `/teacher${id}`,
    }),
    createTeacher: builder.mutation({
      query: (body) => ({
        url: "/teacher",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Teachers"],
    }),
    getSingleTeacher: builder.query({
      query: (id) => `/teacher/${id}`,
    }),
    deleteTeacher: builder.mutation({
      query: (id) => ({
        url: `/teacher/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Teachers"],
    }),
    updateTeacher: builder.mutation({
      query: ({ id, body }) => ({
        url: `/teacher/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Teachers"],
    }),
  }),
});

export const {
  useGetAllTeachersQuery,
  useGetTeacherDetailsQuery,
  useCreateTeacherMutation,
  useGetSingleTeacherQuery,
  useDeleteTeacherMutation,
  useGetHeadTeacherQuery,
  useUpdateTeacherMutation,
} = teachersApi;
