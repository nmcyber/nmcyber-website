import { useState } from "react";
import { accordion } from "@/Constants";
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from "lucide-react";

const Accordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        when: "beforeChildren"
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
        stiffness: 300,
        damping: 24
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  };

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto p-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="py-4" variants={itemVariants}>
        <h2 className="flex justify-between items-center w-full text-left text-sm font-medium text-tertiary">
          &ndash;WHY NMCYBER
        </h2>
        <div className="mt-4">
          <h1 className="text-white text-wrap capitalize font-bold font-jarkata text-4xl sm:text-5xl md:text-6xl">
            discover&#46; transform&#46; thrive&#46;
          </h1>
          <p className="mt-2 font-poppins text-lg">
            Our innovative approach to cybersecurity awareness and training
            doesn't just protect your data, it transforms your entire
            organisation.
          </p>
        </div>
      </motion.div>

      {accordion.map((pillar, index) => (
        <motion.div key={index} className="py-4 border-b border-slate-100/10 last:border-b-0" variants={itemVariants}>
          <button
            onClick={() => toggleSection(index + 1)}
            className="flex justify-between items-center w-fulll text-left text-xl font-medium text-tertiary capitalize transition-colors duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tertiary"
          >
            <motion.span
              initial={false}
              animate={{ rotate: openSection === index + 1 ? 45 : 0 }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {openSection === index + 1 ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
            </motion.span>
            <span className="flex items-center gap-x-2">
              {pillar.title}&#46;
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openSection === index + 1 && (
              <motion.div
                key={`content-${index}`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                className="mt-4 space-y-2 text-gray-300"
              >
                {pillar.content.map((paragraph, pIndex) => (
                  <motion.p
                    key={pIndex}
                    variants={itemVariants}
                    className="text-base leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Accordion;