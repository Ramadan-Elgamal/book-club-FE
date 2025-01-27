// import { TextInput, Button } from "@mantine/core";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForgotPasswordMutation } from "~/app/store/api/auth/authApi";
// import { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { forgotPasswordSchema } from "../Schema";

// export default function ForgotPasswordForm() {
//   const [forgotPassword, { isLoading, isSuccess }] =
//     useForgotPasswordMutation();
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(forgotPasswordSchema),
//   });

//   useEffect(() => {
//     if (isSuccess) {
//       navigate("/check-email");
//     }
//   }, [isSuccess, navigate]);

//   return (
//     <form
//       className="flex max-h-full w-full flex-col justify-between gap-4"
//       onSubmit={handleSubmit(forgotPassword)}
//     >
//       <h1 className="text-xl font-semibold text-blue-950">Forgot Password</h1>
//       <div className="space-y-2">
//         <div className="relative">
//           <TextInput
//             type="email"
//             label="Email"
//             required
//             placeholder="Email@Email.com"
//             {...register("email", {
//               required: "Email is required",
//             })}
//             error={errors.email?.message}
//           />
//         </div>
//       </div>

//       <div className="flex items-center justify-end gap-4">
//         <Link to="/sign-up" className="block md:hidden">
//           <Button variant="outline">Register</Button>
//         </Link>
//         <Button loading={isLoading} disabled={isLoading} type="submit">
//           Send link
//         </Button>
//       </div>
//     </form>
//   );
// }
