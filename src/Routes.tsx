import * as React from 'react';
import { Routes as Router, Route, Navigate } from 'react-router-dom'
import { routeConstants } from './constants/route-const';
import GlobalLoading from './components/global-loading';
import useScrollToTop from '@/hooks/shared/use-scroll-to-top';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/navbar/navbar';
import AuthPage from './middlewares/auth-page';
import GuestPage from './middlewares/guest-page';


/** Lazy Imports  */
const NotFound = React.lazy(() => import("@/pages/not-found"));

/** Un-Auth Imports */
const Login = React.lazy(() => import("@/pages/auth/login"))
const SignUp = React.lazy(() => import("@/pages/auth/signup"))
const ForgotPassword = React.lazy(() => import("@/pages/auth/forgot-password"))
const OtpVerification = React.lazy(() => import("@/pages/auth/otp-verification"))
const ResetPassword = React.lazy(() => import("@/pages/auth/reset-password"))

/** Auth Imports */
const Contacts = React.lazy(() => import("@/pages/contact/contacts"));
const AddContact = React.lazy(() => import("@/pages/contact/add-contact"));
const ContactDetails = React.lazy(() => import("@/pages/contact/contact-details"));
const EditContact = React.lazy(() => import("@/pages/contact/edit-contact"));


const Routes = () => {
   useScrollToTop();

   return (
      <AnimatePresence mode='sync'>
         <main className='flex flex-col min-h-screen'>
            <React.Suspense fallback={<GlobalLoading showLogo />}>
               <Navbar />

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
                     element={
                        <GuestPage>
                           <Login />
                        </GuestPage>
                     }
                  />

                  <Route
                     path={routeConstants.signup}
                     element={
                        <GuestPage>
                           <SignUp />
                        </GuestPage>
                     }
                  />

                  <Route
                     path={routeConstants.forgotPassword}
                     element={
                        <GuestPage>
                           <ForgotPassword />
                        </GuestPage>
                     }
                  />

                  <Route
                     path={routeConstants.verifyEmail}
                     element={
                        <GuestPage>
                           <OtpVerification />
                        </GuestPage>
                     }
                  />

                  <Route
                     path={routeConstants.resetPassword}
                     element={
                        <GuestPage>
                           <ResetPassword />
                        </GuestPage>
                     }
                  />

                  {/* Auth Pages */}
                  <Route
                     path={routeConstants.dashboard}
                     element={
                        <AuthPage>
                           <Contacts />
                        </AuthPage>
                     }
                  />

                  <Route
                     path={routeConstants.addContact}
                     element={
                        <AuthPage>
                           <AddContact />
                        </AuthPage>
                     }
                  />


                  <Route
                     path={routeConstants.editContact}
                     element={
                        <AuthPage>
                           <EditContact />
                        </AuthPage>
                     }
                  />

                  <Route
                     path={routeConstants.contactDetails}
                     element={
                        <AuthPage>
                           <ContactDetails />
                        </AuthPage>
                     }
                  />
               </Router>
            </React.Suspense>
         </main>
      </AnimatePresence>
   )
}

export default Routes;