import { ENDPOINT } from "@/constants/endpoint-const";
import { useGetRequestQuery } from "@/services/api/request";

export const useContact = () => {
   const {
      data: contactsData,
      isLoading: contactsLoading,
      error: contactError,
   } = useGetRequestQuery({
      url: ENDPOINT.GET_CONTACTS,
   });

   const contacts = {
      data: contactsData?.data || [],
      isLoading: contactsLoading,
      error: contactError,
   };

   return {
      contacts,
   };
};
