import { motion } from 'framer-motion';
import { poster } from '@/assets';
import { GradientButton } from '../shared/GradientButton';

export const RightColumn = () => (
  <div className="flex flex-row justify-center items-center w-5/12 mt-8 md:mt-0 outline-0 outline-orange-400">
    <img className=" md:w-[85%] lg:w-[75%] h-auto " src={poster} alt="poster" width={850} />
  </div>
);

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
        className="flex flex-col justify-between gap-4 bg-blend-exclusion text-center md:text-start pb-0 w-full md:w-7/12 outline-0 outline-orange-400 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="font-jarkata text-gradient-clip text-white text-4xl md:text-5xl lg:text-7xl xl:text-6xl 2xl:text-8xl lg:leading-tight xl:leading-snug 2xl:leading-[6.4rem] font-medium pb-3"
          variants={itemVariants}
        >
          Empowering You To Thrive In And With Cybersecurity
        </motion.h1>
        <motion.p 
          className="font-poppins text-lg xl:text-xl"
          variants={itemVariants}
        >
          At NMCYBER&#44; we pride in turning your workforce into cyber
          warriors. Our innovative approach to cybersecurity awareness and
          training doesn&apos;t just protect your data, it transforms your entire
          organisation.
        </motion.p>
        <motion.div 
          className="flex justify-center md:justify-start gap-10 items-center mt-4"
          variants={itemVariants}
        >
          <GradientButton>Secure Your Business</GradientButton>
        </motion.div>
      </motion.div>
    );
  };