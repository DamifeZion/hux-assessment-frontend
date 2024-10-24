import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography"
import { routeConstants } from "@/constants/route-const";
import { Link } from "react-router-dom";

const Home = () => {

   return (
      <div className="container flex flex-col items-center justify-center flex-1 text-center">
         <Typography variant="h1">
            Welcome to <b>Contactly</b>
         </Typography>

         <Typography className="mt-2">
            CLick the link <Button asChild size="sm" variant="link" className="px-0.5">
               <Link to={routeConstants.signup}>
                  here
               </Link>
            </Button> to continue
         </Typography>
      </div>
   )
}

export default Home;