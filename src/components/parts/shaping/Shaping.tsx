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
      <h1 className='lg:w-[540px] 2xl:w-[790px] text-[40px] md:text-[64px] 2xl:text-[140px] lg:text-[110px] w-[290px] text-[400] leading-[90%] 2xl:ml-[160px] lg:ml-[120px] md:ml-[64px] ml-[22px]'>
        Shaping a <br className='lg:hidden' /> Greener{' '}
        <br className='sm:hidden' /> Tomorrow
      </h1>
    </section>
  );
};

export default Shaping;
