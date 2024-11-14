import { motion } from "framer-motion";
import { worldMap, worldMapSvg } from "@/assets";

const WorldMap = () => (
  <section className="relative zz-0 -my-14 py-14 w-full px-8 lg:px-16 xl:px-24">
    <motion.div className="relative z-30 bg-transparent my-14  flex h-full">
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
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[rgba(0,21,48,0.51)] z-[20]"
      />
      <motion.div
        initial={{ backdropFilter: "blur(0px)" }}
        animate={{ backdropFilter: "blur(80.5px)" }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-[20]"
      />
  </section>
);

export default WorldMap;
