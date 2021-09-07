import React from 'react';
import { resumeData } from '../data/profile';

const Resume = () => {
  return (
    <>
      <div
        className='d-flex flex-column flex-glow w-100 container '
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        {resumeData.map((data) => {
          return (
            <div
              className=' d-flex  flex-column  p-5 m-5 rounded shadow-lg p-3 mb-5 bg-dark rounded'
              style={{
                width: '40vw',
                height: '30vw',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                background: '#444',
              }}
            >
              <div className='d-flex flex-row '>
                {data?.logo?.map((bx) => (
                  <i className={`${bx}`} style={{ fontSize: '100px' }}></i>
                ))}
              </div>
              <h1 className='text-grey'>{data.job}</h1>
              <p className='text-grey'>{data.workplace}</p>
              <p>{data.description}</p>
              <p className='d-flex flex-row'>
                {data.skill.map((sk) => (
                  <p className='ml-4 mr-4 border p-1'> {sk} </p>
                ))}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Resume;
