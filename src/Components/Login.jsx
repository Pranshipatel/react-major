import React, { useState } from 'react';
import Axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { LoginUser } from '../store/action/UserAction';

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate();
  // Axios.defaults.withCredentials = true


  const handleSubmit = (e)=>{
    e.preventDefault();
    const details = {email,password};
    dispatch(LoginUser(details,navigate));
    
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900'>
      <div className='bg-teal-900 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-8 max-w-md w-full border border-teal-600 border-opacity-20'>
        <h2 className='text-3xl font-bold text-center text-white mb-6'>Sign In</h2>
        <form className='space-y-4' onSubmit={handleSubmit}>
        
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
            Sign In
          </button>
          <p className='text-white'> Don't have an account?  <Link to="/" className='text-teal-300 hover:text-teal-200'>Sign In</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
