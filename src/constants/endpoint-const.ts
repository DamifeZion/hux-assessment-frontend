export const ENDPOINT = {
   LOGIN: "/user/login",
   SIGN_UP: "/user/register",
   VERIFY_EMAIL: "/user/activate-account",
   FORGOT_PASSWORD: "/user/forgot-password",
   RESET_PASSWORD: "/user/reset_password/:token",

   /** Contacts */
   GET_CONTACTS: "/contact",
   ADD_CONTACT: "/contact/add",
   /** Replace :id with the actual parameter in API endpoint */
   CONTACT_DETAILS: "/contact/:id",
   EDIT_CONTACT: "/contact/:id",
   DELETE_CONTACT: "/contact/:id",
};
