import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { ENDPOINT } from "@/constants/endpoint-const";
import { usePostRequestMutation } from "@/services/api/request";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { setEmail } from "@/services/slices/auth-slice";

export const useForgotPassword = () => {
   const dispatch = useDispatch();

   const formSchema = z.object({
      email: z.string().email({
         message: "Please enter a valid email",
      }),
   });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
      },
   });

   const [postForgotPasswordForm, { isLoading }] = usePostRequestMutation();
   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
         const res = await postForgotPasswordForm({
            url: ENDPOINT.FORGOT_PASSWORD,
            body: values,
         }).unwrap();

         toast.success(res.message);

         //Persist the email and phone for validation
         dispatch(setEmail(values.email));
         form.reset();
      } catch (error) {
         console.error(error);
      }
   };

   return {
      form,
      onSubmit,
      isLoading,
   };
};
