import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './TransitionLayer.css';

const TransitionLayer = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <motion.div className="transition-layer" style={{ opacity }} />
  );
};

export default TransitionLayer;
