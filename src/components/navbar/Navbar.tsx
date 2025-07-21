import React from 'react';
import { Button, Popover } from 'antd';
import Image from 'next/image';
import logo from '/public/logo.svg';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

const Navbar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navItems = ['About Us', 'Sustainability'];

  return (
    <header className='h-[30px] sm:h-[60px] w-[100%] bg-transparent flex items-center justify-between sm:pt-[20px] pt-[15px]'>
      <Image src={logo} alt='logo' width={130} height={30} />
      <nav className='hidden lg:flex gap-[30px] text-[16px]'>
        {navItems.map((item, index) => (
          <Link
            href={`#${item.toLowerCase().replace(' ', '')}`}
            key={index}
            className='hover:text-[#002C2C]'
          >
            {item}
          </Link>
        ))}
      </nav>
      <Link
        href='#contact'
        className='!hidden lg:!inline-flex w-[126px] h-[39px] !bg-[#002C2C] !text-[white] justify-center items-center rounded-[5px] hover:bg-[#008557] hover:text-[white] transition-all duration-300'
      >
        Contact Us
      </Link>
      <Popover
        trigger='click'
        open={open}
        classNames={{
          body: '!bg-[#1A1A1A]',
        }}
        onOpenChange={() => setOpen(!open)}
        content={
          <nav className='flex flex-col gap-4 p-[10px]'>
            {navItems.map((item, index) => (
              <Link
                key={index}
                className='hover:text-[#002C2C] !text-[white] decoration-none'
                href={`#${item.toLowerCase().replace(' ', '')}`}
              >
                {item}
              </Link>
            ))}
          </nav>
        }
      >
        <Button
          onClick={() => setOpen(!open)}
          className='!inline-flex lg:!hidden h-[39px] !bg-[transparent] w-auto !border-none !shadow-none !text-[white]'
        >
          {!open ? (
            <RxHamburgerMenu className='w-[32px] h-[32px]' />
          ) : (
            <IoMdClose className='w-[32px] h-[32px]' />
          )}
        </Button>
      </Popover>
    </header>
  );
};

export default Navbar;
