import React from 'react';
import pic from '/public/pic3.webp';
import Image from 'next/image';

const Purpose = () => {
  return (
    <section
      id='purpose'
      className='flex sm:flex-row flex-col border-t-[1px] border-[#474747]'
    >
      <div className='sm:w-[50%] h-min-[100vh] sm:h-[100vh] flex flex-col justify-center gap-[20px] sm:pl-[120px] pt-[60px] px-[22px] pb-[30px]'>
        <h1 className='text-[#008557]! sm:text-white!  text-[24px] sm:text-[36px] text-left'>
          OUR PURPOSE
        </h1>
        <p className='text-[16px] sm:text-[18px] sm:w-[494px]'>
          To enable transformation across industries through reliable supply
          chains, responsible resource management, and advanced technologies.
        </p>
      </div>
      <Image
        src={pic}
        className='sm:w-[50%] sm:h-[100vh] object-cover'
        alt='pic2  object-cover'
      />
    </section>
  );
};

export default Purpose;
