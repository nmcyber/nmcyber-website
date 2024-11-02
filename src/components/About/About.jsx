import { circuit, cyberlogo, largeEllipse, smallEllipse } from "@/assets";
import SectionWrapper from "../shared/SectionWrapper";
import Accordian from "./Accordian";
import Counter from "./Counter";

const About = () => {
  return (
    <SectionWrapper
      images={[
        {
          src: circuit,
          position:
            "absolute top-[5%] left-[50%] z-20 opacity-90 aspect-square w-[300px] h-[300px] p-0 rounded-full overflow-hidden outline-0 outline-green-600",
          style: { objectFit: "cover", height: "300px", width: "300px" },
          alt: "Small Ellipse",
        },
        {
          src: smallEllipse,
          position: "absolute top-[5%] left-[43%] z-10",
          alt: "Small Ellipse",
        },
        {
          src: largeEllipse,
          position: "absolute top-[10%] left-[80%] z-10",
          alt: "Large Ellipse",
        },
      ]}
    >
      <div className='flex flex-col relative z-30 gap-x-6 w-full px-8 lg:px-16 xl:px-24  '>
        <div>
          <Counter />
        </div>
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
