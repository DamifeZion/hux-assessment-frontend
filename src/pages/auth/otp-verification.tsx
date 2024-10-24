import { useSetHelmet } from "@/hooks/shared/use-helmet";

import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import {
   InputOTP,
   InputOTPGroup,
   InputOTPSlot,
   InputOTPSeparator
} from "@/components/ui/input-otp"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { useOtpVerification } from "@/hooks/auth/use-otp-verification";

const OtpVerification = () => {
   useSetHelmet("Verify Email", [
      {
         name: "description",
         content: "Verify account email to continue",
      },
   ]);

   const { form, onSubmit, isLoading } =
      useOtpVerification();

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
                        Verify Email
                     </CardTitle>
                  </CardHeader>

                  <CardContent className="grid gap-6">
                     <FormField
                        name="verificationCode"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Verification Code</FormLabel>

                              <FormControl>
                                 <InputOTP maxLength={6} {...field}>
                                    <InputOTPGroup>
                                       <InputOTPSlot index={0} />
                                       <InputOTPSlot index={1} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                       <InputOTPSlot index={2} />
                                       <InputOTPSlot index={3} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                       <InputOTPSlot index={4} />
                                       <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                 </InputOTP>
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </CardContent>

                  <CardFooter className="grid gap-2 pb-10">
                     <Button
                        type="submit"
                        disabled={isLoading || !form.formState.isValid}
                        isLoading={isLoading}
                        className="w-full"
                     >
                        Continue
                     </Button>
                  </CardFooter>
               </Card>
            </form>
         </Form>
      </main>
   );
};

export default OtpVerification;
