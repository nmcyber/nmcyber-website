import SectionWrapper from '@/components/shared/SectionWrapper';
import { motion } from 'framer-motion';

const Sitemap = () => {
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

  const sitemapData = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Contact', url: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Cybersecurity Awareness', url: '/solutions/awareness' },
        { name: 'Cybersecurity Readiness', url: '/solutions/readiness' },
        { name: 'Risk Assessments', url: '/solutions/risk' },
        { name: 'Candidate Screening', url: '/products/screening' },
        { name: 'Content Creation', url: '/products/content' },
        { name: 'Industry Training', url: '/products/training' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'On-Demand Courses', url: '/resources/courses' },
        { name: 'Continuous Learning', url: '/resources/learning' },
        { name: 'Help Center', url: '/help' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '/privacy-policy' },
        { name: 'Terms of Service', url: '/terms' },
      ],
    },
  ];

  return (
    <SectionWrapper className=" h-auto ~py-16/28">
      <motion.div
        className=" relative z-30 container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-4xl font-bold mb-8 text-white" variants={itemVariants}>Sitemap</motion.h1>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants}>
          {sitemapData.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h2 className="text-2xl font-semibold mb-4 text-tertiary">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="flex items-center">
                    {/* {link.icon && <link.icon className="mr-2 text-zinc-400" size={16} />} */}
                    <a href={link.url} className="text-zinc-400 hover:text-tertiary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Sitemap;