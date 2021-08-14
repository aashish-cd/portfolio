import React from 'react';
import { profileData } from '../data/profile';

const Home = () => {
  return (
    <>
      <div
        className='container position-relative d-flex flex-row  justify-content-center mt-5 pt-5 bg-dark rounded shadow-lg p-3 mb-5 bg-dark '
        style={{
          width: '50vw',
          height: '20vw',
        }}
      >
        <div className='row m-3 p-3'>
          <h1
            className='h1'
            style={{
              fontSize: '5rem',
            }}
          >
            {profileData[0].title}
          </h1>
          <p>{profileData[0].description}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
