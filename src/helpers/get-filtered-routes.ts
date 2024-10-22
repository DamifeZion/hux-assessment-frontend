import { navbarConst, TRoutes } from "@/constants/navbar-const";

/**
 * Utility function to get routes.
 * @param {boolean} buttonsOnly - If true, returns only button routes, otherwise returns non-button routes.
 * @param {boolean} isAuthenticated - If true, returns routes for authenticated users, otherwise returns routes for unauthenticated users.
 * @returns {TRoutes[]} - An array of filtered routes.
 */
export const getFilteredRoutes = (
   buttonsOnly: boolean = false,
   isAuthenticated: boolean
): Array<TRoutes> => {
   return navbarConst.ROUTES.filter((route) => {
      // Filter by buttons or non-buttons
      const buttonFilter = buttonsOnly ? route.isButton : !route.isButton;

      // Filter by authentication state
      const authFilter = isAuthenticated
         ? route.isAuthRoute
         : !route.isAuthRoute;
      return buttonFilter && authFilter;
   });
};
