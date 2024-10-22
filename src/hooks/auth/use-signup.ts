import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { ENDPOINT } from "@/constants/endpoint-const";
import { usePostRequestMutation } from "@/services/api/request";
import { zodResolver } from "@hookform/resolvers/zod";
import { routeConstants } from "@/constants/route-const";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail } from "@/services/slices/auth-slice";

export type TVisibility = {
   password: false;
   confirmPassword: false;
};

export const useSignUp = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const [visibility, setVisibility] = React.useState<TVisibility>({
      password: false,
      confirmPassword: false,
   });

   const formSchema = z
      .object({
         email: z.string().email({
            message: "Please enter a valid email",
         }),
         password: z.string().min(1, {
            message: "Please enter your password",
         }),
         confirmPassword: z.string().min(1, {
            message: "Please enter your password again",
         }),
      })
      .superRefine((data, ctx) => {
         if (data.confirmPassword !== data.password) {
            ctx.addIssue({
               code: "custom",
               message: "Passwords do not match",
               path: ["confirmPassword"],
            });
         }
      });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         password: "",
         confirmPassword: "",
      },
   });

   const [postLoginForm, { isLoading }] = usePostRequestMutation();
   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
         const res = await postLoginForm({
            url: ENDPOINT.SIGN_UP,
            body: values,
         }).unwrap();

         toast.success(res.data.message);

         //Persist the email and phone for validation
         dispatch(setEmail(values.email));

         navigate(routeConstants.verifyEmail);
         form.reset();
      } catch (error) {
         console.error(error);
      }
   };

   const handlePasswordToggle = (field: keyof TVisibility) => {
      setVisibility((prev) => ({
         ...prev,
         [field]: !prev[field],
      }));
   };

   return {
      form,
      onSubmit,
      visibility,
      handlePasswordToggle,
      isLoading,
   };
};
