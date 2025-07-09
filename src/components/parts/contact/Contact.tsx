import { Button } from 'antd';

const Contact = () => {
  return (
    <section
      id='contact'
      className='flex gap-[30px] lg:gap-[183px] lg:flex-row flex-col border-b-[1px] border-[#515151] px-[22px] lg:px-[120px] py-[60px]'
    >
      <div className='flex lg:flex-col lg:justify-start flex-col md:flex-row gap-[30px] md:justify-between lg:gap-[12px] lg:w-[430px]'>
        <h1 className='text-[#008557]! sm:text-white!  text-[28px] md:text-[36px] lg:text-[64px]'>
          CONTACT
        </h1>
        <p className='text-[16px] md:text-[14px] md:w-[284px] lg:text-[18px]'>
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
              className='px-[22px] py-[15px] h-[60px] w-[100%] md:w-[350px] lg:w-[100%] border-[1px] border-[#9A9A9A]'
              placeholder='name@gmail.com'
            />
          </div>
          <div className='flex flex-col gap-[4px]'>
            <p className='text-[12px]'>Text</p>
            <textarea
              className='px-[22px] py-[15px] h-[98px] w-[100%] lg:w-[460px] border-[1px] border-[#9A9A9A]'
              placeholder='Text'
            />
          </div>
        </div>
        <Button className='w-[100%] lg:h-auto h-[40px]! lg:w-[80px] bg-[#008557]! lg:bg-transparent! lg:border-white! border-transparent! text-[white]!'>
          Send
        </Button>
      </div>
    </section>
  );
};

export default Contact;
