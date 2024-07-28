import React from "react";
import { motion } from "framer-motion";
import "./CloudAnimation.css"; // Make sure to create this CSS file
import x from "../../assets/logo.png"

const CloudAnimation = () => {
  return (
    <div className="cloud-container">
      <motion.div
        className="cloud"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="cloud-part left"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.div
          className="cloud-part right"
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, delay: 1 }}
        />
      </motion.div>
      <div className="content">
        {/* Your main content goes here */}
        <h1>Welcome to My Interactive Website</h1>
      </div>
    </div>
  );
};

export default CloudAnimation;
