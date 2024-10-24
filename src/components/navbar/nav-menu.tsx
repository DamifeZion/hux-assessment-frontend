import { Button } from "../ui/button";
import { ThemeMenu } from "./theme-menu";
import { Link } from "react-router-dom";
import { getFilteredRoutes } from "@/helpers/get-filtered-routes";
import { routeConstants } from "@/constants/route-const";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { setUser } from "@/services/slices/user-slice";
import { LogOutIcon } from "lucide-react";

type NavMenuProp = {
   closeSheet?: () => void;
};

export const NavMenu = ({ closeSheet }: NavMenuProp) => {
   const dispatch = useDispatch();
   const { user } = useSelector((state: RootState) => state.userSlice);

   const isAuthenticated = !!user?.token;
   const nonButtonRoutes = getFilteredRoutes(false, isAuthenticated);
   const buttonRoutes = getFilteredRoutes(true, isAuthenticated);

   const styles = "max-lg:text-md max-lg:w-full max-lg:justify-start";

   return (
      <div className="ml-auto max-lg:grid items-center lg:flex *:grid *:items-center *:gap-2 *:lg:flex">
         <ul>
            {nonButtonRoutes.map((item) => {
               return (
                  <li key={item.url}>
                     <Button
                        asChild
                        variant="ghost"
                        onClick={closeSheet}
                        className={styles}
                     >
                        <Link to={item.url}>{item.title}</Link>
                     </Button>
                  </li>
               );
            })}
         </ul>

         {/* NOTE: Hide the theme menu on small screens */}
         <ThemeMenu className="max-lg:hidden" />

         <ul className="max-lg:mt-4 max-lg:gap-2 lg:ml-4">
            {buttonRoutes.map((item) => {
               const isLogin = item.url === routeConstants.login;

               return (
                  <li key={item.url}>
                     <Button
                        asChild
                        variant={isLogin ? "outline" : "default"}
                        onClick={closeSheet}
                        className={cn("h-fit max-lg:w-full")}
                     >
                        <Link to={item.url}>{item.title}</Link>
                     </Button>
                  </li>
               );
            })}

            {isAuthenticated && (
               <Button variant="destructive" onClick={() => dispatch(setUser(null))}>
                 <LogOutIcon/> Log out
               </Button>
            )}
         </ul>
      </div>
   );
};
