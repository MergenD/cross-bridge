import Image from 'next/image';
import React from 'react';
import logo from '/public/logo.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full pb-[64px] md:px-[64px] px-[21.5px] lg:pb-[40px] h-min-[200px] flex lg:gap-[93px] gap-[44px] pt-[20px] lg:justify-around md:justify-between justify-center'>
      <Link href='#' className='h-[30px]'>
        <Image src={logo} alt='logo' width={130} height={30} />
      </Link>
      <div className='lg:flex gap-[100px] hidden'>
        <div className='flex flex-col gap-[16px]'>
          <Link
            href='#'
            className='text-[16px] font-[400] text-white hover:text-[#a8a8a8]'
          >
            Home
          </Link>
          <Link
            href='#'
            className='text-[16px] font-[400] text-white hover:text-[#a8a8a8]'
          >
            About Us
          </Link>
          <Link
            href='#'
            className='text-[16px] font-[400] text-white hover:text-[#a8a8a8]'
          >
            Businesses
          </Link>
          <Link
            href='#'
            className='text-[16px] font-[400] text-white hover:text-[#a8a8a8]'
          >
            Sustainability
          </Link>
        </div>
        <div className='flex flex-col gap-[16px] pt-[10px]'>
          <Link
            href='#'
            className='text-[16px] font-[400] text-white hover:text-[#a8a8a8]'
          >
            Careers
          </Link>
          <Link
            href='#'
            className='text-[16px] font-[400] text-white hover:text-[#a8a8a8]'
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className='flex lg:gap-[192px]'>
        <div className='flex flex-col gap-[15px]'>
          <div className='flex flex-col gap-[4px]'>
            <h1 className='text-[18px] font-[700]'>Phone</h1>
            <span className='text-[16px]'>+993 64565656</span>
          </div>
          <div className='flex flex-col gap-[4px]'>
            <h1 className='text-[18px] font-[700]'>E-mail</h1>
            <span className='text-[16px]'>crossbridge@mail.com</span>
          </div>
          <div className='flex flex-col gap-[4px] lg:hidden'>
            <h1 className='text-[18px] font-[700]'>Address</h1>
            <span className='text-[16px]'>crossbridge@mail.com</span>
          </div>
        </div>
        <div>
          <div className='lg:flex flex-col gap-[4px] hidden'>
            <h1 className='text-[18px] font-[700]'>Address</h1>
            <span className='text-[16px]'>crossbridge@mail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
