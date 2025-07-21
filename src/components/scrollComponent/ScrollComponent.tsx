'use client';

import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollComponent = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    const wrapper = document.querySelector('#scroll-wrapper');
    const content = document.querySelector('#scroll-content');
    if (!wrapper || !content) return;

    const smoother = ScrollSmoother.create({
      wrapper: '#scroll-wrapper',
      content: '#scroll-content',
      smooth: 1.2,
      normalizeScroll: false,
      effects: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div
      id='scroll-wrapper'
      style={{
        overflow: 'visible',
        height: '100vh',
      }}
    >
      <div
        id='scroll-content'
        style={{
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollComponent;
