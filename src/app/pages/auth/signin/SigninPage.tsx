// import AuthLayout from "../components/AuthLayout";
import SigninForm from "../components/SigninForm";
import login from "~/assets/imgs/login.png";
// import { FormType } from "../enum";
export default function LoginPage() {
  return (
    // <AuthLayout image={""} type={FormType.SIGNIN}>
    <div className="contaienr mx-auto flex justify-between px-20">
      <img src={login} alt="login-image" width={400} height={525} />
      <SigninForm />
    </div>
    // </AuthLayout>
  );
}
