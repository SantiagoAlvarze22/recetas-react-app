import React, { useState } from 'react';

export const Form = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const loginApp = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    console.log(e.target.value);
  };

  return (
    <div>
      <form>
        <div className='mb-3'>
          <input
            type='email'
            placeholder='email'
            name='email'
            value={email}
            autoFocus
            className='form-control'
            onChange={loginApp}
          />
        </div>
        <div className='mb-3'>
          <input
            type='password'
            placeholder='password'
            name='password'
            value={password}
            className='form-control'
            onChange={loginApp}
          />
        </div>
        <button className='btn btn-primary' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};
