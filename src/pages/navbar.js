import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-dark sticky-top justify-content-end pl-n5 pr-5 shadow-lg  '>
        <i
          className='bx bxl-react'
          style={{
            position: 'fixed',
            right: '0',
            left: '30px',
            fontSize: '3rem',
            zIndex: '1',
          }}
        ></i>
        <Link
          className='btn btn-secondary p-2 m-4'
          style={{
            zIndex: '10',
          }}
          to='/'
        >
          Home
        </Link>
        <Link
          style={{
            zIndex: '10',
          }}
          className='btn btn-secondary p-2 m-4'
          to='/about'
        >
          About
        </Link>

        <Link
          style={{
            zIndex: '10',
          }}
          className='btn btn-secondary p-2 m-4'
          to='/resume'
        >
          Resume
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
