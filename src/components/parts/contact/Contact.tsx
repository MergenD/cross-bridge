import Form from './Form';

const Contact = () => {
  return (
    <section
      id='contact'
      className='flex lg:justify-around lg:gap-[183px] lg:flex-row flex-col border-b-[1px] border-[#515151] px-[22px] lg:px-[120px] py-[60px]'
    >
      <div className='flex lg:flex-col lg:justify-start flex-col md:flex-row gap-[30px] md:justify-between lg:gap-[12px]'>
        <h1 className='text-[#008557]! sm:text-white! 2xl:text-[96px] text-[28px] md:text-[36px] lg:text-[64px]'>
          CONTACT
        </h1>
        <p className='text-[16px] md:text-[14px] 2xl:text-[22px] lg:text-[18px]'>
          For inquiries, partnerships, or <br className='sm:hidden' /> support,
          reach out to our corporate <br className='sm:hidden' /> offices or
          fill out our online form.
        </p>
      </div>

      <Form />
    </section>
  );
};

export default Contact;
