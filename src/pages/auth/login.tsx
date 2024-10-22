import { useSetHelmet } from "@/hooks/shared/use-helmet";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/auth/use-login";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { routeConstants } from "@/constants/route-const";
import { EyeClosed, EyeIcon } from "lucide-react";


const Login = () => {
   useSetHelmet("Sign in", [
      {
         name: "description",
         content: "Sign in to your account to continue",
      },
   ]);

   const { form, onSubmit, showPassword, handlePasswordToggle, isLoading } =
      useLogin();

   return (
      <main className="flex items-center justify-center flex-1">
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className="container my-10"
            >
               <Card className="w-full max-w-sm mx-auto border-none rounded-2xl shadow-[0_0_20px_rgb(0,0,0,0.02)]">
                  <CardHeader className="space-y-4">
                     <CardTitle className="text-2xl text-center">
                        Sign in
                     </CardTitle>

                     <CardDescription className="text-sm text-center">
                        Don&apos;t have an account?{" "}
                        <Link
                           to={routeConstants.signup}
                           className="font-semibold underline underline-offset-2 hover:text-foreground"
                        >
                           Get Started
                        </Link>
                     </CardDescription>
                  </CardHeader>

                  <CardContent className="grid gap-6">
                     <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Email</FormLabel>

                              <FormControl>
                                 <Input
                                    type="email"
                                    placeholder="damifezion@example.com"
                                    {...field}
                                 />
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem>
                              <span className="flex items-center justify-between">
                                 <FormLabel>Password</FormLabel>

                                 <Link
                                    to={routeConstants.forgotPassword}
                                    className="inline-block ml-auto text-sm underline"
                                 >
                                    Forgot your password?
                                 </Link>
                              </span>

                              <FormControl>
                                 <div className="relative">
                                    <Input
                                       type={showPassword ? "text" : "password"}
                                       placeholder="••••••••••"
                                       className="pr-12"
                                       {...field}
                                    />

                                    <Button
                                       size="icon"
                                       variant="ghost"
                                       type="button"
                                       onClick={handlePasswordToggle}
                                       className="absolute right-0 -translate-y-1/2 top-1/2"
                                    >
                                       {showPassword ? (
                                          <EyeIcon />
                                       ) : (
                                          <EyeClosed />
                                       )}
                                    </Button>
                                 </div>
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </CardContent>

                  <CardFooter className="grid gap-2 pb-10">
                     <Button
                        type="submit"
                        disabled={isLoading}
                        isLoading={isLoading}
                        className="w-full"
                     >
                        Sign in
                     </Button>
                  </CardFooter>
               </Card>
            </form>
         </Form>
      </main>
   );
};

export default Login;
