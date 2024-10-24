import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
   HTMLInputElement,
   React.InputHTMLAttributes<HTMLInputElement> & { isNumeric?: boolean } // Add isNumeric prop
>(({ className, type, isNumeric, ...props }, ref) => {
   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      // Allow certain keys if isNumeric is true
      if (isNumeric) {
         const allowedKeys = [
            "Backspace",
            "Tab",
            "ArrowLeft",
            "ArrowRight",
            "Enter",
            ".",
         ];
         const key = event.key;

         if (!allowedKeys.includes(key) && !/[\d+]/.test(key)) {
            event.preventDefault();
         }
      }
   };

   return (
      <input
         type={type}
         className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
         )}
         ref={ref}
         {...props}
         onKeyDown={isNumeric ? handleKeyDown : props.onKeyDown} // Attach the handler conditionally
      />
   );
});
Input.displayName = "Input";

export { Input };