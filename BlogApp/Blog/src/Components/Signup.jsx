import { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login as StoreLogin } from '../Store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError('');
    try {
      const userData = await authService.createAccount(data); // here we are creating account not sign in
      //difference between sign in and sgin up we know that in sign in we enter email and password and send to
      // appwerite and stores in Store but in sign up we gives email password and username as well so by usng hook form we collects
      // three of them and pass to appwrite if account will created successfully then get the ceated accound and send to Store
      if (userData) {
        const Data = await authService.getCurrentUser();
        if (Data) dispatch(StoreLogin(Data));
        navigate('/'); // navigate forcefulluy
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register('name', {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register('email', {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    'Email address must be a valid address',
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

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
