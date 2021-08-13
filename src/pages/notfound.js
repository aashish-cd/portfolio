import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='d-flex flex-column w-100 justify-content-center'>
      <h1 className='d-flex flex-row justify-content-center'>
        Error... 404, Page not found
      </h1>
      <Link
        className='d-flex flex-row justify-content-center btn btn-primary'
        to='/'
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
