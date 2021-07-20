import React from 'react';
import { useUser } from '../../context/UserContext';

export const Navbar = () => {
  const { setLogin } = useUser();

  const exit = () => {
    setLogin(false);
    sessionStorage.setItem('login', false);
  };
  return (
    <div>
      <nav
        className='navbar  navbar-expand-lg navbar-dark bg-dark'
        id='navbarSupportedContent'
      >
        <div className='container-fluid '>
          <div className='navbar-brand'>
            <span className='icon-color p-2'>
              <i className='fas fa-utensils'></i>
            </span>
            UnaEmpresaPorAhi
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse ' id='navbarNav'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <button className=' btn nav-link' onClick={exit}>
                  Salir
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
