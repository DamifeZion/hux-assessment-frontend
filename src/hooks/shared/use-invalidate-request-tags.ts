import requestApi from "@/services/api/request";
import { useDispatch } from "react-redux";

// Define the helper function
export const useInvalidateRequestTags = () => {
   const dispatch = useDispatch();

   const invalidateRequestTag = (endpoint: string) => {
      dispatch(
         requestApi.util.invalidateTags([{ type: "Data", id: endpoint }])
      );
   };
   return {
      invalidateRequestTag,
   };
};
