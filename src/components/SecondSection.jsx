import React from 'react';
import './SecondSection.css';
import { motion } from 'framer-motion';

const SecondSection = () => {
  return (
    <section className="second-section">
      <motion.div
        className="text-container"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1.2, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2>Unleash the power</h2>
        <p>
          Step into a world beyond limits.  
          Scroll to ignite the cinematic journey.
        </p>
      </motion.div>
    </section>
  );
};

export default SecondSection;
