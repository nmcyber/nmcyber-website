import React from "react";
import CountUp from "react-countup";
import { motion, useSpring, useInView, useAnimationControls } from "framer-motion";
import { countUp } from "../../Constants/index";
import { securityLogo } from "@/assets";

const AnimatedNumber = ({ number }) => {
  const controls = useAnimationControls();
  const isInView = useInView({
    once: true,
    margin: "0px 0px -100px 0px"
  });

  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  React.useEffect(() => {
    if (isInView) {
      springValue.set(number);
    }
  }, [isInView, number, springValue]);

  return <motion.span>{Math.round(springValue.get())}</motion.span>;
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
    <section className="relative w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-16 overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-wrap gap-8 relative z-30"
      >
        <motion.div
          variants={itemVariants}
          className="flex-1 min-w-[300px] bg-[rgba(0,21,48,0.51)] rounded-lg p-5 flex flex-col sm:flex-row items-center gap-4 hover:bg-[rgba(0,21,48,0.6)] transition-colors duration-300"
        >
          <motion.img
            src={securityLogo}
            alt="Security Logo"
            className="w-40 h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-left"
            variants={itemVariants}
          >
            Award Winning
          </motion.h2>
        </motion.div>

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
                className="text-center p-4 rounded-lg hover:bg-[rgba(0,21,48,0.3)] transition-colors duration-300"
              >
                <h3 className="text-4xl sm:text-5xl text-tertiary font-bold mb-2 flex justify-center items-center">
                  <AnimatedNumber number={item.num} />
                  <span className="ml-1">+</span>
                </h3>
                <p className="text-lg sm:text-xl text-white font-semibold">
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
        className="absolute z-10 inset-0"
      />
    </section>
  );
};

export default Counter;