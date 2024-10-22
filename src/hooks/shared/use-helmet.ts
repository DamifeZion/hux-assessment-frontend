import { appConstant } from "@/constants/app-const";
import { useEffect } from "react";

// Define the type for the meta tags object
interface MetaTags {
   name?: string;
   content: string;

   // For Open Graph or other tags that use "property" instead of "name"
   property?: string;
}

// Custom Hook to set document title and multiple meta tags
export const useSetHelmet = (title: string, metaTags?: MetaTags[]) => {
   useEffect(() => {
      if (title) {
         document.title = `${title} - ${appConstant.appName}`;
      }

      // Set or update each meta tag provided
      if (metaTags) {
         metaTags.forEach((metaTag) => {
            const { name, content, property } = metaTag;

            if (name) {
               // Handle meta tags with the "name" attribute
               let metaElement = document.querySelector(`meta[name="${name}"]`);
               if (metaElement) {
                  metaElement.setAttribute("content", content);
               } else {
                  metaElement = document.createElement("meta");
                  metaElement.setAttribute("name", name);
                  metaElement.setAttribute("content", content);
                  document.head.appendChild(metaElement);
               }
            }

            if (property) {
               // Handle meta tags with the "property" attribute (like Open Graph tags)
               let metaElement = document.querySelector(
                  `meta[property="${property}"]`
               );
               if (metaElement) {
                  metaElement.setAttribute("content", content);
               } else {
                  metaElement = document.createElement("meta");
                  metaElement.setAttribute("property", property);
                  metaElement.setAttribute("content", content);
                  document.head.appendChild(metaElement);
               }
            }
         });
      }
   }, [title, metaTags]);
};
