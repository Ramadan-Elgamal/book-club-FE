import { Image } from "@mantine/core";
import register from "~/assets/imgs/register.png";
import logo from "~/assets/imgs/circleLogo.png";
import BackgroundShapes from "../components/BackgroundShapes";
import SignupForm from "../components/SignupForm";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col md:flex-row justify-between px-6 md:px-16 lg:px-28 overflow-hidden">
      {/* Background Shapes */}
      <BackgroundShapes />

      {/* Logo (Hidden on Mobile) */}
      <div className="hidden sm:flex cursor-pointer absolute top-4 right-4 z-10">
        <Image
          src={logo}
          onClick={() => navigate("/")}
          className="w-14 md:w-16 h-14 md:h-16"
          alt="Company Logo"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row w-full mt-12 md:mt-0 items-center">
        {/* Image Section (Hidden on Mobile) */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center p-4 md:p-12">
          <Image
            src={register}
            className="!rounded-2xl h-auto max-h-[300px] md:max-h-[450px] lg:max-h-[500px] w-full"
            alt="register-image"
            fit="contain"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-8 lg:px-12">
          <SignupForm isSigninOrUp="up" />
        </div>
      </div>
    </div>
  );
}
