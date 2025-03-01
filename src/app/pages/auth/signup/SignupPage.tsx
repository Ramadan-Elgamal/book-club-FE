import { Image } from "@mantine/core";
import register from "~/assets/imgs/register.png";
import logo from "~/assets/imgs/circleLogo.png";
import BackgroundShapes from "../components/BackgroundShapes";
import SignupForm from "../components/SignupForm";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  return (
    // <AuthLayout image={logo} type={FormType.SIGNUP}>
    <div className="relative mx-auto flex max-h-screen w-full justify-between px-28">
      <BackgroundShapes />
      <div className="flex w-1/2 justify-center p-20">
        <Image
          src={register}
          className="!rounded-2xl"
          alt="register-image"
          fit="contain"
        />
      </div>
      <SignupForm isSigninOrUp="up" />
      <div className="flex cursor-pointer flex-col items-start pt-28">
        <Image src={logo} onClick={() => navigate("/")} />
      </div>
    </div>

    // </AuthLayout>
  );
}
