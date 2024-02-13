import { useState } from 'react';
import AuthSrvice from '../appwrite/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authservice from '../appwrite/auth';
import { Logo, Input, Button } from '../Components/index';
import { login as StoreLogin } from '../Store/authSlice';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, setRegister] = useForm();
  const login = async (data) => {
    setError('');
    try {
      const session = await AuthSrvice.login(data); // this line will sent data to appwrite data base

      if (session) {
        const userData = await authservice.getUser(); // this method will get sent data by above
        if (userData) {
          // send to store data
          dispatch(StoreLogin(userData));
          navigate('/'); // it will automatically navigate to root element
        }
      }
    } catch (error) {
      setError(error.messsage);
    }
  };
  return (
    <div className="w=full justify-center items-center flex">
      <div className="flex justify-center ">
        <span>
          {' '}
          <Logo className="100%" />{' '}
        </span>
      </div>
      <h2 className="text-center text-2xl font-bold leading-tight">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-base text-black/60">
        Don&apos;t have any account?&nbsp;
        <Link
          to="/signup"
          className="font-medium text-primary transition-all duration-200 hover:underline"
        >
          Sign Up
        </Link>
      </p>

      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      <form onSubmit={setRegister(login)}>
        <div className="w-full flex justify-center">
          <Input
            label="Email"
            placeholder="Enter you Email"
            type="email"
            {...register('email', {
              // will check without ... dots
              required: true,
            })}
          />
          <Input
            label="password"
            placeholder="Enter Your password"
            type="password"
            {...register('password', {
              register: true,
            })}
          />
          <Button type="submit">Sign in </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
// on line 51  login will called through setRegister when we press button it gather all informtation and send to login function and it talks with app write
/* Callback Execution: If the form data
 passes validation (or if no validation rules were specified),
  handleSubmit executes the callback function passed to it
, providing the collected form
 data as an argument to the callback.
 Submission: Typically, inside the callback function
 , you would handle the form submission logic. This could involve sending the form data to a server,
  performing client-side processing, updating state, or dispatching actions to a Redux store.
 
 At the end data will passed to Store 
 Remember Register uses Referece which i dont now how to pass to Input compnent
 
 */
