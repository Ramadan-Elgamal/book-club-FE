// import { Button } from "@mantine/core";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "~/base/hooks";

// const LandingPage = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   return (
//     <div className="flex h-screen w-full items-center justify-center bg-home bg-cover bg-center bg-no-repeat">
//       <div className="absolute inset-0 bg-slate-100 bg-opacity-70"></div>
//       <div className="absolute flex h-64 w-[35rem] flex-col gap-6">
//         <h1 className="text-4xl font-bold text-blue-950">
//           Registering your company on our website is quick and
//         </h1>
//         <p className="text-xl font-normal text-blue-950">
//           Just fill out the online form with your business details, and you'll
//           be set up in no time. Join our community and unlock exclusive features
//           tailored for businesses!
//         </p>
//         {!user ? (
//           <div className="flex gap-5">
//             <Button onClick={() => navigate("/sign-up")} variant="secondary">
//               Register
//             </Button>
//             <Button onClick={() => navigate("/sign-in")} variant="outline">
//               Log in
//             </Button>
//           </div>
//         ) : (
//           <Button
//             onClick={() => navigate("/merchant")}
//             className="!w-fit"
//             variant="secondary"
//           >
//             Home
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
