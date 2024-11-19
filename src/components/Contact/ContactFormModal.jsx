import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from './ContactForm';


const ContactFormModal = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
  };

  const formContent = (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
        <Input id="name" name="name" type="text" required className="mt-1" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
        <Input id="email" name="email" type="email" required className="mt-1" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
        <Textarea id="message" name="message" required className="mt-1" />
      </div>
      <Button type="submit" className="w-full bg-tertiary hover:bg-tertiary/90">Send Message</Button>
    </motion.form>
  );

  const thankYouMessage = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
      <p>Your message has been sent. We'll get back to you soon.</p>
    </motion.div>
  );

  // const content = isSubmitted ? thankYouMessage : formContent;
  const content = isSubmitted ? thankYouMessage : <ContactForm />;

  if (isMobile) {
    return (
      <Dialog className='mx-auto outline outline-orange-400'>
        <DialogTrigger asChild>
          <Button className=" bg-gradient-to-l from-[#64cdf6]/60 to-transparent via-[#64cdf6]/30 opacity-80 backdrop-blur-md bg-transparent hover:bg-tertiary/90">Contact Us</Button>
        </DialogTrigger>
        <DialogContent className=" max-w-[90vw] mx-auto bg-[rgba(0,21,48,0.51)] opacity-80 backdrop-blur-md rounded-2xl text-white border border-[#64cdf6]/30 ">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            {/* <DialogDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </DialogDescription> */}
          </DialogHeader>
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className="max-w-md mx-auto bgg-gray-900 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Contact Us</h2>
      {content}
    </div>
  );
};

export default ContactFormModal;