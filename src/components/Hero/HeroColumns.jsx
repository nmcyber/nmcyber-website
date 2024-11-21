import { motion } from 'framer-motion';
import { GradientButton } from '../shared/GradientButton';

export const RightColumn = () => {
  const rotationVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 200,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="relative flex flex-row justify-center items-center w-full md:w-5/12 mt-8 md:mt-0">
      <div className="absolute z-[-50] inset-0 flex items-center justify-center overflow-hidden">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 800 800"
          fill="currentColor"
          className="w-full h-full text-tertiary opacity-30"
          variants={rotationVariants}
          animate="animate"
        >
          {Array.from(Array(720).keys()).map((dot, index, array) => {
            const angle = 0.2 * index;
            const scalar = 40 + index * (360 / array.length);
            const x = Math.round(Math.cos(angle) * scalar);
            const y = Math.round(Math.sin(angle) * scalar);

            return (
              <circle
                key={index}
                r={(3 * index) / array.length}
                cx={400 + x}
                cy={400 + y}
                opacity={1 - Math.sin(angle)}
              />
            );
          })}
        </motion.svg>
      </div>
      
    </div>
  );
};

export const LeftColumn = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col justify-between gap-4 bg-blend-exclusion text-center md:text-start pb-0 w-full md:w-7/12 2xl:w-6/12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="font-jarkata hero-text-gradient-clip text-white text-4xl md:text-5xl lg:text-7xl xl:text-6xl 2xl:text-7xl lg:leading-tight xl:leading-snug 2xl:leading-[6rem] font-semibold pb-3"
        variants={itemVariants}
      >
        Empowering You To Thrive In And With Cybersecurity
      </motion.h1>
      <motion.p 
        className="font-poppins font-light text-xs sm:text-sm md:text-base lg:text-lg"
        variants={itemVariants}
      >
        At <span className="bg-clip-text text-md sm:text-lg md:text-xl font-medium text-transparent bg-gradient-to-r from-[#64CDF6] to-[#1e5a72] via-violet-400">NMCYBER</span>&#44; we pride in turning your workforce into cyber
        warriors. Our innovative approach to cybersecurity awareness and
        training doesn&apos;t just protect your data, <span className="2xl:block">it transforms your entire organisation.</span>
      </motion.p>
      <motion.div 
        className="flex justify-center md:justify-start gap-10 items-center mt-4"
        variants={itemVariants}
      >
        <GradientButton className='relative font-semibold px-6 py-2 sm:px-7 sm:py-3 md:px-8 md:py-4 text-base sm:text-lg rounded-3xl shadow-2xl  overflow-hiddenn group'>
          Secure Your Business
        </GradientButton>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative grid w-full bg-color-1 min-h-[90dvh] py-16 sm:py-24 md:py-32">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-wrap gap-x-5 h-full relative z-20 mx-auto">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </section>
  );
};

export default Hero;