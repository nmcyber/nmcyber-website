import React from "react";
import { motion } from "framer-motion";
import { copyright, logo } from "@/assets";
import { FaArrowRight } from "react-icons/fa";
import { contactInfo, navigation, socialMedia } from "@/Constants";
import SectionWrapper from "../shared/SectionWrapper";

const Footer = () => {
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
    hidden: { y: 20, opacity: 0 },
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
    <SectionWrapper>
      <footer className="relative z-30 container mt-2 lg:mt-6 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap -mx-4"
        >
          <motion.div variants={itemVariants} className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              <img src={logo} alt="logo" className=" w-[180px]" />
              <div>
                <h2 className="text-2xl font-bold">
                  NM<span className="text-tertiary">CYBER</span>
                </h2>
                <p className="text-sm">Empowering You To Thrive</p>
              </div>
            </div>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  name="email"
                  placeholder="Subscribe to Newsletter"
                  className="w-full p-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-tertiary"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="p-3 bg-tertiary rounded-r-full hover:bg-opacity-90 transition-colors duration-300"
                  aria-label="Subscribe"
                >
                  <FaArrowRight className="text-white w-5 h-5" />
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              {socialMedia.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full hover:bg-tertiary transition-colors duration-300"
                  aria-label={`Visit our ${item.name} page`}
                >
                  <img src={item.img} alt={item.name} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <h3 className="text-xl font-semibold text-tertiary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-lg hover:text-tertiary transition-colors duration-300"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full lg:w-1/3 px-4">
            <h3 className="text-xl font-semibold text-tertiary mb-4">Contact Info</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center">
                  <img src={item.icon} alt="" className="w-5 h-5 mr-2" />
                  <span className="text-lg">{item.desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.hr
          variants={itemVariants}
          className="my-8 border-tertiary"
        />

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center text-sm"
        >
          <img src={copyright} alt="copyright" className="w-4 h-4 mr-2" />
          <p>2024 NMCyber. All Rights Reserved</p>
        </motion.div>
      </footer>
    </SectionWrapper>
  );
};

export default Footer;