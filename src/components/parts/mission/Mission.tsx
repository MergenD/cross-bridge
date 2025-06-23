import React from 'react';
import first from '/public/pic5.jpg';
import third from '/public/pic6.jpg';
import second from '/public/pic12.jpg';
import fourth from '/public/pic11.jpg';

const Mission = () => {
  return (
    <section
      id='mission'
      className='w-full min-h-screen flex flex-col border-t-[1px] border-[#474747] pt-[60px] px-[22px] sm:p-[120px] sm:gap-[40px] gap-[30px]'
    >
      <h1 className='text-[#008557] sm:text-[64px] text-[28px]'>OUR MISSION</h1>
      <div className='flex sm:flex-row flex-col gap-[20px] items-center'>
        <div
          className='h-[350px] sm:h-[712px] sm:w-[648px] bg-cover bg-center'
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.60) 100%), url(${first.src})`,
          }}
        >
          <p className='sm:w-[550px] sm:text-[30px] sm:pl-[48.5px] sm:pt-[550px] pt-[250px] text-[14px] p-[30px]'>
            Deliver high-quality energy and petrochemical products through
            responsible and efficient operations
          </p>
        </div>
        <div
          className='h-[350px] sm:h-[712px] sm:w-[648px] bg-cover bg-center sm:hidden'
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.60) 100%), url(${second.src})`,
          }}
        >
          <p className='sm:w-[550px] sm:text-[30px] sm:pl-[48.5px] sm:pt-[550px] pt-[280px] text-[14px] p-[30px]'>
            Ensure dependable access to raw materials for critical industries.
          </p>
        </div>
        <div
          className='h-[350px] sm:h-[530px] sm:w-[529px] bg-cover bg-center'
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%), url(${third.src})`,
          }}
        >
          <p className='sm:w-[510px] sm:text-[22px] sm:pl-[30px] sm:pt-[410px] pt-[270px] text-[14px] p-[30px]'>
            Build scalable IT solutions that support business and government
            transformation
          </p>
        </div>
        <div
          className='h-[350px] sm:h-[712px] sm:w-[648px] sm: bg-cover bg-center sm:hidden'
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.60) 100%), url(${fourth.src})`,
          }}
        >
          <p className='sm:w-[550px] sm:text-[30px] sm:pl-[48.5px] sm:pt-[550px] pt-[280px] text-[14px] p-[30px]'>
            Foster sustainability, integrity, and long-term impact in everything
            we do
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
