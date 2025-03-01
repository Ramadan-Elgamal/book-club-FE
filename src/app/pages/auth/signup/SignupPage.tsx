import AuthForm from "../components/AuthForm";
import { Image } from '@mantine/core';
import register from "~/assets/imgs/register.png";
import BackgroundShapes from "../components/BackgroundShapes";


export default function SignupPage() {
  return (
    // <AuthLayout image={logo} type={FormType.SIGNUP}>
      <div className="relative w-full mx-auto max-h-[100vh] px-28 flex justify-between">
        <BackgroundShapes/>
        <div className="w-1/2 p-6 flex justify-center">
          <Image src={register} className="!rounded-2xl" alt="register-image" fit="cover"/>
        </div>
        <AuthForm isSigninOrUp="up"/>
      </div>

    // </AuthLayout>
  );
}
