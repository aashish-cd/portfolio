import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '@material-ui/core';

const Navbar = () => {
  return (
    <>
      <AppBar className='navbar navbar-expand-lg navbar-light bg-dark sticky-top shadow-lg p-0'>
        <div>
          <ul className='navbar-nav'>
            <Link
              className='btn btn-secondary p-2 m-4 nav-item'
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
              className='btn btn-secondary p-2 m-4  nav-item'
              to='/about'
            >
              About
            </Link>

            <Link
              style={{
                zIndex: '10',
              }}
              className='btn btn-secondary p-2 m-4  nav-item'
              to='/resume'
            >
              Resume
            </Link>
          </ul>
        </div>
      </AppBar>
    </>
  );
};

export default Navbar;
