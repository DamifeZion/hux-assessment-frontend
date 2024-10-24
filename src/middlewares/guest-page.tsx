import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "@/services/store";
import { routeConstants } from "@/constants/route-const";
import { useSelector } from "react-redux";

type TGuestPageProps = {
   children: React.ReactNode;
};

const GuestPage: React.FC<TGuestPageProps> = ({ children }) => {
   const location = useLocation();
   const { user } = useSelector((state: RootState) => state.userSlice);
   // If the user is authenticated, redirect to the dashboard
   if (user?.token) {
      return <Navigate
         to={routeConstants.dashboard}
         replace
         state={{ from: location }}
      />;
   }

   // If the user is not authenticated, render the guest page (login, signup, etc.)
   return children;
};

export default GuestPage;
