import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { ENDPOINT } from "@/constants/endpoint-const";
import { usePutRequestMutation } from "@/services/api/request";
import { zodResolver } from "@hookform/resolvers/zod";
import { routeConstants } from "@/constants/route-const";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { isJwtValid } from "@/helpers/is-jwt-valid";

export type TVisibility = {
   password: false;
   confirmPassword: false;
};

export const useResetPassword = () => {
   const navigate = useNavigate();
   const { token } = useParams();
   const { email } = useSelector((state: RootState) => state.authSlice);

   // Make sure there the user actually requested the token else redirect to login.
   React.useLayoutEffect(() => {
      if (!token || !email || !isJwtValid(token)) {
         navigate(routeConstants.login);
      }
   }, [navigate, token, email]);

   const [visibility, setVisibility] = React.useState<TVisibility>({
      password: false,
      confirmPassword: false,
   });

   const formSchema = z
      .object({
         password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters long" })
            .regex(/[a-z]/, {
               message: "Password must contain at least one lowercase letter",
            })
            .regex(/[A-Z]/, {
               message: "Password must contain at least one uppercase letter",
            })
            .regex(/\d/, {
               message: "Password must contain at least one number",
            })
            .regex(/[\W_]/, {
               message: "Password must contain at least one special character",
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
         password: "",
         confirmPassword: "",
      },
   });

   const [putResetPasswordForm, { isLoading }] = usePutRequestMutation();
   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
         if (!token) {
            toast.error("Invalid or missing token");
            return;
         }

         const res = await putResetPasswordForm({
            url: ENDPOINT.RESET_PASSWORD.replace(":token", token),
            body: values,
         }).unwrap();

         toast.success(res.message);

         navigate(routeConstants.login);
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
      email,
   };
};
