import {
  Text,
  Button,
  Checkbox,
  TextInput,
  PasswordInput,
  Progress,
  Popover,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GoogleButton } from "./GoogleButton";
import { FacebookButton } from "./FacebookButton";


const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;
  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) multiplier += 1;
  });
  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

interface AuthFormProps {
  isSigninOrUp: "in" | "up";
}

const AuthForm = ({ isSigninOrUp }: AuthFormProps) => {
  const navigate = useNavigate();
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [password, setPassword] = useState("");

  const strength = getStrength(password);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

  return (
    <div className="flex w-full max-w-sm md:max-w-md flex-col items-center justify-center gap-5 px-4 py-6">
      <Text className="text-center text-2xl font-semibold">
        Welcome to Circels!
      </Text>

      {/* Toggle Buttons */}
      <div className="flex w-full max-w-[320px] justify-between rounded-full bg-[#EAD0A880] px-[8px] py-[5px]">
        <Button
          variant={isSigninOrUp === "up" ? "filled" : "transparent"}
          color="#402905"
          w="50%"
          radius="xl"
          onClick={() => navigate("/sign-up")}
        >
          Register
        </Button>
        <Button
          variant={isSigninOrUp === "in" ? "filled" : "transparent"}
          color="#402905"
          w="50%"
          radius="xl"
          onClick={() => navigate("/sign-in")}
        >
          Login
        </Button>
      </div>

      {/* Email Input */}
      <TextInput
        label="Email Address"
        required
        size="md"
        radius="xl"
        placeholder="Enter your email"
        className="w-full"
        classNames={{
          input: "!border-[#9E896A]",
          label: "!text-[#402905] font-medium",
        }}
      />

      
      {/* Username Input (Signup Only) */}
      {isSigninOrUp === "up" && (
        <TextInput
          label="User Name"
          size="md"
          required
          radius="xl"
          placeholder="Enter your name"
          className="w-full"
          classNames={{
            input: "!border-[#9E896A]",
            label: "!text-[#402905] font-medium",
          }}
        />
      )}

      {/* Password Input */}
      <Popover opened={popoverOpened} position="bottom" width={300}>
        <Popover.Target>
          <div
            onFocusCapture={() => setPopoverOpened(true)}
            onBlurCapture={() => setPopoverOpened(false)}
            className="w-full"
          >
            <PasswordInput
              required
              radius="xl"
              label="Password"
              placeholder="Enter your password"
              size="md"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              classNames={{
                input: "!border-[#9E896A]",
                label: "!text-[#402905] font-medium",
              }}
            />
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Progress color={color} value={strength} size={5} mb="xs" />
        </Popover.Dropdown>
      </Popover>

      {/* Social Login */}
      <div className="flex flex-col w-full">
        <GoogleButton w="100%" h={45} radius="xl">
          Sign up with Google
        </GoogleButton>
        
        {/* Divider (OR) */}
        <div className="flex w-full items-center gap-4">
          <div className="flex-1 border-t border-[#1C345442]" />
          <span className="text-[15px] font-normal text-[#4A4A4A]">OR</span>
          <div className="flex-1 border-t border-[#1C345442]" />
        </div>

        <FacebookButton w="100%" h={45} radius="xl">
          Sign up with Facebook
        </FacebookButton>
      </div>

      {/* Terms Checkbox */}
      {isSigninOrUp === "up" && (
        <Checkbox
          label="By signing up, you accept our terms of use and privacy policy"
          color="#402905"
        />
      )}

      {/* Submit Button */}
      <Button fullWidth className="!rounded-full" color="#402905" radius="xl">
        {isSigninOrUp === "up" ? "Register" : "Login"}
      </Button>
    </div>
  );
};

export default AuthForm;
