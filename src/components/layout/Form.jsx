import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Form = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const loginApp = (e) => {
    e.preventDefault();
    if (email === 'admin@admin.com' && password === '123') {
      history.push('/main');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>',
      });
      setUser({ email: '', password: '' });
    }
  };

  return (
    <div>
      <form onSubmit={loginApp}>
        <div className='mb-3'>
          <input
            type='email'
            placeholder='email'
            name='email'
            value={email}
            autoFocus
            className='form-control'
            onChange={onChange}
          />
        </div>
        <div className='mb-3'>
          <input
            type='password'
            placeholder='password'
            name='password'
            value={password}
            className='form-control'
            onChange={onChange}
          />
        </div>
        <button className='btn btn-primary' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};
