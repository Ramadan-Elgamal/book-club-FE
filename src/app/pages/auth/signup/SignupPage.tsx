import AuthLayout from "../components/AuthLayout";
import logo from "assets/imgs/logo.svg";
// import SignupForm from "../components/SignupForm";
import { FormType } from "../enum";

export default function SignupPage() {
  return (
    <AuthLayout image={logo} type={FormType.SIGNUP}>
      {/* <SignupForm /> */}
      <div></div>
    </AuthLayout>
  );
}
