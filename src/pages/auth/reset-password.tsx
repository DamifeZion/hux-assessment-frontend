import { useSetHelmet } from "@/hooks/shared/use-helmet";
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
import { EyeClosed, EyeIcon } from "lucide-react";
import Typography from "@/components/ui/typography";
import { useResetPassword } from "@/hooks/auth/use-reset-password";

const ResetPassword = () => {
   useSetHelmet("Reset Password", [
      {
         name: "description",
         content: "Reset your account password",
      },
   ]);

   const { form, onSubmit, handlePasswordToggle, isLoading, visibility, email } =
      useResetPassword();

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
                        Reset Password
                     </CardTitle>
                     <CardDescription>
                        Change account password for - {email}
                     </CardDescription>
                  </CardHeader>

                  <CardContent className="grid gap-6">
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

                     <ul className="*:list-outside *:list-disc [&_li]:ml-5">
                        <Typography affects="small" className="!leading-tight">
                           Password must be at least 8 characters <br /> and contain:
                        </Typography>

                        <div className="mt-3 space-y-1.5">
                           <li>
                              <Typography affects="small">
                                 one lowercase letter [a - z]
                              </Typography>
                           </li>

                           <li>
                              <Typography affects="small">
                                 one uppercase letter [A - Z]
                              </Typography>
                           </li>

                           <li>
                              <Typography affects="small">
                                 one number [0 - 9]
                              </Typography>
                           </li>


                           <li>
                              <Typography affects="small">
                                 one special character [@./%$.?]
                              </Typography>
                           </li>
                        </div>
                     </ul>
                  </CardContent>

                  <CardFooter className="grid gap-2 pb-10">
                     <Button
                        type="submit"
                        disabled={isLoading}
                        isLoading={isLoading}
                        className="w-full"
                     >
                        Continue
                     </Button>
                  </CardFooter>
               </Card>
            </form>
         </Form>
      </main >
   );
};

export default ResetPassword;
