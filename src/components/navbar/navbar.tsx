import { useMediaQuery } from "@/hooks/shared/use-media-query";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Logo } from "../logo";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import Typography from "../ui/typography";
import { BiMenuAltLeft } from "react-icons/bi";
import { NavMenu } from "./nav-menu";
import { ThemeMenu } from "./theme-menu";
import { navbarConst } from "@/constants/navbar-const";

type TNavbarProps = {
   className?: string;
};

export const Navbar: React.FC<TNavbarProps> = ({ className }) => {
   const isMobile = useMediaQuery("(max-width: 1023px)");
   const [openSheet, setOpenSheet] = React.useState(false);

   return (
      <nav className={cn("bg-background/80 backdrop-blur-xl border-b", className)}>
         <header className="container flex items-center h-16">
            <Logo />

            {!isMobile && <NavMenu />}

            {isMobile && (
               <div className="flex items-center gap-4 ml-auto">
                  <ThemeMenu />

                  <Sheet
                     open={openSheet}
                     onOpenChange={() => setOpenSheet((prev) => !prev)}
                  >
                     <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                           <BiMenuAltLeft className="size-6" />
                        </Button>
                     </SheetTrigger>

                     <SheetContent side="left" className="py-10">
                        <SheetHeader className="mb-6 *:sr-only [&_:first-child]:not-sr-only">
                           <SheetTitle>
                              <Logo className="!px-4 text-start" />

                              <Typography
                                 variant="p"
                                 affects="small"
                                 className="sr-only"
                              >
                                 Mobile menu
                              </Typography>
                           </SheetTitle>

                           <SheetDescription>
                              This menu includes the{" "}
                              {navbarConst.ROUTES.map((route) => (
                                 <span key={route.url}>
                                    {route.title.toLowerCase()}
                                    {", "}
                                 </span>
                              ))}
                              and also the theme toggle and action button to get
                              started
                           </SheetDescription>
                        </SheetHeader>

                        <NavMenu closeSheet={() => setOpenSheet(false)} />
                     </SheetContent>
                  </Sheet>
               </div>
            )}
         </header>
      </nav>
   );
};
