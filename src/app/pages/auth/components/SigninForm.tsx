import { Button, Checkbox, Input, PasswordInput} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { GoogleButton } from './GoogleButton';
import { FacebookButton } from './FacebookButton';

<<<<<<< Updated upstream
const SigninForm = () => {
  const navigate = useNavigate()
  return <div>
    <p className='text-center'>Welcome Back!</p>
    <div className="buttons bg-[#EAD0A880] flex justify-between rounded-full px-6 py-4 gap-10">
    <Button variant="white" color="black" size='md' radius="xl" onClick={() => navigate('/sign-up')}>Register</Button>
    <Button variant="filled" color="#402905" size='md' radius="xl" >Login</Button>
=======
interface AuthFormProps {
  isSigninOrUp: "in" | "up";
}

const AuthForm = ({ isSigninOrUp }: AuthFormProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center gap-5 px-4 py-6 md:px-8 lg:px-12 max-w-[400px] mx-auto">
      <Text className="text-center text-xl sm:text-2xl font-semibold">
        Welcome to Circels!
      </Text>

      {/* Tabs: Register/Login */}
      <div className="flex w-full justify-between rounded-full bg-[#EAD0A880] px-[8px] py-[5px]">
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
        size="md"
        radius="xl"
        className="w-full"
        placeholder="Enter your email address"
        classNames={{
          input: "!border-[#9E896A]",
          label: "!text-[#402905] font-medium",
          required: "!text-red",
        }}
      />

      {/* Password Input */}
      <PasswordInput
        radius="xl"
        label="Password"
        placeholder="Enter your password"
        size="md"
        className="w-full"
        classNames={{
          input: "!border-[#9E896A]",
          label: "!text-[#402905] font-medium",
          required: "!text-red",
        }}
      />
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


      {/* Remember Me & Forgot Password */}
      <div className="flex w-full flex-col items-center gap-3 md:flex-row md:justify-between">
        <Checkbox
          label="Remember me"
          color="#402905"
          classNames={{
            label: "!text-[#4A4A4A] text-[14px] font-normal",
            input: "!rounded-sm",
          }}
        />
        <Anchor
          href="#"
          className="!text-[#4A4A4A] text-[14px] font-medium"
          onClick={(e) => {
            e.preventDefault();
            // Add forgot password logic
          }}
        >
          Forgot Password?
        </Anchor>
      </div>

      {/* Submit Button */}
      <Button
        fullWidth
        className="!rounded-full w-full"
        color="#402905"
        radius="xl"
      >
        Login
      </Button>
>>>>>>> Stashed changes
    </div>

    <Input.Wrapper label="Email Address" description="" error="" size="md">
      <Input className="bg-white" radius='xl' placeholder="enter your email address" />
    </Input.Wrapper>
    
    <PasswordInput
      label="Password"
      radius="lg"
      placeholder="Enter your password"
    />

    <hr /> <p className='text-center'>OR</p> <hr />

    <GoogleButton>Sign up with Google</GoogleButton>
    <br />
    <FacebookButton>Sign up with Facebook</FacebookButton>
    
    <div className="forget-password flex justify-between">
    <Checkbox
      label="Remember me"
    />
    <a href="">Forger Password</a>
    </div>
   <Button fullWidth>Login</Button> 
  </div>;
};

export default SigninForm;
