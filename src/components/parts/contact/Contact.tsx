import { Button } from 'antd';

const Contact = () => {
  return (
    <section
      id='contact'
      className='flex gap-[30px] sm:gap-[183px] sm:flex-row flex-col border-b-[1px] border-[#515151] px-[22px] sm:px-[120px] py-[60px]'
    >
      <div className='flex flex-col gap-[30px] sm:gap-[12px] sm:w-[430px]'>
        <h1 className='text-[#008557] text-[28px] sm:text-[64px]'>CONTACT</h1>
        <p className='text-[16px] sm:text-[18px]'>
          For inquiries, partnerships, or <br className='sm:hidden' /> support,
          reach out to our corporate <br className='sm:hidden' /> offices or
          fill out our online form.
        </p>
      </div>

      <div className='flex flex-col gap-[20px] sm:gap-[40px]'>
        <h2 className='text-[18px] sm:text-[32px] font-[400]'>Get in Touch</h2>
        <div className='flex flex-col gap-[28px]'>
          <div className='flex flex-col gap-[4px]'>
            <p className='text-[12px]'>E-mail</p>
            <input
              type='mail'
              className='px-[22px] py-[15px] h-[60px] w-[100%] border-[1px] border-[#9A9A9A]'
              placeholder='name@gmail.com'
            />
          </div>
          <div className='flex flex-col gap-[4px]'>
            <p className='text-[12px]'>Text</p>
            <input
              type='text'
              className='px-[22px] py-[15px] h-[98px] w-[100%] sm:w-[460px] border-[1px] border-[#9A9A9A]'
              placeholder='Text'
            />
          </div>
        </div>
        <Button className='w-[100%] sm:h-auto h-[40px]! sm:w-[80px] bg-[#008557]! sm:bg-transparent! sm:border-white! border-transparent! text-[white]!'>
          Send
        </Button>
      </div>
    </section>
  );
};

export default Contact;
