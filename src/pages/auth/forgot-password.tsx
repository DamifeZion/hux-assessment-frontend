import { useSetHelmet } from "@/hooks/shared/use-helmet";

import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
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
import { useForgotPassword } from "@/hooks/auth/use-forgot-password";

const ForgotPassword = () => {
   useSetHelmet("Forgot Password", [
      {
         name: "description",
         content: "Enter your account email to request new password",
      },
   ]);

   const { form, onSubmit, isLoading } =
      useForgotPassword();

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
                        Forgot Password
                     </CardTitle>
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
                  </CardContent>

                  <CardFooter className="grid gap-2 pb-10">
                     <Button
                        type="submit"
                        disabled={isLoading}
                        isLoading={isLoading}
                        className="w-full"
                     >
                        Submit
                     </Button>
                  </CardFooter>
               </Card>
            </form>
         </Form>
      </main>
   );
};

export default ForgotPassword;
