import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './OverlayScene.css';

const OverlayScene = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.05, 0.15], [1, 3]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.15], [1, 0]);

  return (
    <motion.div className="overlay-scene" style={{ scale, opacity }}>
      <h1>Zero Limits</h1>
    </motion.div>
  );
};

export default OverlayScene;
