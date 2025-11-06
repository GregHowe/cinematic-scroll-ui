import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ThirdSection.css';

const ThirdSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.6, 0.8], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <section className="third-section">
      <motion.div className="third-box" style={{ scale, opacity }}>
        <h3>Final Reveal</h3>
      </motion.div>
    </section>
  );
};

export default ThirdSection;
