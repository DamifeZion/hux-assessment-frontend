import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes.tsx";
import { Provider } from "react-redux";
import store, { persistor } from "./services/store";
import { PersistGate } from "redux-persist/integration/react";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-provider.tsx";

function App() {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
               <BrowserRouter>
                  <TooltipProvider delayDuration={100}>
                     <Routes />
                  </TooltipProvider>

                  <Toaster
                     position="top-center"
                     closeButton
                     richColors
                     duration={6000}
                  />
               </BrowserRouter>
            </ThemeProvider>
         </PersistGate>
      </Provider>
   );
}

export default App;
