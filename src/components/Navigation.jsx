import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ThemeToggle from './ThemeToggle';
import { useApp } from '../context/AppContext';

const { FiHome, FiSettings, FiCalculator, FiBookmark } = FiIcons;

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useApp();

  const navItems = [
    { path: '/', icon: FiHome, label: t('home') },
    { path: '/calculator', icon: FiCalculator, label: t('calculate') },
    { path: '/presets', icon: FiBookmark, label: t('presets') },
    { path: '/config', icon: FiSettings, label: t('settings') }
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-300"
    >
      <div className="max-w-md mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ThemeToggle />
          </div>
          
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <motion.button
                key={item.path}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center py-3 px-4 rounded-xl transition-colors ${
                  isActive
                    ? 'text-purple-600 bg-purple-50 dark:bg-purple-900/20'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                <SafeIcon icon={item.icon} className="text-3xl mb-1" />
                <span className="text-sm font-medium truncate">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;