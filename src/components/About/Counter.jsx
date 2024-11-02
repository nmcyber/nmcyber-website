import { useState } from "react";
import { countUp } from "../../Constants/index";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { cyberlogo } from "@/assets";

const Counter = () => {
  const [visible, setVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setVisible(true);
    }
  };

  return (
    <section className="w-full px-8 lg:px-16 xl:px-24 py-6">
      <div className="flex gap-x-20  flex-wrap ">
        <div className="flex bg-n-5 rounded-md w-[40%] p-5 max-lg:w-full max-lg:justify-center max-lg:items-center">
          <div>
            <img src={cyberlogo} alt="Banner" width={250} />
          </div>
          <div className=" flex items-center justify-center font-jarkata text-[32px] text-n-1 font-bold ">
            <h1>Our Impact With You</h1>
          </div>
        </div>
        <div className="flex items-center justify-center  lg:w-[50%] ">
          <div className="flex gap-x-6 p-4 ">
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
    </section>
  );
};

export default Counter;
