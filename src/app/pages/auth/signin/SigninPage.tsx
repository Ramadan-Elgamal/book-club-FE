// import AuthLayout from "../components/AuthLayout";
import AuthForm from "../components/AuthForm";
import { Image } from '@mantine/core';
import BackgroundShapes from "../components/BackgroundShapes";
import login from "~/assets/imgs/login.png";

// import { FormType } from "../enum";
export default function LoginPage() {
  return (
    // <AuthLayout image={""} type={FormType.SIGNIN}>
    <div className="relative w-full mx-auto max-h-[100vh] px-32 flex justify-between">
    <BackgroundShapes/>
    <div className=" w-1/2 p-8 flex justify-center">
      <Image src={login} className="!rounded-2xl" alt="register-image" fit="cover"/>
    </div>
    <AuthForm isSigninOrUp="in"/>
  </div>
    // </AuthLayout>
  );
}
