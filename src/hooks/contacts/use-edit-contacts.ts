import { ENDPOINT } from "@/constants/endpoint-const";
import { routeConstants } from "@/constants/route-const";
import {
   useGetRequestQuery,
   usePutRequestMutation,
} from "@/services/api/request";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { useInvalidateRequestTags } from "../shared/use-invalidate-request-tags";
import * as React from "react";

export const useEditContact = () => {
   const { id } = useParams() as { id: string };
   const navigate = useNavigate();
   const { invalidateRequestTag } = useInvalidateRequestTags();

   const formSchema = z.object({
      firstname: z.string().min(1, {
         message: "Please enter first name",
      }),
      lastname: z.string().min(1, {
         message: "Please enter a last name",
      }),
      phone: z
         .string()
         .min(10, {
            message: "Please enter a valid phone number",
         })
         .max(14, {
            message: "Please enter a valid phone number",
         }),
   });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         firstname: "",
         lastname: "",
         phone: "",
      },
   });

   const { data: contactData, isLoading: gettingContact } = useGetRequestQuery(
      {
         url: ENDPOINT.CONTACT_DETAILS.replace(":id", id),
      },
      {
         skip: !id,
      }
   );

   React.useEffect(() => {
      if (contactData?.data) {
         form.reset({
            ...contactData?.data,
            phone: String(contactData?.data?.phone),
         });
      } else {
         navigate(-1);
      }
   }, [contactData, form, navigate]);

   const [putEditContact, { isLoading }] = usePutRequestMutation();
   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
         const res = await putEditContact({
            url: ENDPOINT.EDIT_CONTACT.replace(":id", id),
            body: values,
         });

         // On successful post, invalidate the GET_CONTACTS query
         invalidateRequestTag(ENDPOINT.GET_CONTACTS);

         toast.success(res?.data?.message);
         navigate(routeConstants.dashboard);
         form.reset();
      } catch (error) {
         console.log(error);
      }
   };

   return {
      form,
      onSubmit,
      isLoading,
      gettingContact,
   };
};
