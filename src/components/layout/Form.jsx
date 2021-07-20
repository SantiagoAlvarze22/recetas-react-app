import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useUser } from '../../context/UserContext';

export const Form = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;
  const { setLogin } = useUser(false);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const loginApp = (e) => {
    e.preventDefault();
    if (email === 'admin@admin.com' && password === '123') {
      sessionStorage.setItem('login', true);
      setLogin(true);
      history.push('/main');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      sessionStorage.setItem('login', false);
      setLogin(false);
      setUser({ email: '', password: '' });
    }
  };

  return (
    <div className='d-flex justify-content-center'>
      <div className=''></div>

      <form
        onSubmit={loginApp}
        className='border border-secondary p-5 d-flex flex-column mx-auto align-items-center rounded'
      >
        <h1 className='text-title-login'>#UnaEmpresaPorAhi</h1>
        <p className='fw-ligh fst-italic '>My Recipes Site</p>
        <div className='form-floating mb-3'>
          <input
            type='email'
            id='floatingInput'
            placeholder='email'
            name='email'
            value={email}
            autoFocus
            className='form-control form-input-size'
            onChange={onChange}
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating mb-3'>
          <input
            id='floatingPassword'
            type='password'
            placeholder='password'
            name='password'
            value={password}
            className='form-control form-input-size'
            onChange={onChange}
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>
        <button className='btn btn-primary btn-size-input ' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};
