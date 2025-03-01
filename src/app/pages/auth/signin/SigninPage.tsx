// import AuthLayout from "../components/AuthLayout";
import { useNavigate } from "react-router-dom";
import { Image } from "@mantine/core";
import BackgroundShapes from "../components/BackgroundShapes";
import login from "~/assets/imgs/login.png";
import SigninForm from "../components/SigninForm";
import logo from "~/assets/imgs/circleLogo.png";

// import { FormType } from "../enum";
export default function LoginPage() {
  const navigate = useNavigate();
  return (
    // <AuthLayout image={""} type={FormType.SIGNIN}>
    <div className="relative mx-auto flex max-h-[100vh] w-full justify-between px-28">
      <BackgroundShapes />
      <div className="flex w-1/2 justify-center p-20">
        <Image
          src={login}
          className="!rounded-2xl"
          alt="register-image"
          fit="contain"
        />
      </div>
      <SigninForm isSigninOrUp="in" />
      <div className="flex cursor-pointer flex-col items-start pt-28">
        <Image src={logo} onClick={() => navigate("/")} />
      </div>
    </div>
    // </AuthLayout>
  );
}
