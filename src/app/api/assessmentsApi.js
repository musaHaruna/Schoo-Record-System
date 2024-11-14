import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const assessmentsApi = createApi({
  reducerPath: "assessmentsApi",
  tagTypes: ["Assessments"],
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
    getAllAssessments: builder.query({
      query: () => "/assessments",
      providesTags: ["Assessments"],
    }),
    getAssessmentByTerm: builder.query({
      query: ({ termId, classId, subjectId }) =>
        `/assessments/term/${termId}/${classId}/${subjectId}`,
    }),
    getAssessmentDetails: builder.query({
      query: (id) => `/assessments/${id}`,
    }),
    createAssessment: builder.mutation({
      query: (body) => ({
        url: "/assessments",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Assessments"],
    }),
    updateAssessment: builder.mutation({
      query: (id, body) => ({
        url: `/assessments/${id}/status`,
        body,
        method: "PUT",
      }),
      invalidatesTags: ["Assessments"],
    }),
    deleteAssessment: builder.mutation({
      query: (id) => ({
        url: `/assessments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Assessments"],
    }),
  }),
});

export const {
  useGetAllAssessmentsQuery,
  useGetAssessmentDetailsQuery,
  useCreateAssessmentMutation,
  useUpdateAssessmentMutation,
  useGetAssessmentByTermQuery,
  useDeleteAssessmentMutation,
} = assessmentsApi;
