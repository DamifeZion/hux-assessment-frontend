import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
   const [matches, setMatches] = useState<boolean>(false);

   useEffect(() => {
      const mediaQueryList = window.matchMedia(query);

      const handleChange = (event: MediaQueryListEvent) => {
         setMatches(event.matches);
      };

      // Initial check
      setMatches(mediaQueryList.matches);

      // Listen for changes
      mediaQueryList.addEventListener("change", handleChange);

      return () => {
         mediaQueryList.removeEventListener("change", handleChange);
      };
   }, [query]);

   return matches;
};
