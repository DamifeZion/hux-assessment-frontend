import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { setUser } from "@/services/slices/user-slice";
import { routeConstants } from "@/constants/route-const";
import { jwtDecode } from "jwt-decode";
import GlobalLoading from "@/components/global-loading";

type TAuthPageProps = {
   children: React.ReactNode;
};

const AuthPage: React.FC<TAuthPageProps> = ({ children }) => {
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

   // Redirect if session is invalid
   React.useEffect(() => {
      if (isSessionValid === false) {
         window.location.replace(routeConstants.login)
      }
   }, [isSessionValid]);

   if (isSessionValid === null) {
      return <GlobalLoading />;
   }
   // Session is valid, render the children (protected content)
   return <>{children}</>;
};

export default AuthPage;
