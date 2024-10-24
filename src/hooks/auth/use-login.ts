import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { ENDPOINT } from "@/constants/endpoint-const";
import { usePostRequestMutation } from "@/services/api/request";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { routeConstants } from "@/constants/route-const";
import { useDispatch } from "react-redux";
import { setUser } from "@/services/slices/user-slice";

export const useLogin = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [showPassword, setShowPassword] = React.useState(false);

   const formSchema = z.object({
      email: z.string().email({
         message: "Please enter a valid email",
      }),
      password: z.string().min(1, {
         message: "Please enter your password",
      }),
   });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   const [postLoginForm, { isLoading }] = usePostRequestMutation();
   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
         const res = await postLoginForm({
            url: ENDPOINT.LOGIN,
            body: values,
         }).unwrap();
         
         dispatch(setUser(res.data));
         toast.success(res.message);

         navigate(routeConstants.dashboard);
         form.reset();
      } catch (error) {
         console.error(error);
      }
   };

   const handlePasswordToggle = () => {
      setShowPassword((prev) => !prev);
   };

   return {
      form,
      onSubmit,
      showPassword,
      handlePasswordToggle,
      isLoading,
   };
};
