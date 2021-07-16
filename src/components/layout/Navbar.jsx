import React from 'react';

export const Navbar = () => {
  return (
    <div>
      <nav className='navbar  navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid '>
          <a className='navbar-brand' href='#'>
            <span className='icon-color p-2'>
              <i className='fas fa-utensils'></i>
            </span>
            UnaEmpresaPorAhi
          </a>
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
          <div className='collapse navbar-collapse me-auto' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item '>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
