import React from 'react';
import pic from '/public/pic3.webp';
import Image from 'next/image';

const Purpose = () => {
  return (
    <section
      id='purpose'
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
            md:text-[26px]          
            lg:text-[36px]   
            2xl-text-[48px]       
            text-left
            text-[#008557] sm:text-white
          '
        >
          OUR PURPOSE
        </h1>
        <p
          className='
            text-[14px]            
            lg:text-[18px]         
            md:w-[300px]            
            lg:w-[494px]  
            2xl:text-[24px]          
          '
        >
          To enable transformation across industries through reliable supply
          chains, responsible resource management, and advanced technologies.
        </p>
      </div>
      <Image
        src={pic}
        className='
          w-full
          md:w-1/2
          h-[297px]             
          md:h-screen           
          lg:h-screen            
          object-cover
        '
        alt='pic2  object-cover'
      />
    </section>
  );
};

export default Purpose;
