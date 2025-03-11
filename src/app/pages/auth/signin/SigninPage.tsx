<<<<<<< Updated upstream
// import AuthLayout from "../components/AuthLayout";
import AuthForm from "../components/AuthForm";
import { Image } from '@mantine/core';
=======
import { useNavigate } from "react-router-dom";
import { Image } from "@mantine/core";
>>>>>>> Stashed changes
import BackgroundShapes from "../components/BackgroundShapes";
import login from "~/assets/imgs/login.png";

export default function LoginPage() {
  return (
<<<<<<< Updated upstream
    // <AuthLayout image={""} type={FormType.SIGNIN}>
    <div className="relative w-full mx-auto max-h-[100vh] px-28 flex justify-between">
    <BackgroundShapes/>
    <div className=" w-1/2 p-6 flex justify-center">
      <Image src={login} className="!rounded-2xl" alt="register-image" fit="cover"/>
    </div>
    <AuthForm isSigninOrUp="in"/>
  </div>
    // </AuthLayout>
=======
    <div className="relative mx-auto flex h-screen w-full justify-between px-4 sm:px-20 md:px-28 overflow-hidden">
      <BackgroundShapes />

      {/* Logo (Hidden on Mobile) */}
      <div className="hidden md:flex cursor-pointer absolute top-4 right-4 z-10">
        <Image 
          src={logo} 
          onClick={() => navigate("/")}
          className="w-16 h-16"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row w-full justify-between mt-20 md:mt-0">
        {/* Image Section (Visible on md and larger) */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center p-10 md:p-16">
          <Image
            src={login}
            className="!rounded-2xl h-auto max-h-[350px] md:max-h-[450px] w-full"
            alt="login-image"
            fit="contain"
          />
        </div>

        {/* Form Section (Full Width on Mobile) */}
        <div className="w-full md:w-1/2 flex items-center">
          <SigninForm isSigninOrUp="in" />
        </div>
      </div>
    </div>
>>>>>>> Stashed changes
  );
}
