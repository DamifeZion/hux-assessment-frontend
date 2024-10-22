import { navbarConst } from "@/constants/navbar-const";
import { Button } from "../ui/button";
import { ThemeMenu } from "./theme-menu";
import { Link } from "react-router-dom";

type NavMenuProp = {
   closeSheet?: () => void;
}

export const NavMenu = ({ closeSheet }: NavMenuProp) => {

   return (
      <ul className="grid items-center ml-auto max-lg:gap-2 lg:flex">
         
         {navbarConst.ROUTES.map((item) => (
            <li key={item.url}>
               <Button variant="ghost" onClick={closeSheet} className="max-lg:py-6 max-lg:text-xl max-lg:w-full max-lg:justify-start">
                  <Link to={item.url}>
                     {item.title}
                  </Link>
               </Button>
            </li>
         ))}

         <div className="flex gap-6 max-lg:mt-4">
            {/* NOTE: Hide the theme menu on small screens */}
            <ThemeMenu className="max-lg:hidden" />
         </div>
      </ul>
   )
}