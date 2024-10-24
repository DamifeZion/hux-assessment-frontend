import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base-query";
import { transformErrorResponse } from "@/helpers/transform-rtk-errors";

export type TFetchRequest = {
   url: string;
   body?: object;
   params?: object;
};

export const requestApi = createApi({
   baseQuery: baseQuery,
   reducerPath: "requestApi",
   tagTypes: ["Data"],

   endpoints: (builder) => ({
      getRequest: builder.query({
         query: ({ url, params }: Omit<TFetchRequest, "body">) => ({
            url,
            method: "GET",
            params,
         }),
         transformErrorResponse,
         providesTags: (_result, _error, { url }) => [
            { type: "Data", id: url },
         ],
      }),
      postRequest: builder.mutation({
         query: ({ url, body }: Omit<TFetchRequest, "params">) => ({
            url,
            method: "POST",
            body,
         }),
         transformErrorResponse,
         invalidatesTags: (_result, _error, { url }) => [
            { type: "Data", id: url },
         ],
      }),
      putRequest: builder.mutation({
         query: ({ url, body, params }: TFetchRequest) => ({
            url,
            method: "PUT",
            body,
            params,
         }),
         transformErrorResponse,
         invalidatesTags: (_result, _error, { url }) => [
            { type: "Data", id: url },
         ],
      }),
      deleteRequest: builder.mutation({
         query: ({ url, params }: Omit<TFetchRequest, "body">) => ({
            url,
            method: "DELETE",
            params,
         }),
         transformErrorResponse,
         invalidatesTags: (_result, _error, { url }) => [
            { type: "Data", id: url },
         ],
      }),

      patchRequest: builder.mutation({
         query: ({ url, body, params }: TFetchRequest) => ({
            url,
            method: "PATCH",
            body,
            params,
         }),
         transformErrorResponse,
         invalidatesTags: (_result, _error, { url }) => [
            { type: "Data", id: url },
         ],
      }),
   }),
});

export const {
   useGetRequestQuery,
   usePostRequestMutation,
   usePutRequestMutation,
   useDeleteRequestMutation,
   usePatchRequestMutation,
} = requestApi;

export default requestApi;
