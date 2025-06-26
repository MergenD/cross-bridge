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
        sm:border-b-[1px] sm:border-[#515151]
        pt-[60px] pl-[22px]
        sm:p-[120px]
        gap-[30px] sm:gap-[60px]
      '
    >
      <div className='flex flex-col sm:flex-row gap-[30px] sm:gap-[132px]'>
        <h1 className='text-[#008557]! sm:text-white!  text-[28px] sm:text-[64px]'>
          SUSTAINABILITY
        </h1>
        <p className='w-[334px] sm:w-[415px] text-[16px] sm:text-[20px]'>
          We are committed to sustainability through environmental stewardship,
          community empowerment, and responsible innovation.
        </p>
      </div>

      <div className='overflow-x-auto sm:overflow-hidden pr-[22px]'>
        <div className='flex flex-nowrap gap-[30px] h-[100%] w-max'>
          {[pic1, pic2, pic3].map((pic, i) => (
            <div
              key={i}
              className='
                flex-none
                flex flex-col
                gap-[14px] sm:gap-[16px]
                w-[223px] sm:w-[380px]
              '
            >
              <Image
                src={pic}
                alt={`pic${i + 1}`}
                className='w-[223px] h-[244px] sm:w-auto sm:h-[385px] object-cover'
              />
              <p className='text-[16px] sm:text-[20px]'>
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
