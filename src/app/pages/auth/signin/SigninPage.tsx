import AuthLayout from "../components/AuthLayout";
// import SigninForm from "../components/SigninForm";
import signinImage from "assets/imgs/signinLogo.svg";
import { FormType } from "../enum";
export default function LoginPage() {
  return (
    <AuthLayout image={signinImage} type={FormType.SIGNIN}>
      {/* <SigninForm /> */}
      <div></div>
    </AuthLayout>
  );
}
