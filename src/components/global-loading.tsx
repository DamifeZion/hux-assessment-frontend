import { motion, Variants } from "framer-motion";
import { Logo } from "./logo";
import * as React from 'react';

type TGlobalLoading = {
   showLogo?: boolean;
}

const GlobalLoading: React.FC<TGlobalLoading> = ({ showLogo }) => {
   const slideAnimation: Variants = {
      initial: { x: "-70%" },
      animate: {
         x: ["-70%", "200%"],
         transition: {
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
         },
      },
   };

   return (
      <div className="flex flex-col items-center justify-center flex-1 gap-4">
         {showLogo && (
            <Logo className="animate-pulse" />
         )}

         <div className="h-2.5 p-0.5 rounded-full w-52 bg-[hsl(0,0%,98%)] overflow-hidden">
            <motion.span
               variants={slideAnimation}
               initial="initial"
               animate="animate"
               className="w-20 h-full rounded-full bg-[hsl(0,0%,58%)]"
            />
         </div>
      </div>
   );
};

export default GlobalLoading;