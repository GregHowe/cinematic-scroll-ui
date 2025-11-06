import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './SecondSection.css';
import { useRef } from 'react';

const SecondSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.2, 0.4], [0, -100]);

  return (
    <section ref={ref} className="second-section">
      <motion.h2
        className="second-title"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Welcome to the next layer
      </motion.h2>
       <motion.p className="parallax-text" style={{ y }}>
        This is a deeper experience
      </motion.p>
    </section>
  );
};

export default SecondSection;
