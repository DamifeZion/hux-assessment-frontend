export const routeConstants = {
   /** Un-Authenticated Routes */
   login: "/login",
   signup: "/signup",
   forgotPassword: "/forgot-password",
   verifyEmail: "/email-verification",
   resetPassword: "/:token/reset-password",

   home: "/",

   /** Authenticated Routes */
   dashboard: "/contact",
   addContact: "/contact/add",
   contactDetails: "/contact/details/:id",
};
