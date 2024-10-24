import { TContact } from "@/components/contacts/contact-card";
import GlobalLoading from "@/components/global-loading";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Typography from "@/components/ui/typography";
import { useContactDetails } from "@/hooks/contacts/use-contact-details";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactDetails = () => {
   const { contact, handleDelete } = useContactDetails();
   const navigate = useNavigate();
   const data = contact.data as TContact

   if (contact.isLoading) {
      return <GlobalLoading />
   }

   return (
      <div className="container py-10">
         <Button size="icon" variant="link" onClick={() => navigate(-1)}>
            <ArrowLeft /> Back
         </Button>

         <Typography variant="h3" className="mt-5">
            Contact Details
         </Typography>

         <Card className="max-w-md mt-6">
            <CardHeader className="space-y-0 gap-y-6 relative *:list-none">
               <li>
                  First Name <b>{data.firstname}</b>
               </li>

               <li>
                  Last Name: <b>{data.lastname}</b>
               </li>

               <li>
                  Phone: <b>{data.phone}</b>
               </li>

               <div className="absolute flex items-center gap-2 top-2 right-2">
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Button size="sm" variant="ghost">
                           <Edit />
                        </Button>
                     </TooltipTrigger>

                     <TooltipContent>
                        Edit contact
                     </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                     <TooltipTrigger asChild>
                        <AlertDialog>
                           <AlertDialogTrigger asChild>
                              <Button
                                 size="sm"
                                 variant="destructive"
                                 className="bg-transparent text-destructive hover:bg-destructive text-destructive-foreground">
                                 <Trash2 />
                              </Button>
                           </AlertDialogTrigger>

                           <AlertDialogContent>
                              <AlertDialogHeader>
                                 <AlertDialogTitle>
                                    Are you absolutely sure?
                                 </AlertDialogTitle>
                                 <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your
                                    account and remove your data from our servers.
                                 </AlertDialogDescription>
                              </AlertDialogHeader>

                              <AlertDialogFooter>
                                 <AlertDialogCancel>Cancel</AlertDialogCancel>
                                 <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
                              </AlertDialogFooter>
                           </AlertDialogContent>
                        </AlertDialog>
                     </TooltipTrigger>

                     <TooltipContent>
                        Delete Contact
                     </TooltipContent>
                  </Tooltip>
               </div>
            </CardHeader>
         </Card>
      </div>
   );
};

export default ContactDetails;
