import AuthForm from "../components/AuthForm";
import { Image } from '@mantine/core';
import register from "~/assets/imgs/register.png";


export default function SignupPage() {
  return (
    // <AuthLayout image={logo} type={FormType.SIGNUP}>
      <div className="w-full max-h-screen px-12  flex justify-between">
        <div className="w-1/2 h-full px-18  flex justify-center">
          <Image src={register} alt="register-image" fit="cover"/>
        </div>
        <AuthForm isSigninOrUp="up"/>
      </div>

    // </AuthLayout>
  );
}
