import React from 'react';
import { Link } from 'react-router-dom';
import image from '../logo.jpg';

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-dark sticky-top justify-content-end pl-n5 pr-5'>
        <img
          style={{
            position: 'fixed',
            right: '0',
            left: '30px',
            width: '5vw',
          }}
          src={image}
          alt='logo'
        />
        <Link className='btn btn-secondary p-2 m-4' to='/'>
          Home
        </Link>
        <Link className='btn btn-secondary p-2 m-4' to='/about'>
          About
        </Link>

        <Link className='btn btn-secondary p-2 m-4' to='/resume'>
          Resume
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
