'use client';

import { Button } from 'antd';
import { sendMessage } from '@/api/message';
import { useState } from 'react';

const Form = () => {
  const [data, setData] = useState({
    email: '',
    content: '',
  });
  const [loading, setLoading] = useState(false);

  return (
    <div className='flex flex-col gap-[20px] sm:gap-[40px]'>
      <h2 className='text-[18px] sm:text-[32px] 2xl:text-[46px] font-[400]'>
        Get in Touch
      </h2>
      <div className='flex flex-col gap-[28px]'>
        <div className='flex flex-col gap-[4px]'>
          <p className='text-[12px] 2xl:text-[18px]'>E-mail</p>
          <input
            type='mail'
            className='px-[22px] py-[15px] h-[60px] w-[100%] md:w-[350px] lg:w-[100%] border-[1px] border-[#9A9A9A]'
            placeholder='name@gmail.com'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-[4px]'>
          <p className='text-[12px] 2xl:text-[18px]'>Text</p>
          <textarea
            className='px-[22px] py-[15px] h-[98px] w-[100%] lg:w-[360px] xl:w-[460px] border-[1px] border-[#9A9A9A]'
            placeholder='Text'
            value={data.content}
            onChange={(e) => setData({ ...data, content: e.target.value })}
          />
        </div>
      </div>
      <Button
        onClick={() => {
          setLoading(true);
          sendMessage(data).finally(() => {
            setLoading(false);
          });
        }}
        loading={loading}
        className='w-[100%] lg:h-auto h-[40px]! lg:w-[80px] 2xl:w-[144px] bg-[#008557]! lg:bg-transparent! lg:border-white! border-transparent! text-[white]!'
      >
        Send
      </Button>
    </div>
  );
};

export default Form;
