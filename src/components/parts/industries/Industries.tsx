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
      className='w-full sm:min-h-screen sm:overflow-hidden sm:relative sm:pl-28 pt-[60px] sm:p-0 pl-[22px] pr-0'
    >
      <div className='flex sm:flex-row flex-col justify-between pb-[30px] sm:pb-14 sm:pr-[194px]'>
        <h1 className='text-[#008557] sm:text-6xl text-[28px] leading-none sm:mt-0 mt-[10px]'>
          OUR CORE INDUSTRIES
        </h1>
        <h2 className='sm:text-4xl sm:text-end text-[18px] sm:leading-none text-white'>
          ENERGY, CHEMICALS & COMMODITIES
        </h2>
      </div>

      <div className='relative w-full sm:h-[551px] h-[390px] flex gap-[40px] overflow-x-auto overflow-y-hidden sm:overflow-hidden sm:block [&_.group:hover~.group]:sm:translate-x-[620px]'>
        {cards.map((card, i) => {
          const isLast = i === cards.length - 1;
          const leftOffset = `${i * 15}%`;

          return (
            <div
              key={i}
              className={`
            group sm:absolute top-0
        sm:w-[478px] sm:h-full
        border border-white
        pr-[16px] sm:pr-[20px]
        flex sm:flex-row sm:justify-between flex-col bg-[#1A1A1A]/95 p-[20px] sm:p-6 text-white
        text-left
        ${zClasses[i]}
        transition-all duration-300 ease-in-out
        sm:hover:w-[840px] hover:z-50
        ${isLast ? 'hover:right-0 mr-[22px] sm:mr-0' : ''}
      `}
              style={{
                left: leftOffset,
              }}
            >
              <div
                className={`flex flex-col gap-[20px] sm:justify-between w-[273px] sm:w-[430px] h-full ${
                  isLast ? 'w-[100%]' : 'w-[60%]'
                }`}
              >
                <h3 className='sm:text-2xl text-[18px] font-medium sm:mb-2'>
                  {card.title}
                </h3>
                <p className='text-[12px] sm:text-sm sm:w-[430px] sm:mr-[30px]'>
                  {card.body}
                </p>
                <Image
                  src={card.photo}
                  alt={card.title}
                  className='sm:hidden w-full h-32 object-cover'
                />
              </div>
              <div
                className='
                relative
                w-[40%] h-full
                overflow-hidden
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
              '
              >
                {card.photo && (
                  <Image
                    src={card.photo}
                    alt={card.title}
                    className='w-full h-full object-cover hidden sm:block'
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
