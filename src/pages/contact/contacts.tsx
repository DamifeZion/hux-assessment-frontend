import { ContactCard, TContact } from "@/components/contacts/contact-card";
import { NoContacts } from "@/components/contacts/no-contacts";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { routeConstants } from "@/constants/route-const";
import { useContact } from "@/hooks/contacts/use-contact";
import { RootState } from "@/services/store";
import { Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Contacts = () => {
   const { user } = useSelector((state: RootState) => state.userSlice)
   const { contacts } = useContact();

   if (!contacts.error && !contacts.data?.length) {
      return <NoContacts />
   }

   return (
      <div className="container py-10">
         <div className="flex flex-wrap items-center justify-between gap-2">
            <Typography variant="h3">
               Your contact list 👇
            </Typography>

            <Button asChild size="sm" className="max-[400px]:hidden">
               <Link to={routeConstants.addContact}>
                  <Plus /> Add Contact
               </Link>
            </Button>
         </div>
         <div>
            <Typography className="font-medium text-primary">
               {user?.email}
            </Typography>
            
            <Button asChild size="sm" className="mt-6 min-[402px]:hidden">
               <Link to={routeConstants.addContact}>
                  <Plus /> Add Contact
               </Link>
            </Button>
         </div>

         <div className="grid mt-10 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {
               contacts.data.map((item: TContact) => (
                  <ContactCard key={item._id} contacts={item} />
               ))
            }
         </div>
      </div>
   );
};

export default Contacts;
