import React from 'react';
import pic from '/public/pic2.jpg';
import Image from 'next/image';

const Identity = () => {
  return (
    <section
      id='identity'
      className='flex sm:flex-row flex-col border-t-[1px] border-[#474747]'
    >
      <div className='sm:w-[50%] h-min-[100vh] sm:h-[100vh] flex flex-col justify-center gap-[20px] sm:pl-[120px] pt-[60px] px-[22px] pb-[30px]'>
        <h1 className='text-[#008557] text-[24px] sm:text-[36px] text-left'>
          OUR IDENTITY
        </h1>
        <p className='text-[16px] sm:text-[18px] sm:w-[494px]'>
          At CrossBridge, we integrate traditional strengths with digital
          innovation. Our operations span the entire value chain—from sourcing
          and refining raw materials to delivering cutting-edge IT
          infrastructure and analytics that empower efficiency and insights for
          global partners.
        </p>
      </div>
      <Image
        src={pic}
        className='sm:w-[50%] h-[297px] sm:h-[100vh]'
        alt='pic2'
      />
    </section>
  );
};

export default Identity;
