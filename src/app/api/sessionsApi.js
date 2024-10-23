import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const sessionsApi = createApi({
  reducerPath: "sessionsApi",
  tagTypes: ["Sessions"],
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
    getAllSessions: builder.query({
      query: () => "/sessions",
      providesTags: ["Sessions"],
    }),
    getSessionDetails: builder.query({
      query: (id) => `/sessions/${id}`,
    }),
    getSessionTerms: builder.query({
      query: (id) => `/sessions/${id}/terms`,
    }),
    createSession: builder.mutation({
      query: (body) => ({
        url: "/sessions",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Sessions"],
    }),
    updateSession: builder.mutation({
      query: (id, body) => ({
        url: `/sessions/${id}`,
        body,
        method: "PATCH",
      }),
      invalidatesTags: ["Sessions"],
    }),
    deleteSession: builder.mutation({
      query: (id) => ({
        url: `/sessions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Sessions"],
    }),
    createTerm: builder.mutation({
      query: (body) => ({
        url: "/terms",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Sessions"],
    }),
  }),
});

export const {
  useGetAllSessionsQuery,
  useGetSessionDetailsQuery,
  useCreateSessionMutation,
  useUpdateSessionMutation,
  useGetSessionTermsQuery,
  useDeleteSessionMutation,
  useCreateTermMutation,
} = sessionsApi;
