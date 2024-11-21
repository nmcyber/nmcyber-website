import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const WordsAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const words = containerRef.current.children;
    
    gsap.set(words, { autoAlpha: 0, y: 50 });

    gsap.timeline({ repeat: -1 })
      .to(words, {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        stagger: 2,
        ease: "power3.out"
      })
      .to(words, {
        duration: 1,
        autoAlpha: 0,
        y: -50,
        stagger: 2,
        ease: "power3.in",
        delay: 1
      });
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center h-full">
      <h2 className="text-5xl font-bold text-white mb-4">Discover</h2>
      <h2 className="text-5xl font-bold text-white mb-4">Transform</h2>
      <h2 className="text-5xl font-bold text-white mb-4">Thrive</h2>
    </div>
  );
};

export default WordsAnimation;