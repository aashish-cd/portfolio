import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-dark sticky-top   shadow-lg  '>
        <i
          className='bx bxl-react justify-content-left'
          style={{
            fontSize: '3rem',
            zIndex: '1',
          }}
        ></i>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <Link
              className='btn btn-secondary p-1 m-4 nav-item'
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
              className='btn btn-secondary p-1 m-4  nav-item'
              to='/about'
            >
              About
            </Link>

            <Link
              style={{
                zIndex: '10',
              }}
              className='btn btn-secondary p-1 m-4  nav-item'
              to='/resume'
            >
              Resume
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
