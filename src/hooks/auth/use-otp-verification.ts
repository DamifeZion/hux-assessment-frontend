import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { ENDPOINT } from "@/constants/endpoint-const";
import { usePostRequestMutation } from "@/services/api/request";
import { zodResolver } from "@hookform/resolvers/zod";
import { routeConstants } from "@/constants/route-const";
import { useNavigate } from "react-router-dom";

export const useOtpVerification = () => {
   const navigate = useNavigate();

   const formSchema = z.object({
      verificationCode: z.string().min(6, {
         message: "Please enter valid otp",
      }),
   });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         verificationCode: "",
      },
   });

   const [postVerificationForm, { isLoading }] = usePostRequestMutation();
   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
         const res = await postVerificationForm({
            url: ENDPOINT.VERIFY_EMAIL,
            body: values,
         }).unwrap();

         toast.success(res.message);

         navigate(routeConstants.login);
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
