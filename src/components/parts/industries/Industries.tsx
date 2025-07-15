import React from 'react';
import pic1 from '/public/pic13.webp';
import pic2 from '/public/pic14.webp';
import pic3 from '/public/pic7.webp';
import pic4 from '/public/pic15.webp';
import Image from 'next/image';

const cards = [
  {
    title: 'Energy: Oil & Gas',
    body: 'We engage in the sourcing, processing, and distribution of oil and natural gas, delivering reliable energy solutions that power industries and communities worldwide. Our upstream and midstream operations are built on efficiency, safety, and environmental responsibility.',
    photo: pic1,
  },
  {
    title: 'Petrochemicals',
    body: 'Our petrochemical division transforms hydrocarbons into essential industrial and consumer products. From high-performance polymers and durable polyesters to refined fuels like diesel and gasoline, we provide critical inputs for manufacturing, transportation, and infrastructure. Our CPC (Calcined Petroleum Coke) and bitumen support global construction and metallurgical needs.',
    photo: pic2,
  },
  {
    title: 'Drilling Chemicals',
    body: 'We supply advanced drilling fluid systems and specialty chemicals designed to optimize drilling performance, improve well integrity, and ensure safe, cost-effective operations. Our formulations are engineered to meet the technical demands of complex geological environments.',
    photo: pic3,
  },
  {
    title: 'Commodities',
    body: 'We engage in the sourcing, processing, and distribution of oil and natural gas, delivering reliable energy solutions that power industries and communities worldwide. Our upstream and midstream operations are built on efficiency, safety, and environmental responsibility.',
    photo: pic4,
  },
];

const zClasses = ['z-0', 'z-10', 'z-20', 'z-30'];

export default function Industries() {
  return (
    <section
      id='industries'
      className='w-full pb-[60px] lg:px-120px  md:px-[64px] pl-[22px] pr-[20px] pt-[60px] lg:pl-28 lg:p-0 lg:relative lg:min-h-screen lg:overflow-hidden'
    >
      <div className='flex flex-col justify-between pb-[30px] lg:flex-row lg:pb-14 lg:pr-[194px]'>
        <h1 className='text-[#008557]! text-[28px] leading-none mt-[10px] lg:text-white! 2xl:text-[96px] lg:text-6xl lg:mt-0'>
          OUR CORE INDUSTRIES
        </h1>
        <h2 className='text-[18px] text-white 2xl:text-[48px] lg:text-4xl lg:text-end lg:leading-none'>
          ENERGY, CHEMICALS & COMMODITIES
        </h2>
      </div>

      <div
        className='relative sm:w-full h-auto flex gap-[40px]
                   overflow-x-auto overflow-y-visible
                   md:grid md:grid-cols-2 md:grid-rows-2 md:gap-[40px] md:h-auto md:overflow-visible
                   lg:h-[551px] lg:overflow-hidden lg:block
                   [&_.group:hover~.group]:lg:translate-x-[620px]'
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className={`group flex-none
                        w-[273px]
                        md:w-[305px]
                        ${zClasses[i]}
                        border border-white bg-[#1A1A1A]/95 p-[20px] text-white text-left
                        transition-all duration-300 ease-in-out lg:flex lg:gap-[20px]
                        md:static
                        lg:absolute lg:top-0 lg:w-[478px] lg:h-full lg:pr-[20px] lg:flex-row lg:justify-between lg:p-6 2xl:hover:w-[925px] lg:hover:w-[840px] hover:z-50
                        ${
                          i === cards.length - 1
                          ? 'lg:hover:right-0 lg:mr-0'
                            : ''
                        }`}
            style={{ left: `${i * 15}%` }}
          >
            <div className='flex flex-col gap-[20px] lg:w-auto md:gap-[20px] md:justify-between w-full h-full'>
              <h3 className='text-[18px] font-medium md:text-2xl md:mb-2'>
                {card.title}
              </h3>
              <p className='text-[12px] md:text-sm lg:w-[430px]'>{card.body}</p>
              <Image
                src={card.photo}
                alt={card.title}
                className='lg:hidden w-full h-32 object-cover'
              />
            </div>

            <div className='hidden lg:block relative w-[340px] h-full overflow-hidden opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
              <Image
                src={card.photo}
                alt={card.title}
                className='w-[340px] h-full object-cover'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
