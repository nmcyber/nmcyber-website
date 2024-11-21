import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { GradientButton } from "../shared/GradientButton";

export const FeatureCard = ({ item, index }) => {
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
        className="relative overflow-hidden bg-white/5 backdrop-blur-lg rounded-lg p-6 text-center hover:bgg-white/10 transition-colors duration-300 outline outline-lime-600 group"
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
          <GradientButton children={"see more"} className="relative font-semibold px-6 py-2 ~text-sm/lg rounded-full overflow-hidden " />
        </div>
      </motion.div>
    );
  };