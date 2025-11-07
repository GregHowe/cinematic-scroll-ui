import React from 'react';
import './ThirdSection.css';
import { motion } from 'framer-motion';

const ThirdSection = () => {
  return (
    <section className="third-section">
      <motion.div
        className="closing-text"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1.2, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2>You’ve arrived</h2>
        <p>
          This is the Hall of Zero Limits.  
          Where vision meets motion, and every scroll reveals your gift.
        </p>
      </motion.div>
    </section>
  );
};

export default ThirdSection;
