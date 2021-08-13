import React from 'react';
import { socialMedia, resumeData } from '../data/profile';
import image from '../profile.jpg';

const Resume = () => {
  return (
    <>
      <div
        className='d-flex flex-row flex-glow w-100 '
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        {resumeData.map((data) => {
          return (
            <div
              className='d-flex  flex-column  p-5 m-5 rounded shadow-lg p-3 mb-5 bg-dark rounded'
              style={{
                width: '40vw',
                height: '30vw',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                background: '#444',
              }}
            >
              <img
                src={data.image}
                alt={data.job}
                className='img img-thumbnail rounded-circle'
              />
              <h1 className='text-grey'>{data.job}</h1>
              <p className='text-grey'>{data.workplace}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Resume;
