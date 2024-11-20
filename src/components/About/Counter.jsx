import React from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { countUp } from "../../Constants/index";
import { belmontAward, securityLogo } from "@/assets";
import { Badge } from "../ui/badge";
import SectionWrapper from "../shared/SectionWrapper";

const AnimatedNumber = ({ number }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <span ref={ref}>
      {isInView ? (
        <CountUp
          start={0}
          end={number}
          duration={2.5}
          separator=","
        />
      ) : (
        "0"
      )}
    </span>
  );
};

const Counter = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-16 border-none outline-none overflow-hiddenn ">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col sm:flex-row flex-wrap gap-8 bg-transparent relative z-40"
      >
      {/* award winning */}
        <motion.div
          variants={itemVariants}
          className=" relative min-w-1/2 bg-[rgba(0,21,48,0.51)] rounded-lg p-5 flex flex-col sm:flex-row items-center gap-4 hover:bg-[rgba(0,21,48,0.6)] transition-colors duration-300"
        >
          <motion.img
            src={belmontAward}
            alt="Security Logo"
            className="w-40 h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
          <Badge className=" absolute inset-0- text-sm ssm:text-3xl font-normal text-white text-center sm:text-left"
            variants={itemVariants} >
          Award Winning
          </Badge>
          {/* <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-left"
            variants={itemVariants}
          >
            Award Winning
          </motion.h2> */}
        </motion.div>
      {/* COUNTER  */}
        <motion.div
          variants={itemVariants}
          className="flex-1 min-w-[300px]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {countUp.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                // hover:bg-[rgba(0,21,48,0.3)]
                className="text-center p-4 rounded-lg transition-colors duration-300"
              >
                <h3 className="text-4xl sm:text-5xl text-tertiary cursor-pointer font-bold mb-2 flex justify-center items-center">
                  <AnimatedNumber number={item.num} />
                  <span className="ml-1">+</span>
                </h3>
                <p className="text-lg sm:text-xl cursor-pointer text-white font-semibold">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>

      {/* Background layers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute z-20 inset-0 bg-[rgba(0,21,48,0.51)]"
      />
      <motion.div
        initial={{ backdropFilter: "blur(0px)" }}
        animate={{ backdropFilter: "blur(80.5px)" }}
        transition={{ duration: 1.2 }}
        className="absolute z-30 inset-0"
      />
    </section>
  );
};

export default Counter;