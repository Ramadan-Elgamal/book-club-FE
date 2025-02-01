import { Button, Checkbox, Input, PasswordInput} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { GoogleButton } from './GoogleButton';
import { FacebookButton } from './FacebookButton';

const SignupForm = () => {
  const navigate = useNavigate()
  return <div>
    <p className='text-center'>Welcome to Circels!</p>
    <div className="buttons bg-[#EAD0A880] flex justify-between rounded-full px-6 py-4 gap-10">
    <Button variant="filled" color="#402905" size='md' radius="xl" >Register</Button>
    <Button variant="white" color="black" size='md' radius="xl" onClick={() => navigate('/sign-in')}>Login</Button>
    </div>

    <Input.Wrapper label="Email Address" description="" error="" size="md">
      <Input className="bg-white" radius='xl' placeholder="enter your email address" />
    </Input.Wrapper>
    <Input.Wrapper label="User Name" description="" error="" size="md">
      <Input radius='xl' placeholder="enter your name" />
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
    <Checkbox label="By signing up , you accept our terms of use and acknowledge our privacy policy"
    />
   <Button fullWidth>Register</Button> 
  </div>;
};

export default SignupForm;
