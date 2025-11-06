import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './SecondSection.css';

const SecondSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const opacity = useTransform(scrollYProgress, [0.1, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0.2, 0.6], [0, -50]);

  return (
    <section ref={ref} className="second-section">
      <div className="second-content">
        <motion.h2
          className="second-title"
          style={{ opacity, y }}
          transition={{ duration: 1 }}
        >
          Welcome to the next layer
        </motion.h2>
        <motion.p
          className="second-subtitle"
          style={{ opacity, y }}
        >
          This is a deeper experience
        </motion.p>
      </div>
    </section>
  );
};

export default SecondSection;
