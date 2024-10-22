import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { routeConstants } from "@/constants/route-const";
import { RootState } from "@/services/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NotFound = () => {
   const { user } = useSelector((state: RootState) => state.userSlice);
   const isAuthenticated = user?.token || false;

   return (
      <div>
         <section className="container flex flex-col items-center justify-center py-8 text-center gap-y-4">
            <Typography variant="h2" className="tracking-wide">
               Sorry, Page Not Found!
            </Typography>

            <Typography className="max-w-sm text-center text-pretty max-sm:text-sm">
               Sorry, we couldn’t find the page you’re looking for. Perhaps
               you’ve mistyped the URL? Be sure to check your spelling.
            </Typography>

            <img
               src="/not-found/404.svg"
               className="mt-5 size-full max-w-xs max-h-[400px]"
            />

            <Button asChild className="mt-10 font-semibold">
               <Link
                  to={
                     isAuthenticated
                        ? routeConstants.dashboard
                        : routeConstants.home
                  }
               >
                  Go to home
               </Link>
            </Button>
         </section>
      </div>
   );
};

export default NotFound;
