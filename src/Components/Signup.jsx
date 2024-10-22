import React, { useState } from 'react';
import Axios from '../utils/Axios'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/action/UserAction';

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = (e)=>{
    e.preventDefault();
    const details  = {email,username,password};
    dispatch(registerUser(details, navigate))
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900'>
      <div className='bg-teal-900 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-8 max-w-md w-full border border-teal-600 border-opacity-20'>
        <h2 className='text-3xl font-bold text-center text-white mb-6'>Sign Up</h2>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username' className='block text-white font-semibold mb-1'>
              Username
            </label>
            <input 
              type='text' 
              placeholder='Username'
              onChange={(e)=>setUsername(e.target.value)} 
              className='w-full px-4 py-2 bg-teal-800 bg-opacity-30 border border-teal-600 border-opacity-20 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none text-white placeholder-teal-300'
            />
          </div>
          
          <div>
            <label htmlFor='email' className='block text-white font-semibold mb-1'>
              Email
            </label>
            <input 
              type='email' 
              placeholder='Email' 
              autoComplete='off'
              onChange={(e)=>setemail(e.target.value)} 
              className='w-full px-4 py-2 bg-teal-800 bg-opacity-30 border border-teal-600 border-opacity-20 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none text-white placeholder-teal-300'
            />
          </div>

          <div>
            <label htmlFor='password' className='block text-white font-semibold mb-1'>
              Password
            </label>
            <input 
              type='password' 
              placeholder='**********' 
              onChange={(e)=>setpassword(e.target.value)} 
              className='w-full px-4 py-2 bg-teal-800 bg-opacity-30 border border-teal-600 border-opacity-20 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none text-white placeholder-teal-300'
            />
          </div>

          <button 
            type='submit' 
            className='w-full py-2 px-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-150 ease-in-out'
          >
            Sign Up
          </button>
          <p className='text-white'>Have an account?  <Link to="/signin" className='text-teal-300 hover:text-teal-200'>Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
