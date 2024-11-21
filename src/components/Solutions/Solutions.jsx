import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { largeEllipse, loops, smallEllipse, spiralLoop } from "@/assets";
import { services } from "../../Constants";
import SectionWrapper from "../shared/SectionWrapper";
import { GradientButton } from "../shared/GradientButton";
import { FeatureCard } from "./FeatureCards";

const Solutions = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <SectionWrapper
      images={[
        {
          src: spiralLoop,
          className: 'w-1/2 h-full opacity-60',
          position: 'absolute top-[5%] left-0 z-20 opacity-90 overflow-hidden',
          style: { objectFit: 'cover' },
          alt: 'Spiral Loop Left',
        },
        {
          src: spiralLoop,
          className: 'w-1/2 h-full opacity-60 transform scale-x-[-1]',
          position: 'absolute top-[30%] right-0 z-20 opacity-90 overflow-hidden',
          style: { objectFit: 'cover' },
          alt: 'Spiral Loop Right',
        },
        {
          src: smallEllipse,
          className: 'w-1/10 opacity-60',
          position: 'absolute top-[14%] left-[35%] z-10',
          alt: 'Small Ellipse',
        },
        {
          src: largeEllipse,
          className: 'w-1/8 opacity-60',
          position: 'absolute top-[10%] left-[80%] z-10',
          alt: 'Large Ellipse',
        },
      ]}
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative flex flex-col items-center z-40 md:w-full ~md:~px-12/24 font-jakarta ~py-12/24 mb-8 md:mb-0 ~md:~pb-8/36 border-2 border-orange-500"
        // md:~py-4/24
        // px-4 sm:px-8 lg:px-16 xl:px-24
      >
        <motion.div className="text-center mb-12">
          <motion.h3 
            className="text-sm md:text-base text-tertiary mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            &ndash;NMCYBER SOLUTIONS
          </motion.h3>
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Cybersecurity Solutions
          </motion.h1>
        </motion.div>

        <div className=" grid ~w-sm/screen grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 outline-o outline-lime-600">
          {services.map((item, index) => (
            <FeatureCard key={index} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Solutions;