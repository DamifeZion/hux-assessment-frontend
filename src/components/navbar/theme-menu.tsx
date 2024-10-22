import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";


type ThemeMenuProp = {
   className?: string
}

export const ThemeMenu = ({ className }: ThemeMenuProp) => {
   const { theme, setTheme } = useTheme()

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className={cn("lg:ml-3", className)}>
               <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
               <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
               <span className="sr-only">Toggle theme</span>
            </Button>
         </DropdownMenuTrigger>

         <DropdownMenuContent align="end" className="w-full sm:w-fit">
            <DropdownMenuLabel>
               Appearance
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuCheckboxItem
               checked={theme === "light"}
               onClick={() => setTheme('light')}
            >
               Light
            </DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem
               checked={theme === "dark"}
               onClick={() => setTheme('dark')}
            >
               Dark
            </DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem
               checked={theme === "system"}
               onClick={() => setTheme('system')}
            >
               System
            </DropdownMenuCheckboxItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}