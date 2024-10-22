import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { setUser } from "@/services/slices/user-slice";
import { routeConstants } from "@/constants/route-const";

type TRequireAuthProps = {
   children: React.ReactNode;
};

const RequireAuth: React.FC<TRequireAuthProps> = ({ children }) => {
   const location = useLocation();
   const dispatch = useDispatch();
   const { user } = useSelector((state: RootState) => state.userSlice);

   const clearSessionRedirect = () => {
      dispatch(setUser(null));
      return (
         <Navigate
            to={routeConstants.login}
            replace
            state={{ from: location }}
         />
      );
   };

   if (!user?.token) {
      return clearSessionRedirect();
   }

   try {
      const decodedToken = jwtDecode(user.token);
      const dateNow = Date.now() / 1000;

      if (decodedToken.exp && decodedToken.exp < dateNow) {
         return clearSessionRedirect();
      }
   } catch (error) {
      console.error("Invalid token: ", error);
      return clearSessionRedirect();
   }

   // If everything user is authenticated, return children
   return children;
};

export default RequireAuth;