import { routeConstants } from "@/constants/route-const";
import { RootState } from "@/services/store";
import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Typography from "./ui/typography";

export type TLogo = React.HTMLAttributes<HTMLHeadingElement>;

export const Logo: React.FC<TLogo> = ({ ...props }) => {
   const { user } = useSelector((state: RootState) => state.userSlice);
   const isAuthenticated = user?.token || false;

   return (
      <Link
         to={isAuthenticated ? routeConstants.contacts : routeConstants.home}
      >
         <Typography variant="h3" {...props}>
            Contactly
         </Typography>
      </Link>
   );
};
