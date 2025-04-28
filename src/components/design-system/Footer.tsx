
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-t bg-gradient-to-r from-background via-surface to-background py-6 mt-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <motion.p 
            className="text-muted-foreground text-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Built with <span className="text-primary-500">♥</span> using React and Tailwind CSS
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
