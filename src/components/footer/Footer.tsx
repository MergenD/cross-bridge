import Image from 'next/image';
import React from 'react';
import logo from '/public/logo.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full pb-[64px] sm:pb-[40px] h-min-[200px] flex sm:gap-[93px] gap-[44px] pt-[20px] justify-center'>
      <Link href='#'>
        <Image src={logo} alt='logo' width={130} height={30} />
      </Link>
      <div className='sm:flex gap-[100px] hidden'>
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
      <div className='flex sm:gap-[192px]'>
        <div className='flex flex-col gap-[15px]'>
          <div className='flex flex-col gap-[4px]'>
            <h1 className='text-[18px] font-[700]'>Phone</h1>
            <span className='text-[16px]'>+993 64565656</span>
          </div>
          <div className='flex flex-col gap-[4px]'>
            <h1 className='text-[18px] font-[700]'>E-mail</h1>
            <span className='text-[16px]'>crossbridge@mail.com</span>
          </div>
          <div className='flex flex-col gap-[4px] sm:hidden'>
            <h1 className='text-[18px] font-[700]'>Address</h1>
            <span className='text-[16px]'>crossbridge@mail.com</span>
          </div>
        </div>
        <div>
          <div className='sm:flex flex-col gap-[4px] hidden'>
            <h1 className='text-[18px] font-[700]'>Address</h1>
            <span className='text-[16px]'>crossbridge@mail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
