import { routeConstants } from "./route-const";

export type TRoutes = {
   url: string;
   title: string;
   isButton?: boolean;
   isAuthRoute: boolean;
};

const ROUTES: Array<TRoutes> = [
   {
      title: "Home",
      url: routeConstants.home,
      isButton: false,
      isAuthRoute: false,
   },
   {
      title: "Contacts",
      url: routeConstants.dashboard,
      isButton: false,
      isAuthRoute: true,
   },
   {
      title: "Login",
      url: routeConstants.login,
      isButton: true,
      isAuthRoute: false,
   },
   {
      title: "Sign Up",
      url: routeConstants.signup,
      isButton: true,
      isAuthRoute: false,
   },
];

export const navbarConst = {
   ROUTES,
};
