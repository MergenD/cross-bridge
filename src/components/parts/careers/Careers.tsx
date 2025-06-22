const Careers = () => {
  const parts = ['Current openings', 'Life at Reliance', 'Internship programs'];

  return (
    <section
      id='careers'
      className='flex sm:flex-row flex-col sm:gap-[332px] border-b-[1px] px-[22px] border-[#515151] sm:px-[120px] py-[60px]'
    >
      <h1 className='text-[#008557] sm:text-[64px] text-[28px] mb-[30px] sm:mb-0'>
        CAREERS
      </h1>
      <div className='flex flex-col gap-[30px] sm:gap-[40px]'>
        <p className='sm:text-[20px] text-[16px]'>
          We offer dynamic career opportunities across multiple sectors. Learn
          how you can shape the future with CrossBridge.
        </p>
        <div>
          {parts.map((part, i) => (
            <div
              key={i}
              style={{
                borderBottom:
                  i !== parts.length - 1 ? 'none' : '1px solid white',
              }}
              className='sm:py-[32.5px] py-[15px] sm:px-[24px] border-t-[1px] border-white flex justify-between items-center'
            >
              <p className='sm:text-[26px] text-[18px]'>{part}</p>
              <div className='border-[1px] border-white rounded-[100%] p-[8px] sm:p-[17px]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='16'
                  viewBox='0 0 18 16'
                  fill='none'
                >
                  <path
                    d='M17.3171 2.08687C17.3652 1.53669 16.9582 1.05166 16.408 1.00352L7.44229 0.21912C6.89211 0.170985 6.40708 0.577976 6.35894 1.12816C6.31081 1.67834 6.7178 2.16337 7.26798 2.21151L15.2375 2.90875L14.5403 10.8783C14.4922 11.4285 14.8991 11.9135 15.4493 11.9617C15.9995 12.0098 16.4845 11.6028 16.5327 11.0526L17.3171 2.08687ZM1 14.8555L1.64279 15.6215L16.9637 2.76576L16.3209 1.99972L15.6781 1.23367L0.357212 14.0894L1 14.8555Z'
                    fill='white'
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
