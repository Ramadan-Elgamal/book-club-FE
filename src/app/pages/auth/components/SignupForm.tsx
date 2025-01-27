// import { yupResolver } from "@hookform/resolvers/yup";
// import { Button, Checkbox } from "@mantine/core";
// import "@mantine/dates/styles.css";
// import { useEffect, useState } from "react";
// import { FormProvider, useForm, UseFormReturn } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import { useSignupMutation } from "~/app/store/api/auth/authApi";
// import { UserSignupBody } from "~/app/store/types";
// import CountrySelector from "~/base/components/Form/CountrySelector";
// import DatePicker from "~/base/components/Form/DatePickerInput";
// import { PasswordInputField } from "~/base/components/Form/PasswordInputField";
// import { signupSchema } from "../Schema";
// import AuthTextInput from "./AuthTextInput";
// import EmailInput from "./EmailInput";

// export default function SignupForm() {
//   const [signup, { isLoading, isSuccess }] = useSignupMutation();

//   const [code, setCode] = useState("");
//   const navigate = useNavigate();

//   const methods: UseFormReturn<UserSignupBody> = useForm<UserSignupBody>({
//     mode: "all",
//     resolver: yupResolver(signupSchema),
//   });

//   const {
//     register,
//     handleSubmit,
//     watch,
//     setValue,
//     trigger,
//     formState: { errors, isValid },
//   } = methods;

//   const onSubmit = async (data: UserSignupBody) => {
//     signup({
//       ...data,
//       emailCode: code,
//       phoneCode: "",
//     });
//   };

//   useEffect(() => {
//     if (isSuccess) {
//       navigate("/sign-in");
//     }
//   }, [isSuccess, navigate]);

//   return (
//     <form
//       className="flex h-full w-full flex-col justify-between pt-4 text-blue-950 lg:min-w-96"
//       onSubmit={handleSubmit(onSubmit)}
//     >
//       <h1 className="font-semibold md:text-xl">Registration</h1>
//       <FormProvider {...methods}>
//         <div className="flex gap-6">
//           <AuthTextInput
//             name="firstname"
//             label="First Name"
//             placeholder="Enter first name"
//             required
//           />
//           <AuthTextInput
//             name="lastname"
//             label="Last Name"
//             placeholder="Enter last name"
//             required
//           />
//         </div>
//         <AuthTextInput
//           name="phone"
//           label="Phone"
//           type="number"
//           placeholder="Enter your phone number"
//           required
//         />
//         <EmailInput code={code} setCode={setCode} />
//         <PasswordInputField
//           placeholder="Enter your password"
//           label="Password"
//           name="password"
//           error={errors.password?.message}
//           register={register}
//           watch={watch}
//         />
//         <PasswordInputField
//           placeholder="Confirm your password"
//           label="Confirm Password"
//           name="confirmPassword"
//           error={errors.confirmPassword?.message}
//           register={register}
//           watch={watch}
//         />
//         <DatePicker
//           label="Date of birth"
//           placeholder="Pick a date"
//           value={watch("dob")}
//           onChange={(date) => {
//             setValue("dob", date);
//             trigger("dob");
//           }}
//           error={errors.dob?.message as string}
//         />
//         <div className="flex flex-col gap-2">
//           <CountrySelector />
//           <Checkbox
//             label="Our terms and conditions"
//             {...register("acceptTerms")}
//             error={errors.acceptTerms?.message}
//             size="xs"
//             radius={"sm"}
//             classNames={{
//               label: "!text-blue-950 !font-semibold !pl-1",
//               input: "!border-blue-950",
//             }}
//           />
//         </div>
//       </FormProvider>
//       <div className="flex justify-end gap-4">
//         <Link to="/sign-in" className="block md:hidden">
//           <Button variant="outline">Login</Button>
//         </Link>
//         <Button
//           disabled={isLoading || !isValid}
//           loading={isLoading}
//           aria-label="Submit"
//           type="submit"
//         >
//           Submit
//         </Button>
//       </div>
//     </form>
//   );
// }
