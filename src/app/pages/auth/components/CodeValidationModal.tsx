// import { Button, Loader, Modal } from "@mantine/core";
// import { useMediaQuery } from "@mantine/hooks";
// import { useEffect, useState } from "react";
// import VerificationInput from "react-verification-input";
// import { useSignupVerificationMutation } from "~/app/store/api/auth/authApi";

// type Props = {
//   email: string;
//   code: string;
//   setCode: React.Dispatch<React.SetStateAction<string>>;
//   opened: boolean;
//   close: () => void;
//   isSuccess: boolean;
//   setIsVerified: React.Dispatch<React.SetStateAction<boolean>>;
// };

// export default function CodeValidationModal({
//   email,
//   code,
//   setCode,
//   opened,
//   close,
//   isSuccess,
//   setIsVerified,
// }: Readonly<Props>) {
//   const [codeLength, setCodeLength] = useState(0);
//   const isMobile = useMediaQuery("(max-width: 425px)");

//   const [
//     SignupVerification,
//     {
//       isLoading: isLoadingSignup,
//       isError: isErrorSignup,
//       isSuccess: isSuccessSignup,
//     },
//   ] = useSignupVerificationMutation();

//   useEffect(() => {
//     if (isSuccessSignup) {
//       close();
//       setIsVerified(true);
//     }
//   }, [isSuccessSignup, close, setIsVerified]);

//   return (
//     <Modal
//       onClose={close}
//       opened={opened && isSuccess}
//       centered
//       data-autofocus
//       fullScreen={isMobile}
//       transitionProps={{
//         transition: "fade",
//         duration: 300,
//         timingFunction: "ease-in-out",
//       }}
//       overlayProps={{
//         backgroundOpacity: 0.55,
//         blur: 3,
//       }}
//       size="auto"
//       withCloseButton={false}
//     >
//       <div className="flex max-w-80 flex-col gap-4 px-3 text-xl font-semibold text-blue-950">
//         <h3 className="font-bold">Verify Email</h3>
//         <p className="text-wrap text-base">
//           We have sent a verification code to your email. Please enter the code
//           below.
//         </p>
//         <VerificationInput
//           inputProps={{
//             autoComplete: "one-time-code",
//             inputMode: "numeric",
//           }}
//           validChars="0-9"
//           length={6}
//           autoFocus
//           onChange={(e) => setCodeLength(e.length)}
//           onComplete={(e) => setCode(e)}
//           placeholder="*"
//           classNames={{
//             container: "MovingLabel max-w-[300px]",
//             characterSelected: `${isSuccessSignup ? "!border-green-300 !text-green-600" : ""} ${isErrorSignup ? "!border-red-300 !text-red-600" : "!border-blue-950 !text-blue-950"} !outline-none ring-transparent ring-0`,
//             character: "ring-transparent rounded-md",
//             characterInactive: "bg-transparent",
//           }}
//         />
//         <div className="flex justify-end">
//           {isLoadingSignup ? (
//             <Loader />
//           ) : (
//             <Button
//               aria-label="Verify"
//               disabled={codeLength !== 6 || isLoadingSignup}
//               loading={isLoadingSignup}
//               onClick={() => SignupVerification({ email, code })}
//               className={isErrorSignup ? "!bg-red-600" : ""}
//             >
//               {isErrorSignup ? "Try again" : "Verify"}
//             </Button>
//           )}
//         </div>
//       </div>
//     </Modal>
//   );
// }
