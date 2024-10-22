import { useLogin } from "@/hooks/auth/use-login";
import { useSetHelmet } from "@/hooks/shared/use-helmet";




const Login = () => {
   useSetHelmet("Sign in", [
      {
         name: "description",
         content: "Sign in to your account to continue",
      },
   ]);

   const { form, onSubmit, showPassword, handlePasswordToggle, isLoading } = useLogin();


   return (
      <main className="flex items-center justify-center">
         <span 
            className="absolute top-0 left-0 size-full -z-[1] bg-[url(/auth/gradient-bg.jpg)] bg-center bg-no-repeat bg-cover" 
         />

         
      </main>
   );
};

export default Login;
