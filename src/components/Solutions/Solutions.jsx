import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { circuit, largeEllipse, loops, smallEllipse, spiralLoop } from "@/assets";
import { services } from "../../Constants";
import { Button } from "../ui/button";
import SectionWrapper from "../shared/SectionWrapper";

const FeatureCard = ({ item, index }) => {
  const cardRef = useRef();

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="relative overflow-hidden bg-white/5 backdrop-blur-lg rounded-lg p-6 text-center hover:bgg-white/10 transition-colors duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/*  bg-gradient-to-r from-blue-500/20 to-purple-500/20 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.1),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <motion.img
          className="w-32 h-32 object-contain mb-6 mx-auto"
          src={item.img}
          alt={item.service}
          whileHover={{ rotate: 5 }}
        />
        <h3 className="text-xl font-semibold mb-4 text-white">{item.service}</h3>
        <Button
          className="font-semibold px-6 py-2 text-lg rounded-full bg-gradient-to-r from-tertiary to-color-4 text-white hover:from-color-4 hover:to-tertiary transition-all duration-300"
        >
          See More
        </Button>
      </div>
    </motion.div>
  );
};

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
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative container z-30 w-full px-4 sm:px-8 lg:px-16 xl:px-24 font-jakarta py-16 md:py-24"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <FeatureCard key={index} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Solutions;