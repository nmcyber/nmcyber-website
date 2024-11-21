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
    <div ref={containerRef} className=" absolute inset-0 z-10 flex flex-col gap-y-2 items-center justify-center h-full capitalize font-bold text-4xl sm:text-5xl md:text-6xl ">
            <span className="text-gradient-clip text-[#64cdf6]">discover&#46; </span>
            <span className="text-gradient-clip text-[#64cdf6]">transform&#46; </span>
            <span className="text-gradient-clip text-[#64cdf6]">thrive&#46;</span>
        {/* <h1 className="text-wrap capitalize font-bold text-4xl sm:text-5xl md:text-6xl">
          </h1> */}
    </div>
  );
};

export default WordsAnimation;