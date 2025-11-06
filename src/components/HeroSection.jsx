import React from 'react';
import './HeroSection.css';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="hero">
    <motion.h1
            className="hero-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            Zero Limits
    </motion.h1>

    <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Scroll down to discover
    </motion.p>
    <div className="spacer"></div>

    </section>
  );
};

export default HeroSection;
