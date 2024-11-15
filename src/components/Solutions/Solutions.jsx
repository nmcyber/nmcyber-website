import React from "react";
import { motion } from "framer-motion";
import { circuit, largeEllipse, loops, smallEllipse, spiralLoop } from "@/assets";
import { services } from "../../Constants";
import SectionWrapper from "../shared/SectionWrapper";
import { Button } from "../ui/button";

const Solutions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <SectionWrapper
      images={[
        {
          src: spiralLoop,
          className: 'w-1/2 h-full opacity-60',
          position: 'absolute top-[5%] left-0 z-20 opacity-90 overflow-hidden outline-0 outline-green-600',
          style: { objectFit: 'cover' },
          alt: 'Spiral Loop Left',
        },
        {
          src: spiralLoop,
          className: 'w-1/2 h-full opacity-60 transform scale-x-[-1]',
          position: 'absolute top-[30%] right-0 z-20 opacity-90 overflow-hidden outline-0 outline-green-600',
          style: { objectFit: 'cover' },
          alt: 'Spiral Loop Right',
        },
        {
          src: smallEllipse,
          className: 'w-1/4 opacity-60',
          position: 'absolute top-[14%] left-[35%] z-10',
          alt: 'Small Ellipse',
        },
        {
          src: largeEllipse,
          className: 'w-1/3 opacity-60',
          position: 'absolute top-[10%] left-[80%] z-10',
          alt: 'Large Ellipse',
        },
      ]}
    >
      <motion.div
        className="relative container z-30 w-full ~px-16/4 lg:px-0 font-jakarta py-16 md:py-24"
        // sm:px-8 lg:px-16 xl:px-24
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className=" text-center mb-12">
          <h3 className="text-sm md:text-base text-tertiary mb-2">&ndash;NMCYBER SOLUTIONS</h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-n-2">
            Our Cybersecurity Solutions
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 outline-0 outline-orange-600"
          variants={containerVariants}
        >
          {services.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white py-6 bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:cursor-pointer outline-0 outline-fuchsia-600"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 flex flex-col gap-4 items-center">
                <motion.img
                  className="w-32 h-32 object-contain mb-6"
                  src={item.img}
                  alt={item.service}
                  whileHover={{ rotate: 5 }}
                />
                <h2 className="text-xl font-semibold text-n-2 mb-4 text-center line-clamp-none md:line-clamp-1 ">{item.service}</h2>
                <Button
                  className="font-semibold px-6 py-2 text-lg rounded-full bg-gradient-to-r from-tertiary to-color-4 text-white hover:from-color-4 hover:to-tertiary transition-all duration-300"
                >
                  See More
                </Button>
              </div>
              <div className="glow-after" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Solutions;