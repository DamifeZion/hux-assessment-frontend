import * as React from 'react';
import { Routes as Router, Route, Navigate } from 'react-router-dom'
import { routeConstants } from './constants/route-const';
import GlobalLoading from './components/global-loading';
import useScrollToTop from '@/hooks/shared/use-scroll-to-top';
import { AnimatePresence } from 'framer-motion';
// import RequireAuth from './middlewares/require-auth';


/** Lazy Imports  */
const NotFound = React.lazy(() => import("@/pages/not-found"));

/** Un-Auth Imports */
const Login = React.lazy(() => import("@/pages/auth/login"))
const SignUp = React.lazy(() => import("@/pages/auth/signup"))

/** Auth Imports */
const Contacts = React.lazy(() => import("@/pages/contact/contacts"));
const ContactDetails = React.lazy(() => import("@/pages/contact/contact-details"));


const Routes = () => {
   useScrollToTop();

   return (
      <AnimatePresence mode='sync'>
         <main className='flex flex-col min-h-screen'>
            <React.Suspense fallback={<GlobalLoading showLogo />}>
               <Router>
                  <Route
                     path='*'
                     element={<NotFound />}
                  />

                  <Route
                     index
                     element={<Navigate to={routeConstants.home} />}
                  />

                  <Route
                     path={routeConstants.login}
                     element={<Login />}
                  />

                  <Route
                     path={routeConstants.signup}
                     element={<SignUp />}
                  />

                
                  {/* Auth Pages */}
                  <Route
                     path={routeConstants.contacts}
                     element={
                        // <RequireAuth>
                           <Contacts />
                        // </RequireAuth>
                     }
                  />

                  <Route
                     path={routeConstants.contactDetails}
                     element={
                        // <RequireAuth>
                           <ContactDetails />
                        // </RequireAuth>
                     }
                  />
               </Router>
            </React.Suspense>
         </main>
      </AnimatePresence>
   )
}

export default Routes;