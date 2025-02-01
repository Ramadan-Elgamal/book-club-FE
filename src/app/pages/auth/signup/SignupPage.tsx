import SignupForm from "../components/SignupForm";
import register from "~/assets/imgs/register.png";


export default function SignupPage() {
  return (
    // <AuthLayout image={logo} type={FormType.SIGNUP}>
      <div className="container mx-auto flex justify-between px-20">
        <img src={register} alt="register-image" width={400} height={525} />
        <SignupForm />
      </div>

    // </AuthLayout>
  );
}
