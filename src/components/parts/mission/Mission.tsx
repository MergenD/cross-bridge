'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import first from '/public/pic5.webp';
import second from '/public/pic12.webp';
import third from '/public/pic6.webp';
import fourth from '/public/pic11.webp';

const cards = [
  {
    img: first.src,
    text: 'Deliver high-quality energy and petrochemical products through responsible and efficient operations',
  },
  {
    img: third.src,
    text: 'Build scalable IT solutions that support business and government transformation',
  },
  {
    img: second.src,
    text: 'Ensure dependable access to raw materials for critical industries.',
  },
  {
    img: fourth.src,
    text: 'Foster sustainability, integrity, and long-term impact in everything we do',
  },
];

export default function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [height, setHeight] = useState('100vh');
  const isMobile = window && window.outerWidth < 769;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 20%', 'end 90%'],
  });
  const x = useTransform(
    scrollYProgress,
    [0.15, 0.85],
    [0, -(scrollWidth ?? 0)]
  );

  console.log(window);

  useEffect(() => {
    if (innerRef.current) {
      const totalWidth = innerRef.current.scrollWidth;
      const viewportWidth = innerRef.current.offsetWidth;
      const scrollable = totalWidth - viewportWidth;
      setScrollWidth(scrollable);
      if (window) {
        const extra = window.innerHeight * 0.3;
        setHeight(`${scrollable + window.innerHeight + extra}px`);
      }
    }
  }, []);

  return (
    <section
      id='mission'
      ref={containerRef}
      className='w-full border-t border-[#474747] pt-[60px] px-[22px] md:px-[64px] sm:px-[120px]'
      style={{ height: !isMobile ? height : 'auto' }}
    >
      <div className='hidden lg:block sticky top-0 overflow-hidden h-screen'>
        <h1 className='sticky top-0 z-20 text-[#008557] sm:text-white sm:text-[64px] text-[28px] py-4 mb-8'>
          OUR MISSION
        </h1>
        <motion.div
          ref={innerRef}
          className='flex gap-[40px] cursor-grab pt-[20px]'
          style={{ x }}
        >
          {cards.map((card, idx) => {
            const baseScale = 0.9;
            const activeScale = baseScale + 0.1;
            return (
              <motion.div
                key={idx}
                initial={{ scale: baseScale }}
                whileInView={{ scale: activeScale }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                viewport={{ amount: 0.6, once: false }}
                className='relative h-[712px] w-[648px] flex-shrink-0 bg-cover bg-center rounded-2xl overflow-hidden'
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%), url(${card.img})`,
                }}
              >
                <p className='absolute bottom-0 left-0 w-full text-white sm:text-[30px] text-[14px] p-[48.5px] pb-[100px]'>
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className='sm:h-full md:h-auto xl:hidden mt-[20px]'>
        <h1 className='text-[#008557] text-[28px]'>OUR MISSION</h1>
        <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 gap-[20px]'>
          {cards.map((card, idx) => (
            <div
              key={idx}
              className='relative w-full h-[350px] bg-cover bg-center overflow-hidden mt-[20px] md:mt-[0]'
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%), url(${card.img})`,
              }}
            >
              <p className='absolute bottom-0 left-0 w-full text-white text-[14px] p-[30px]'>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
