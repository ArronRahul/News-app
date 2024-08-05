import React, { useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { userSignUp } from '../../api/api';

export default function Signup() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const navigate =useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      alert('Passwords do not match');
      return;
    }
    if (!user || !email || !password || !cpassword) {
      alert('Please fill all the fields');
      return;
    }
    const Data = {
      user,
      email,
      password,
    };
    userSignUp(Data).then(navigate('/login'))
    setUser('');
    setEmail('');
    setPassword('');
    setCpassword('');
  };

  return (
    <div className='signup'>
      <div className='signup-page'>
        <form onSubmit={handleSubmit}>
          <h1>Sign up</h1>
          <input
            type='text'
            placeholder='Username'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='password'
            placeholder='Confirm password'
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
          <button type='submit'>Sign up</button>
        </form>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  );
}
