// import AuthLayout from "../components/AuthLayout";
import AuthForm from "../components/AuthForm";
import { Image } from '@mantine/core';
import login from "~/assets/imgs/login.png";

// import { FormType } from "../enum";
export default function LoginPage() {
  return (
    // <AuthLayout image={""} type={FormType.SIGNIN}>
    <div className="w-full max-h-screen px-12  flex justify-between">
    <div className="w-1/2 h-full px-18  flex justify-center">
      <Image src={login} alt="register-image" fit="cover"/>
    </div>
    <AuthForm isSigninOrUp="in"/>
  </div>
    // </AuthLayout>
  );
}
