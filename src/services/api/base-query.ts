import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import qs from "qs"; // For query string serialization
import { RootState } from "../store";
import { getEnv } from "@/helpers/get-env";

export const baseServerUrl = getEnv("VITE_API_BASE_URL");

export const baseQuery = fetchBaseQuery({
   baseUrl: baseServerUrl,

   prepareHeaders: (headers, { getState }) => {
      headers.set("accept", "application/json");

      const state = getState() as RootState;
      const { user } = state.userSlice;
      const token = user?.token;

      if (token && !headers.has("Authorization")) {
         headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
   },
   paramsSerializer: (params) => qs.stringify(params),
});
