import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAddContact } from "@/hooks/contacts/use-add-contacts"


const AddContact = () => {
   const { form, isLoading, onSubmit } = useAddContact()

   return (
      <div className="flex items-center justify-center flex-1 py-5">
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm">
               <Card>
                  <CardHeader>
                     <CardTitle>
                        Add Contact
                     </CardTitle>

                     <CardDescription>
                        Create a new contact information
                     </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                     <FormField
                        name="firstname"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>
                                 First Name
                              </FormLabel>

                              <FormControl>
                                 <Input {...field} />
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        name="lastname"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>
                                 Last Name
                              </FormLabel>

                              <FormControl>
                                 <Input {...field} />
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        name="phone"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>
                                 Phone Number
                              </FormLabel>

                              <FormControl>
                                 <Input isNumeric {...field} />
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </CardContent>

                  <CardFooter>
                     <Button isLoading={isLoading} className="w-full">
                        Submit
                     </Button>
                  </CardFooter>
               </Card>
            </form>
         </Form>
      </div>
   )
}
export default AddContact