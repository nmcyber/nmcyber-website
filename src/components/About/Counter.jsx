import { useState } from "react";
import { countUp } from "../../Constants/index";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { cyberlogo } from "@/assets";
import SectionWrapper from "../shared/SectionWrapper";

const Counter = () => {
  const [visible, setVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setVisible(true);
    }
  };

  return (
    // <SectionWrapper
      // images={[
      //   {
      //     src: ' ',
      //     // alt: "Small Ellipse",
      //     position:
      //       "absolute top-[5%] left-[50%] z-20 opacity-90 aspect-square w-[300px] h-[300px] p-0 rounded-full overflow-hidden outline-0 outline-green-600",
      //     // style: { objectFit: "cover", height: "300px", width: "300px" },
      //   },
      //   {
      //     src: ' ',
      //     // alt: "Small Ellipse",
      //     position: "absolute top-[5%] left-[43%] z-10",
      //   },
      //   {
      //     src: ' ',
      //     // alt: "Large Ellipse",
      //     position: "absolute top-[10%] left-[80%] z-10",
      //   },
      // ]}
    // >
    <section className=" relative w-full px-8 lg:px-16 xl:px-24 py-6">
      <div className="flex gap-x-20 flex-wrap relative z-30 ">
        <div className="flex bg-n-5 rounded-md w-[40%] p-5 max-lg:w-full max-lg:justify-center max-lg:items-center">
          <div>
            <img src={cyberlogo} alt="Banner" width={250} />
          </div>
          <div className=" flex items-center justify-center font-jarkata text-[32px] text-n-1 font-bold ">
            <h1>Our Impact With You</h1>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-[50%] ">
          <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 p-4 ">
            {countUp.map((item, i) => (
              <div className="" key={i}>
                <h1 className=" flex items-center justify-center text-[54px] text-color-2 font-bold ">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    partialVisibility
                  >
                    <CountUp
                      end={visible ? item.num : 0}
                      duration={7}
                      redraw={true}
                    />
                  </VisibilitySensor>
                  <h1>+</h1>
                </h1>
                <h3 className=" font-jarkata text-[24px] text-center font-semibold text-n-2">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* overlay theme color and overlay blur */}
      <div className="absolute z-20 inset-0 bg-[rgba(0,21,48,0.51)] "></div>
      <div className="absolute z-[11] inset-0 backdrop-blur-[80.5px] outline-0 outline-lime-300 "></div>
    </section>
    // </SectionWrapper>
  );
};

export default Counter;
