import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord, FaReddit, FaTelegram, FaLinkedin } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import Logo from "../shared/Logo";

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

  const footerLinks = [
    {
      title: "Services",
      items: [
        { name: "Cybersecurity Awareness" },
        { name: "Cybersecurity Readiness" },
        { name: "Candidate Screening" },
        { name: "Content Creation" },
        { name: "Risk Assessments" },
        { name: "Industry Training" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "On-Demand Courses" },
        { name: "Continuous Learning" },
        { name: "Help Center" },
      ],
    },
  ];

  return (
    <footer className="relative flex justify-center items-center ~pt-8/24 ~pb-2/6 outline-0 outline-orange-600 overflow-hidden ">
    {/* ---- FOOTER OUTLINE WITH CUSTOM TAILWIND CONFIG RADIUS ---- */}
      <div className=" before:absolute before:container before:mx-auto before:h-full before:z-30 before:top-10 before:left-auto md:before:outline md:before:outline-1 md:before:outline-tertiary before:rounded-t-xl ">
        <div className=" relative container z-30 mx-auto px-4 sm:px-6 lg:px-8  ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1">
              <Logo />
              <p className="text-zinc-400 mb-6">Empowering You To Thrive in the Digital World</p>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="text-zinc-400 hover:text-tertiary"><FaDiscord size={24} /></a>
                {/* <a href="#" className="text-zinc-400 hover:text-tertiary"><FaReddit size={24} /></a> */}
                <a href="#" className="text-zinc-400 hover:text-tertiary"><FaXTwitter size={24} /></a>
                {/* <a href="#" className="text-zinc-400 hover:text-tertiary"><FaTelegram size={24} /></a> */}
                <a href="#" className="text-zinc-400 hover:text-tertiary"><FaLinkedin size={24} /></a>
              </div>
            </motion.div>

            {footerLinks.map((section, index) => (
              <motion.div key={index} variants={itemVariants} className="col-span-1">
                <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-zinc-400 hover:text-tertiary">
                      <a href="#">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-zinc-400 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
              <form className="flex relative overflow-hidden flex-col space-y-2">
                <Input type="email" placeholder="Your email" className="bg-white/10 bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-[#64cdf6] focus:ring-color-4" />
                <button type="submit" className="bg-tertiary ~py-2/3 rounded-md text-white hover:bg-tertiary/90 bg-gradient-to-l from-[#64cdf6]/20 to-transparent via-[#64cdf6]/5 opacity-80 group-hover:opacity-100 transition-opacity duration-300">Subscribe</button>
              </form>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 ~pt-2/4 border-t text-sm border-zinc-800 flex flex-col md:flex-row justify-between items-center text-zinc-400"
          >
            <p>© 2024 NMCyber. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <a href="/privacy-policy" className="hover:text-tertiary">Privacy Policy</a>
              <a href="#" className="hover:text-tertiary">Terms of Service</a>
              <a href="/sitemap" className="hover:text-tertiary">Site map</a>
            </div>
          </motion.div>
        </div>
      </div>
        <div className="absolute z-20 inset-0 bg-[rgba(0,21,48,0.51)] "></div>
        <div className="absolute z-10 inset-0 backdrop-blur-[80.5px] "></div>
    </footer>
  );
};

export default Footer;