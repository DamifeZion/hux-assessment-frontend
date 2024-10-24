import { ENDPOINT } from "@/constants/endpoint-const";
import { routeConstants } from "@/constants/route-const";
import {
   useDeleteRequestMutation,
   useGetRequestQuery,
} from "@/services/api/request";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useInvalidateRequestTags } from "../shared/use-invalidate-request-tags";

export const useContactDetails = () => {
   const { id } = useParams() as { id: string };
   const navigate = useNavigate();
   const { invalidateRequestTag } = useInvalidateRequestTags();

   const {
      data: contactData,
      isLoading: contactLoading,
      error: contactError,
   } = useGetRequestQuery(
      {
         url: ENDPOINT.CONTACT_DETAILS.replace(":id", id),
      },
      {
         skip: !id,
      }
   );

   if (!id) {
      navigate(-1);
   }

   const [deleteContact, { isLoading: deleteContactLoading }] =
      useDeleteRequestMutation();
   const handleDelete = async () => {
      try {
         const res = await deleteContact({
            url: ENDPOINT.DELETE_CONTACT.replace(":id", id),
         });

         toast.success(res.data.message);
         navigate(routeConstants.dashboard);
         // Refetch the contacts list after successful navigation
         invalidateRequestTag(ENDPOINT.GET_CONTACTS);
      } catch (error) {
         console.error(error);
      }
   };

   const contact = {
      data: contactData?.data || [],
      isLoading: contactLoading || deleteContactLoading,
      error: contactError,
   };

   return {
      contact,
      handleDelete,
   };
};
