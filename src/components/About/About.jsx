import { binaries, cyberlogo, largeEllipse, smallEllipse } from "@/assets";
import SectionWrapper from "../shared/SectionWrapper";
import Accordian from "./Accordian";
import Counter from "./Counter";

const About = () => {
  return (
    <SectionWrapper
      images={[
        {
          src: binaries,
          className: ' ~w-72/96 opacity-90 ',
          position:
            "absolute top-[10%] right-[30%] z-20 overflow-hidden outline-0 outline-green-600",
          style: { objectFit: "cover" },
          alt: "Small Ellipse",
        },
        {
          src: smallEllipse,
          className: ' aspect-square ~w-16/48 ',
          position: "absolute -top-[9%] left-[43%] z-[10]",
          alt: "Small Ellipse",
        },
        {
          src: largeEllipse,
          position: "absolute top-[10%] left-[80%] z-10",
          alt: "Large Ellipse",
        },
      ]}
    >
      <div className='flex flex-col min-h-auto relative z-30 gap-x-6 w-full ~py-12/16 md:~py-4/24 px-8 lg:px-16 xl:px-24 border-0 border-orange-500 '>
        {/* <div>
          <Counter />
        </div> */}
        <div className=' flex'>
          <>
            <Accordian />
          </>
          <div className='flex justify-center items-center w-3/5 max-md:hidden'>
            <img src={cyberlogo} alt='cyberlogo' width={350} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
