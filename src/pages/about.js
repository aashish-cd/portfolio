import React, { useState, useEffect } from 'react';
import { resumeData } from '../data/profile';

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > resumeData.length - 1) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(resumeData.length - 1);
    }
    console.log('hello');
    return () => {};
  }, [index]);
  return (
    <>
      <div className='position-relative container'>
        <div className='d-flex flex-row justify-content-center  '>
          <div
            className='d-flex flex-row flex-glow w-100 '
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <i
              class='bx bx-left-arrow mr-5'
              style={{
                fontSize: '48px',
                cursor: 'pointer',
              }}
              onClick={() => setIndex(index - 1)}
            ></i>
            <div
              className='d-flex  flex-column  m-3 p-3 rounded shadow-lg p-3 mb-5 bg-dark rounded'
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
                {resumeData[index]?.logo?.map((bx) => (
                  <i className={`${bx}`} style={{ fontSize: '100px' }}></i>
                ))}
              </div>
              {/* <i class={resumeData[index]?.logo}></i> */}
              <h1 className=''>{resumeData[index]?.job}</h1>
              <p className=''>{resumeData[index]?.workplace}</p>
              <p className='bg-blue shadow-lg duration'>
                {resumeData[index]?.duration}
              </p>
              <p>{resumeData[index]?.description}</p>
            </div>
            <i
              class='bx bx-right-arrow ml-5'
              style={{
                fontSize: '48px',
                cursor: 'pointer',
              }}
              onClick={() => setIndex(index + 1)}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
