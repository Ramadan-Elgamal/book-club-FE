import { Button, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import { FormType } from "../enum";

export default function MainContent({
  image,
  type,
}: Readonly<{
  image: string;
  type: string;
}>) {
  const isRegister = type === FormType.SIGNUP;
  return (
    <div className={`hidden h-full w-2/3 items-center justify-center md:flex`}>
      <div
        className={`flex max-w-[35rem] flex-col ${!isRegister && "items-center"} items-start justify-center gap-5`}
      >
        <div className={`w-60 ${!isRegister && "w-[31.25rem]"}`}>
          <Image src={image} alt="imaged content" />
        </div>
        {isRegister && (
          <div className="flex flex-col space-y-5">
            <h1 className="text-xl font-bold text-blue-950 lg:text-2xl xl:text-3xl">
              Registering your company on our website is quick and
            </h1>
            <p className="text-base font-semibold text-blue-950 lg:text-lg xl:text-xl">
              Just fill out the online form with your business details, and
              you'll be set up in no time. Join our community and unlock
              exclusive features tailored for businesses!
            </p>
          </div>
        )}

        {type === FormType.SIGNIN ? (
          <Link to={"/sign-up"}>
            <Button variant="secondary">Register</Button>
          </Link>
        ) : (
          <Link to={"/sign-in"}>
            <Button variant="secondary">Log in</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
