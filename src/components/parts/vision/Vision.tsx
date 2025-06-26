import React from 'react';
import pic from '/public/pic4.webp';
import Image from 'next/image';

const Vision = () => {
  return (
    <section
      id='vision'
      className='flex sm:flex-row flex-col border-t-[1px] border-[#474747]'
    >
      <div className='sm:w-[50%] h-min-[100vh] sm:h-[100vh] flex flex-col justify-center gap-[20px] sm:pl-[120px] pt-[60px] px-[22px] pb-[30px]'>
        <h1 className='text-[#008557]! text-[24px] sm:text-[36px] text-left'>
          OUR Vision
        </h1>
        <p className='text-[16px] sm:text-[18px] sm:w-[494px]'>
          To be a global catalyst for industrial innovation, delivering
          sustainable value in energy, commodities, and digital ecosystems.
        </p>
      </div>
      <Image
        src={pic}
        className='sm:w-[50%] h-[297px] sm:h-[100vh] object-cover'
        alt='pic2'
      />
    </section>
  );
};

export default Vision;
