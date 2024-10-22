import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { toast } from "sonner";

// Define the expected shape of the error response
interface ErrorResponse {
   statusMessage?: string;
   message?: string;
}

export const transformErrorResponse = (err: FetchBaseQueryError) => {
   // Handle network errors
   if (err.status === "FETCH_ERROR") {
      toast.error("Network error. Please check your connection.");
      return err;
   }

   // Handle server-side errors (404)
   if (err.status === 404) {
      // Narrow down the type of err.data
      if (isErrorResponse(err.data)) {
         toast.error(`Error: ${err.data.statusMessage || "Invalid API"}`);
      } else {
         toast.error("Invalid API endpoint or resource not found.");
      }
      return err;
   }

   // Handle other HTTP errors (e.g., 500, 403)
   if (typeof err.status === "number") {
      if (isErrorResponse(err.data)) {
         toast.error(`Error: ${err.data.message || "Unknown server error"}`);
      } else {
         toast.error(
            "An unknown server error occurred. Please try again later."
         );
      }
      return err;
   }

   // Fallback for unknown errors
   toast.error("An unknown error occurred. Please try again.");
   return err;
};

// Type guard to check if err.data is an ErrorResponse
function isErrorResponse(data: unknown): data is ErrorResponse {
   return (
      typeof data === "object" &&
      data !== null &&
      ("message" in data || "statusMessage" in data)
   );
}
