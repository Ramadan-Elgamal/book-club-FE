// import { useState } from "react";
// import { Image, TextInput } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import { useFormContext } from "react-hook-form";

// import { UserSignupBody } from "~/app/store/types";
// import CodeValidationModal from "./CodeValidationModal";
// import { useInitSignupVerificationMutation } from "~/app/store/api/auth/authApi";
// import CheckIcon from "assets/icons/check.svg";

// interface EmailInputProps {
//   code: string;
//   setCode: React.Dispatch<React.SetStateAction<string>>;
// }
// export default function EmailInput({
//   code,
//   setCode,
// }: Readonly<EmailInputProps>) {
//   const {
//     register,
//     formState: { errors },
//   } = useFormContext<UserSignupBody>();
//   const [opened, { open, close }] = useDisclosure(false);
//   const [email, setEmail] = useState("");
//   const [isVerified, setIsVerified] = useState(false);

//   const [initSignupVerification, { isSuccess }] =
//     useInitSignupVerificationMutation();

//   const handleVerifyClick = () => {
//     if (!email) return;
//     open();
//     initSignupVerification({ email });
//   };

//   return (
//     <div>
//       <TextInput
//         label="Email "
//         required
//         type="email"
//         placeholder="example@Email.com"
//         {...register("email")}
//         error={errors.email?.message}
//         onChange={(e) => setEmail(e.target.value)}
//         rightSection={
//           isVerified ? (
//             <div className="h-5 w-5">
//               <Image src={CheckIcon} />
//             </div>
//           ) : (
//             <button
//               type="button"
//               onClick={handleVerifyClick}
//               disabled={!email}
//               className={`${!email ? "cursor-not-allowed text-gray-400" : ""} pr-4 text-xs font-bold text-blue-700`}
//             >
//               Verify
//             </button>
//           )
//         }
//       />
//       <CodeValidationModal
//         email={email}
//         close={close}
//         opened={opened}
//         code={code}
//         setCode={setCode}
//         isSuccess={isSuccess}
//         setIsVerified={setIsVerified}
//       />
//     </div>
//   );
// }
