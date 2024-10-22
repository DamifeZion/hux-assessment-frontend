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
import { useSignUp } from "@/hooks/auth/use-signup";

const SignUp = () => {
   useSetHelmet("Sign up", [
      {
         name: "description",
         content: "Create your account to continue",
      },
   ]);

   const { form, onSubmit, handlePasswordToggle, isLoading, visibility } =
      useSignUp();

   return (
      <main className="flex items-center justify-center flex-1">
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className="container my-10"
            >
               <Card className="w-full max-w-sm mx-auto">
                  <CardHeader className="space-y-4">
                     <CardTitle className="text-2xl text-center">
                        Sign up
                     </CardTitle>

                     <CardDescription className="text-sm text-center">
                        Already have an account?{" "}
                        <Link
                           to={routeConstants.login}
                           className="underline-offset-2 text-foreground hover:underline"
                        >
                           Sign in
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
                              <FormLabel>Password</FormLabel>

                              <FormControl>
                                 <div className="relative">
                                    <Input
                                       type={
                                          visibility.password
                                             ? "text"
                                             : "password"
                                       }
                                       placeholder="••••••••••"
                                       className="pr-12"
                                       {...field}
                                    />

                                    <Button
                                       size="icon"
                                       variant="ghost"
                                       type="button"
                                       onClick={() =>
                                          handlePasswordToggle("password")
                                       }
                                       className="absolute right-0 -translate-y-1/2 top-1/2"
                                    >
                                       {visibility.password ? (
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

                     <FormField
                        name="confirmPassword"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Confirm Password</FormLabel>

                              <FormControl>
                                 <div className="relative">
                                    <Input
                                       type={
                                          visibility.confirmPassword
                                             ? "text"
                                             : "password"
                                       }
                                       placeholder="••••••••••"
                                       className="pr-12"
                                       {...field}
                                    />

                                    <Button
                                       size="icon"
                                       variant="ghost"
                                       type="button"
                                       onClick={() =>
                                          handlePasswordToggle(
                                             "confirmPassword"
                                          )
                                       }
                                       className="absolute right-0 -translate-y-1/2 top-1/2"
                                    >
                                       {visibility.confirmPassword ? (
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
                        Sign up
                     </Button>
                  </CardFooter>
               </Card>
            </form>
         </Form>
      </main>
   );
};

export default SignUp;
