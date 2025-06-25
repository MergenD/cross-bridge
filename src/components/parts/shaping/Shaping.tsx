import React from 'react';
import bg from '/public/background2.webp';

const Shaping = () => {
  return (
    <section
      id='shaping'
      style={{
        background: `linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.7) 100%), url(${bg.src}), lightgray 50%`,
      }}
      className={`w-full sm:h-screen h-[50vh] mx-auto bg-no-repeat bg-center bg-[length:100%_100%]! flex items-center`}
    >
      <h1 className='sm:w-[540px] text-[40px] sm:text-[110px] text-[400] leading-[90%] sm:ml-[120px] ml-[22px]'>
        Shaping a <br className='sm:hidden' /> Greener{' '}
        <br className='sm:hidden' /> Tomorrow
      </h1>
    </section>
  );
};

export default Shaping;
