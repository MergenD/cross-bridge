import React from 'react';
import pic from '/public/pic2.webp';
import Image from 'next/image';

const Identity = () => {
  return (
    <section
      id='identity'
      className='h-screen flex sm:flex-row flex-col border-t-[1px] bg-[#1A1A1A] border-[#474747]'
    >
      <div
        className='
          w-full
          md:w-1/2
          flex flex-col justify-center gap-[20px]
          px-[22px] pt-[60px] pb-[30px]
          md:pl-[64px] lg:pl-[120px]
        '
      >
        <h1
          className='
            text-[24px]             
            sm:text-[36px]          
            md:text-[26px]          
            lg:text-[36px]          
            text-left
            text-[#008557] sm:text-white
          '
        >
          OUR IDENTITY
        </h1>
        <p
          className='
            text-[14px]            
            md:text-[18px]         
            md:w-[300px]            
            lg:w-[494px]           
          '
        >
          At CrossBridge, we integrate traditional strengths with digital
          innovation. Our operations span the entire value chain—from sourcing
          and refining raw materials to delivering cutting-edge IT
          infrastructure and analytics that empower efficiency and insights for
          global partners.
        </p>
      </div>

      <Image
        src={pic}
        alt='pic2'
        className='
          w-full
          md:w-1/2
          h-[297px]             
          md:h-screen           
          lg:h-screen            
          object-cover
        '
      />
    </section>
  );
};

export default Identity;
