import pic1 from '/public/pic8.webp';
import pic2 from '/public/pic9.webp';
import pic3 from '/public/pic10.webp';
import Image from 'next/image';

const Sustainability = () => {
  return (
    <section
      id='sustainability'
      className='
        w-full
        h-min-[100vh]
        flex
        flex-col
        md:border-b-[1px] md:border-[#515151]
        pt-[60px] md:pt-[100px] pl-[22px]
        lg:p-[120px]
        2xl:p-[160px]
        md:p-[64px]
        2xl:gap-[60px]
        gap-[30px] md:gap-[20px] lg:gap-[60px]
      '
    >
      <div className='flex flex-col sm:flex-row sm:gap-[30px] md:gap-[52px] lg:gap-[132px]'>
        <h1 className='text-[#008557]! sm:text-white! md:text-[36px] text-[28px] lg:text-[48px] 2xl:text-[96px] xl:text-[64px]'>
          SUSTAINABILITY
        </h1>
        <p className='w-auto sm:w-[415px] md:text-[14px] sm:text-[16px] 2xl:text-[24px] lg:text-[20px]'>
          We are committed to sustainability through environmental stewardship,
          community empowerment, and responsible innovation.
        </p>
      </div>

      <div className='overflow-x-auto lg:overflow-hidden pr-[22px]'>
        <div className='flex flex-nowrap gap-[30px] justify-between h-[100%]'>
          {[pic1, pic2, pic3].map((pic, i) => (
            <div
              key={i}
              className='
                flex-none
                lg:flex-1/3
                flex flex-col
                gap-[14px] lg:gap-[16px]
                w-[230px] lg:w-auto
              '
            >
              <Image
                src={pic}
                alt={`pic${i + 1}`}
                className='h-[244px] 2xl:h-[499px] xl:h-[385px] object-cover'
              />
              <p className='text-[16px] sm:text-[20px] 2xl:text-[30px]'>
                {
                  [
                    'Emission reduction strategies',
                    'Renewable energy projects',
                    'Social initiatives',
                  ][i]
                }
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
