import { Contact2 } from "lucide-react"
import Typography from "../ui/typography"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { routeConstants } from "@/constants/route-const"


export const NoContacts = () => {

   return (
      <div className="container flex flex-col items-center justify-center flex-1 max-w-[350px] my-10 text-center">
         <span className="relative before:w-1 before:h-[150%] before:absolute before:bg-foreground before:rotate-45 before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2">
            <Contact2 className="size-16" />
         </span>

         <Typography className="mt-3">
            You currently dont have any contact created. Click the button below to create your first contact
         </Typography>

         <Button asChild className="mt-6">
            <Link to={routeConstants.addContact}>
               Create Contact
            </Link>
         </Button>
      </div>
   )
}