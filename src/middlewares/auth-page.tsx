import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { setUser } from "@/services/slices/user-slice";
import { routeConstants } from "@/constants/route-const";
import { jwtDecode } from "jwt-decode";

type TAuthPageProps = {
   children: React.ReactNode;
};

const AuthPage: React.FC<TAuthPageProps> = ({ children }) => {
   const location = useLocation();
   const dispatch = useDispatch();
   const { user } = useSelector((state: RootState) => state.userSlice);
   const [isSessionValid, setIsSessionValid] = React.useState<boolean | null>(null);

   React.useLayoutEffect(() => {
      if (!user?.token) {
         setIsSessionValid(false);  // No token, session is invalid
         return;
      }

      try {
         const decodedToken = jwtDecode<{ exp: number }>(user.token);
         const dateNow = Date.now() / 1000;

         // Check if the token has expired
         if (decodedToken.exp && decodedToken.exp < dateNow) {
            dispatch(setUser(null)); // Clear session if the token has expired
            setIsSessionValid(false);
         } else {
            setIsSessionValid(true); // Token is valid
         }
      } catch (error) {
         console.error("Invalid token:", error);
         dispatch(setUser(null));
         setIsSessionValid(false);
      }
   }, [user, dispatch]);

   if (isSessionValid === null) {
      // Still checking token validity
      return null;  // or a loading indicator
   }

   if (isSessionValid === false) {
      // Invalid session, redirect to login
      return <Navigate to={routeConstants.login} replace state={{ from: location }} />;
   }

   // Session is valid, render the children (protected content)
   return <>{children}</>;
};

export default AuthPage;
