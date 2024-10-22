import { routeConstants } from "./route-const";

type TRoutes = {
   url: string;
   title: string;
   isBtn?: boolean;
}

const ROUTES: Array<TRoutes> = [
   {
      title: "Home",
      url: routeConstants.home,
   },
   {
      title: "Contacts",
      url: routeConstants.dashboard,
   },
   {
      title: "Login",
      url: routeConstants.login,
      isBtn: true,
   },
   {
      title: "Sign Up",
      url: routeConstants.signup,
      isBtn: true,
   },
]

export const navbarConst = {
   ROUTES,
}