import React from 'react';
import Image from 'next/image';
import pic from '/public/pic1.jpg';

const AboutUs = () => {
  return (
    <section id='aboutus' className='w-full h-max-[100vh] flex flex-col justify-between sm:p-[120px]'>
      <div className='flex flex-col sm:flex-row gap-[30px] sm:gap-[0] sm:justify-around sm:px-[0] sm:pt-[0] sm:pb-[0] px-[22px] pt-[60px] pb-[30px]'>
        <h1 className='text-[#008557] sm:text-[64px] text-[28px] '>
          WHO WE ARE
        </h1>
        <div className='flex flex-col gap-[20px] mb-[40px]'>
          <p className='text-[16px] sm:text-[18px] sm:w-[590px]'>
            CrossBridge is a diversified industrial and technology enterprise
            focused on growth across various global sectors.
          </p>
          <p className='text-[16px] sm:text-[18px] sm:w-[590px]'>
            With a strong foundation in energy, petrochemicals, commodities, and
            information technology, we bridge key industries to deliver
            innovative solutions that shape a sustainable and interconnected
            future.
          </p>
        </div>
      </div>
      <Image
        className='sm:w-[1200px] sm:h-[448px] h-[297px]'
        src={pic}
        alt='aboutUs'
      />
    </section>
  );
};

export default AboutUs;
