import { useLocation } from "react-router-dom";

type TIsRouteActive = (path: string, matchSubroute?: boolean) => boolean;

export const useIsRouteActive = () => {
   const location = useLocation();

   const isRouteActive: TIsRouteActive = (path, matchSubroute = false) => {
      // If we are matching subroutes, check if the path is a prefix of the current location
      if (matchSubroute) {
         return location.pathname.startsWith(path);
      }
      // Exact match: Only mark dashboard active when exactly on `/dashboard`
      return location.pathname === path;
   };

   return isRouteActive;
};
