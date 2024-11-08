import { motion } from "framer-motion";
import { worldMap } from "@/assets";

const WorldMap = () => (
  <section className="relative z-10  w-full px-8 lg:px-16 xl:px-24">
    <motion.div className="relative my-14 flex h-full">
      <img
        src={worldMap}
        alt="map"
        className="w-full h-full object-fill "
      />

      <div className="absolute bottom-[17%] right-[18%] size-3 lg:size-4  p-[6px] rounded-full bg-white animate-blink "></div>

      <div className="absolute top-[16%]  left-[13%] size-3 lg:size-4 p-[6px] rounded-full bg-white animate-blink  "></div>

      <div className="absolute top-[43%] right-[36%] size-3 lg:size-4 p-[6px] rounded-full bg-white animate-blink"></div>

      <div className="absolute top-[56%] left-[51%] size-3 lg:size-4 p-[6px] rounded-full bg-white animate-blink"></div>
    </motion.div>
  </section>
);

export default WorldMap;
