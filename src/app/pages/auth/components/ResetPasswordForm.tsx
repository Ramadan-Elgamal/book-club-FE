// import { Button } from "@mantine/core";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useResetPasswordMutation } from "~/app/store/api/auth/authApi";
// import { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { restPasswordSchema } from "../Schema";
// import { PasswordInputField } from "~/base/components/Form/PasswordInputField";

// type ResetPasswordFormProps = {
//   token: string;
// };

// export default function ResetPasswordForm({
//   token,
// }: Readonly<ResetPasswordFormProps>) {
//   const [resetPassword, { isLoading, isSuccess }] = useResetPasswordMutation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isSuccess) {
//       navigate("/sign-in");
//     }
//   }, [isSuccess, navigate]);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(restPasswordSchema),
//   });

//   return (
//     <form
//       className="flex max-h-full w-full flex-col justify-between gap-4"
//       onSubmit={handleSubmit(({ password }) => {
//         resetPassword({
//           resetToken: token,
//           password,
//         });
//       })}
//     >
//       <h1 className="text-xl font-semibold text-blue-950">Set new password</h1>
//       <div className="flex flex-col gap-8">
//         <PasswordInputField
//           placeholder="New password"
//           label="New password"
//           name="password"
//           register={register}
//           watch={watch}
//           error={errors.password?.message ?? ""}
//         />
//         <PasswordInputField
//           placeholder="Confirm password"
//           label="Confirm Password"
//           name="confirmPassword"
//           register={register}
//           watch={watch}
//           error={errors.confirmPassword?.message ?? ""}
//         />
//       </div>
//       <div className="flex items-center justify-end gap-4">
//         <Link to="/sign-in" className="block md:hidden">
//           <Button variant="outline">Log in</Button>
//         </Link>
//         <Button loading={isLoading} disabled={isLoading} type="submit">
//           Reset password
//         </Button>
//       </div>
//     </form>
//   );
// }
