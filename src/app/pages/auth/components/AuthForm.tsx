import { Text, Button, Checkbox, TextInput, Anchor} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { GoogleButton } from './GoogleButton';
import { FacebookButton } from './FacebookButton';

interface AuthFormProps {
    isSigninOrUp : "in" | "up",
}
const AuthForm = ({isSigninOrUp}: AuthFormProps) => {
  const navigate = useNavigate()
  return <div className='w-1/2 h-screen px-28 py-4 flex flex-col items-center justify-center gap-5'>

    <Text className='text-center'>Welcome to Circels!</Text>

    <div className="bg-[#EAD0A880] w-[250px] flex justify-between rounded-full px-[8px] py-[5px] ">
      <Button variant= {isSigninOrUp === "up" ? "filled" : "transparent"} color= "#402905" w={120} radius="xl" onClick={() => navigate('/sign-up')}>Register</Button>
      <Button variant= {isSigninOrUp === "in" ? "filled" : "transparent"} color="#402905" w={120} radius="xl" onClick={() => navigate('/sign-in')}>Login</Button>
    </div>

    <TextInput
      label="Email Address"
      description=""
      error=""
      size="md"
      radius="xl"
      placeholder="enter your email address"
    />
    {isSigninOrUp === "up" &&
    <TextInput
    label="User Name"
    description=""
    error=""
    size="md"
    radius="xl"
    placeholder="enter your name"
  />
     
    }
    

    <TextInput
      label="Password"
      description=""
      error=""
      size='md'
      radius="xl"
      placeholder="enter your password"
    />  

    <div className="w-3/4 flex items-center justify-center relative py-2">
      <div className="w-full h-[1px] bg-base"></div>
      <p className="text-large absolute text-black">OR</p>
    </div>

    <GoogleButton w={235} h={50}>Sign up with Google</GoogleButton>

    <FacebookButton w={235} h={50}>Sign up with Facebook</FacebookButton>
    {isSigninOrUp === "up" &&
    <Checkbox label="By signing up , you accept our terms of use and acknowledge our privacy policy"
    />}
    
    {isSigninOrUp === "in" &&
     <div className='flex w-full justify-between items-center'>
     <Checkbox label="Remember me" />
     <Anchor href="#">Forgot Password?</Anchor>
   </div>
    }

   
   <Button color="#402905" fullWidth>{isSigninOrUp === "up" ? "Register" : "Login"}</Button> 
  </div>;
};

export default AuthForm;
