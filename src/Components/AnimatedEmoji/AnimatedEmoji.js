'use client'
import { motion } from "framer-motion";

const AnimatedEmoji = () => {
  return (
    <motion.div
      className="inline-block"
      animate={{
        rotate: [0, 25, 0],
      }}
      transition={{
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1],
        repeat: Infinity,
        repeatDelay: 0,
      }}
      style={{ transformOrigin: "70% 70%" }}
    >
      <span className="text-6xl select-none">👋</span>
    </motion.div>
  );
};

export default AnimatedEmoji;
