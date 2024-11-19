import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
    <motion.div
      className="container mx-auto px-4 py-16 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-4xl font-bold mb-8" variants={itemVariants}>Privacy Policy</motion.h1>
      
      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and any other information you choose to provide.</p>
      </motion.section>

      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.</p>
      </motion.section>

      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
        <p>We do not share your personal information with third parties except as described in this policy or with your consent.</p>
      </motion.section>

      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
      </motion.section>

      <motion.section className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-4">5. Changes to This Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
        <p>If you have any questions about this privacy policy, please contact us at privacy@nmcyber.com.</p>
      </motion.section>
    </motion.div>
  );
};

export default PrivacyPolicy;