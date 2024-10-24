import { jwtDecode, JwtPayload } from "jwt-decode";

export const isJwtValid = (token: string | undefined): boolean => {
   if (!token) return false;
   try {
      const decoded = jwtDecode<JwtPayload>(token);
      const currentTime = Math.floor(Date.now() / 1000);
      return decoded.exp ? decoded.exp > currentTime : false;
   } catch (error) {
      console.error("Invalid token", error);
      return false;
   }
};
