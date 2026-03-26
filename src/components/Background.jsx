import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 400, 0],
          y: [0, 200, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary-600/10 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{
          x: [0, -300, 0],
          y: [0, 400, 0],
          scale: [1, 1.4, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full"
      />
      <motion.div
        animate={{
          x: [0, 200, 0],
          y: [0, -300, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] bg-blue-600/5 blur-[150px] rounded-full"
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Scanning Line Effect */}
      <motion.div
        animate={{ y: ["0%", "100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent h-20 w-full"
      />
    </div>
  );
};

export default Background;
