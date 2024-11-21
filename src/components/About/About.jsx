import { binaries, cyberlogo, largeEllipse, smallEllipse } from "@/assets";
import SectionWrapper from "../shared/SectionWrapper";
import Counter from "./Counter";
import AccordionSection from "./Accordian";
import ThreeAnimation from "./ThreeAnimation";
import WordsAnimation from "./WordsAnimation";
import BinaryRain from "./CyberRain";
import CSSBinaryRain from "./CSSBinaryRain"
import './CSSBinaryRain.css'

const About = () => {
  return (
    <>
    <Counter />
    <SectionWrapper
      images={[
        {
          src: binaries,
          className: ' ~w-72/96 opacity-30 ',
          position:
            "absolute top-[10%] right-[30%] z-20 outline-0 outline-green-600",
          style: { objectFit: "cover" },
          alt: "Small Ellipse",
        },
        {
          src: smallEllipse,
          className: ' aspect-square ~w-16/48 ',
          position: "absolute -top-[9%] left-[43%] -z-[80]",
          alt: "Small Ellipse",
        },
        {
          src: largeEllipse,
          position: "absolute top-[10%] left-[80%] z-10",
          alt: "Large Ellipse",
        },
      ]}
    >
    
    <div className='flex flex-col min-h-auto relative gap-x-6 w-full py-12/16 md:py-4/24 px-8 lg:px-16 xl:px-24 border-0 border-orange-500'>
        <div className='flex relative flex-col md:flex-row gap-x-8'>
          <div className='w-full z-30  md:w-1/2 mb-8 md:mb-0'>
            <AccordionSection />
          </div>
          <div className='flex flex-col z-20 justify-center text-[#64cdf6]/20 items-center w-full md:w-1/2 h-[500px] md:h-auto'>
            <BinaryRain />
            {/* <CSSBinaryRain /> */}
            {/* <div className='w-full h-3/4 mb-4'>
            </div> */}
            {/* <div className='w-full h-1/4'>
              <WordsAnimation />
            </div> */}
          </div>
        </div>
      </div>
    </SectionWrapper>
    </>
  );
};

export default About;
