import React from 'react';
import { motion } from 'framer-motion';

const GradientBackground = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-gradient-to-br from-blue-50 via-white to-cyan-50',
    primary: 'bg-gradient-to-br from-primary-50 via-white to-primary-100',
    success: 'bg-gradient-to-br from-green-50 via-white to-emerald-50',
    warm: 'bg-gradient-to-br from-orange-50 via-white to-amber-50'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen ${variants[variant]} relative overflow-hidden`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-10 blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GradientBackground;