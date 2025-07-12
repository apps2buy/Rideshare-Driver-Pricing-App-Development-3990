import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useApp } from '../context/AppContext';

const { FiSun, FiMoon } = FiIcons;

const ThemeToggle = ({ className = '' }) => {
  const { state, dispatch } = useApp();
  const isDark = state.theme.isDark;

  const toggleTheme = () => {
    const newMode = isDark ? 'light' : 'dark';
    dispatch({ type: 'UPDATE_THEME', payload: { mode: newMode } });
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
        isDark ? 'bg-purple-600' : 'bg-gray-300'
      } ${className}`}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <motion.div
        className="absolute top-1 left-1 flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-md"
        animate={{ x: isDark ? 8 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <SafeIcon icon={isDark ? FiMoon : FiSun} className="text-sm text-purple-600" />
      </motion.div>
      <span className="sr-only">{isDark ? 'Dark Mode Active' : 'Light Mode Active'}</span>
    </motion.button>
  );
};

export default ThemeToggle;