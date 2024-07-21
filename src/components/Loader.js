import React from 'react';

const Loader = () => {
  return (
    <div className='container mx-auto my-4 bottom-0'>
      <div className='flex align-middle justify-center'>
        <div
          className='inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-jet border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
          role='status'
        >
          <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
