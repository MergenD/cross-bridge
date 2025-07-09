'use client';

import React, { useState } from 'react';
import bg from '/public/background.webp';
import Navbar from '../../navbar/Navbar';

const Main = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      style={{ backgroundImage: `url(${bg.src})` }}
      id='main'
      className='px-[22px] w-full h-screen mx-auto bg-no-repeat bg-center bg-[length:100%_100%] sm:px-[120px]'
    >
      <Navbar open={open} setOpen={setOpen} />
      <div className='w-[100%] h-screen flex flex-col gap-0 justify-around'>
        <div />
        <div>
          <p className='text-[12px] lg:text-[18px]'>
            Advancing the world`s future with sustainable <br /> growth and
            innovative business ventures
          </p>
          <h1 className='text-[50px] md:text-[60px] sm:text-[110px] leading-none'>
            ACROSS <br className='md:hidden' /> THE GLOBE
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Main;
