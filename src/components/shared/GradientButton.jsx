import { motion } from 'framer-motion';

export const GradientButton = ({ children }) => (
    <motion.button
      className="relative font-semibold px-6 py-4 text-lg rounded-full overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 text-white">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-l from-[#64cdf6] to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 backdrop-blur-md bg-transparent"></div>
    </motion.button>
  );