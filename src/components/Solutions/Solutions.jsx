import { circuit, largeEllipse, smallEllipse } from "@/assets";
import { services } from "../../Constants";
import SectionWrapper from "../shared/SectionWrapper";
import { Button } from "../ui/button";

const Solutions = () => {
  return (
    <SectionWrapper
    images={[
      {
        src: circuit,
        position: 'absolute top-[5%] left-[50%] z-20 opacity-90 aspect-square w-[300px] h-[300px] p-0 rounded-full overflow-hidden outline-0 outline-green-600',
        style: { objectFit: 'cover', height: '300px', width: '300px' },
        alt: 'Small Ellipse',
      },
      {
        src: smallEllipse,
        position: 'absolute top-[5%] left-[43%] z-10',
        alt: 'Small Ellipse',
      },
      {
        src: largeEllipse,
        position: 'absolute top-[10%] left-[80%] z-10',
        alt: 'Large Ellipse',
      },
    ]}
  >
      <div className=" relative z-30 w-full px-8 lg:px-16 xl:px-24 lg:py-16 font-jakarta border-0 border-orange-400 ">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-color-4 text-[18px]">-NMCYBER SOLUTIONS</h3>
          <h1 className="text-n-2 text-[50px] max-md:text-[40px] font-semibold">
            Our Cybersecurity Solutions
          </h1>
        </div>
        <div className="flex justify-between max-md:flex-wrap max-lg:py-8 xl:py-10 flex-shrink  ">
          {services.map((item, i) => (
            <div key={i} className="w-full m-2 ">
              <div className=" p-4 text-[21px] text-n-2 font-semibold flex flex-col gap-4 max-md:justify-center max-md:items-center  ">
                <img className="py-4 aspect-square w-48 h-48 min-md:w-52 min-md:h-52 self-center " src={item.img} alt="" />
                <h2 className="my-4 line-clamp-1 text-center outline-0 outline-fuchsia-500 ">{item.service}</h2>
                <div className=" flex justify-center m-4">
                <Button className=' font-semibold ~px-6/8 ~py-4/8 ~text-lg/2xl rounded-full bg-gradient-to-l from-[#64cdf6] to-transparent backdrop-blur-md bg-white/0'>See More</Button>
                  {/* <button className=" bg-gradient-to-r from-color-3 to-color-4 px-4 py-2 lg:px-8 lg:py-4 rounded-full ">
                    See More
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Solutions;
