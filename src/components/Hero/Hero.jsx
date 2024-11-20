import React from 'react';
import { motion } from 'framer-motion';
import { poster, circuit, largeEllipse, smallEllipse, binariesImage, worldGlobe, cyberWaves, inverseCyberWaves } from "@/assets";
import SectionWrapper from '../shared/SectionWrapper';
import { LeftColumn, RightColumn } from './HeroColumns';
import TrustedPartners, { Logos3 } from './TrustedPartners';

const Hero = () => {
  return (
    <SectionWrapper
    className='overflow-hidden'
      images={[
        {
          src: circuit,
          alt: 'Circuit',
          style: { objectFit: 'cover' },
          position: 'absolute top-[15%] left-[50%] z-20 opacity-80',
          className: 'aspect-square w-[300px] h-[300px] p-0 rounded-full overflow-hidden',
        },
        {
          src: smallEllipse,
          alt: 'Small Ellipse',
          position: 'absolute top-[5%] left-[43%] z-10 opacity-70 ',
        },
        {
          src: largeEllipse,
          alt: 'Large Ellipse',
          position: 'absolute top-[10%] left-[80%] opacity-50 -z-[5]',
        },
        {
          src: binariesImage,
          alt: 'Large Ellipse',
          style: { objectFit: 'contain' },
          position: 'absolute top-[1%] right-0 z-30',
          className: 'aspect-squaree ~w-48/72 opacity-70 overflow-hidden',
        },
      ]}
    >
      <section className="relative grid w-full bg-color-1 2xl:min-h-[100dvh] ~pt-4/32 max-lg:pt-36 overflow-hidden border-0 border-fuchsia-500">
        <div className=" relative w-full px-4 sm:px-8 lg:px-16 xl:px-24 outline-0 outline-lime-400">
          <div className=" flex flex-col sm:flex-col md:flex-row gap-x-5 h-full relative z-40 mx-auto border-0 border-lime-400 ">
            <LeftColumn />
            <RightColumn />
          </div>
        </div>
          <>
      <TrustedPartners />
          </>
      </section>
      {/* <Logos3 /> */}
          <GradientOverlay />
    </SectionWrapper>
  );
};


const GradientOverlay = () => (
  <div 
  style={{
    animation: 'slide 30s ease-in-out infinite',
    backgroundImage: ` url(${inverseCyberWaves})`,
    backgroundPosition: 'bottom center',
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'cover',
    opacity: 0.8,
    zIndex: 15 
    }}
  className="absolute z-[11] -bottom-[20%] left-0 w-full h-2/3 bg-gradient-to-t from-background to-transparent " />
);

export default Hero;