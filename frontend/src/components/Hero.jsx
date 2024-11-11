import React from 'react';
import {ReactTyped} from 'react-typed';
import UsMap from '../components/UsMap';
const Hero = () => {
  return (
    <>
      <div className='flex flex-col-reverse lg:flex-row lg:justify-center lg:items-center bg-gray-100 p-10'>
        <div className='flex-1 text-gray-900'>
          <div className='max-w-[800px] mt-[-80px] w-full mx-auto text-center flex flex-col lg:justify-center'>
            <h1 className='text-4xl mt-16 lg:mt-0 md:text-6xl font-bold py-6'>
              Strengthen Your Supply Chain
            </h1>
            <div className='flex justify-center items-center'>
              <ReactTyped
                className='text-3xl text-[#00df9a] pb-5 font-bold md:pl-4 pl-2'
                strings={['Track the Latest Threats', 'Know more with risk score', 'Slash Third-Party Risks']}
                typeSpeed={90}
                backSpeed={50}
                loop
              />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Elevate Your Team's Approach to Risk Detection, Monitoring, Mitigation, and Reporting.</p>
            <a href='/vendors'>
              <button className='bg-[#00df9a] hover:brightness-75 ease-in duration-150 cursor-pointer w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>See Vendors</button>
            </a>
          </div>
        </div>
        <div className='flex-1 flex justify-center w-full'>
          <UsMap />
        </div>
      </div>
    </>
  );
};

export default Hero;
