import { Button, Checkbox, Input, PasswordInput} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { GoogleButton } from './GoogleButton';
import { FacebookButton } from './FacebookButton';

const SigninForm = () => {
  const navigate = useNavigate()
  return <div>
    <p className='text-center'>Welcome Back!</p>
    <div className="buttons bg-[#EAD0A880] flex justify-between rounded-full px-6 py-4 gap-10">
    <Button variant="white" color="black" size='md' radius="xl" onClick={() => navigate('/sign-up')}>Register</Button>
    <Button variant="filled" color="#402905" size='md' radius="xl" >Login</Button>
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
