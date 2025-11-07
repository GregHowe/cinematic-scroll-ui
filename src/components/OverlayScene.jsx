// OverlayScene.jsx
import React from "react";
import "./OverlayScene.css";
import { motion } from "framer-motion";

const OverlayScene = () => {
  return (
    <motion.div
      className="overlay-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="gradient-layer" />
      <div className="blur-layer" />

      <motion.div
        className="parallax-text"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1.2, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1>Zero Limits</h1>
        <p>Experience the cinematic scroll</p>
      </motion.div>
    </motion.div>
  );
};

export default OverlayScene;
