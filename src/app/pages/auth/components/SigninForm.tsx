// import { yupResolver } from "@hookform/resolvers/yup";
// import {
//   Button,
//   Checkbox,
//   Image,
//   PasswordInput,
//   TextInput,
// } from "@mantine/core";
// import Eye from "assets/icons/Eye.svg";
// import EyeSlash from "assets/icons/EyeSlash.svg";
// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { Link, redirect } from "react-router-dom";
// import { useSigninMutation } from "~/app/store/api/auth/authApi";
// import { signinSchema } from "../Schema";

// const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) =>
//   reveal ? <Image src={EyeSlash} /> : <Image src={Eye} />;

// export default function SigninForm() {
//   const [signin, { isLoading, isSuccess }] = useSigninMutation();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(signinSchema),
//   });

//   useEffect(() => {
//     if (isSuccess) redirect("/");
//   }, [isSuccess]);

//   return (
//     <form
//       className="flex max-h-full w-full flex-col justify-between gap-4"
//       onSubmit={handleSubmit(signin)}
//     >
//       <h1 className="text-xl font-semibold text-blue-950">Login</h1>
//       <div className="space-y-2">
//         <div className="relative">
//           <TextInput
//             label="Email"
//             required
//             type="email"
//             placeholder="Email@Email.com"
//             {...register("email")}
//             error={errors.email?.message}
//           />
//         </div>
//       </div>
//       <div className="space-y-2">
//         <PasswordInput
//           label="Password"
//           required
//           placeholder="**********"
//           {...register("password")}
//           error={errors.password?.message}
//           visibilityToggleIcon={VisibilityToggleIcon}
//         />
//       </div>

//       <div className="flex justify-between">
//         <Checkbox label="Remember me" {...register("remember", {})} />
//         <Link
//           to="/forgot-password"
//           className="text-sm font-medium text-blue-950"
//         >
//           Forgot Password!
//         </Link>
//       </div>
//       <div className="flex items-center justify-end gap-4">
//         <Link to="/sign-up" className="block md:hidden">
//           <Button variant="outline">Register</Button>
//         </Link>
//         <Button loading={isLoading} disabled={isLoading} type="submit">
//           Login
//         </Button>
//       </div>
//     </form>
//   );
// }
