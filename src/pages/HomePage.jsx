import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useApp } from '../context/AppContext';

const { FiDollarSign, FiMapPin, FiClock, FiArrowRight, FiTrendingUp, FiShield, FiZap, FiCalculator, FiStar, FiUsers, FiTarget, FiCpu, FiGlobe, FiAward } = FiIcons;

const HomePage = () => {
  const navigate = useNavigate();
  const { state } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-300">
      {/* Animated Background Elements */}
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
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-10 blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-10 blur-3xl"
        />
      </div>

      <div className="relative z-10 p-8 pb-32 min-h-screen">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative mb-8"
          >
            <div className="w-28 h-28 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
              <SafeIcon icon={FiDollarSign} className="text-5xl text-white" />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
            >
              <SafeIcon icon={FiStar} className="text-white text-lg" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4"
          >
            SideFare
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Professional Rideshare Pricing
            </p>
            <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
              Charge fair. Stay in control.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-sm mx-auto leading-relaxed"
          >
            Calculate transparent pricing for off-platform trips with real-time mapping and detailed breakdowns
          </motion.p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-12"
        >
          <motion.button
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.02, y: -2 }}
            onClick={() => navigate('/calculator')}
            className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white font-bold py-8 px-8 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-4 group"
          >
            <SafeIcon icon={FiCalculator} className="text-3xl group-hover:rotate-12 transition-transform" />
            <span className="text-2xl">Start Calculating</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <SafeIcon icon={FiArrowRight} className="text-2xl" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="grid grid-cols-3 gap-4 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20"
          >
            <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiTrendingUp} className="text-white text-2xl" />
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">Fair</p>
            <p className="text-base text-gray-600 dark:text-gray-400">Pricing</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20"
          >
            <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiZap} className="text-white text-2xl" />
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">Fast</p>
            <p className="text-base text-gray-600 dark:text-gray-400">Results</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20"
          >
            <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiShield} className="text-white text-2xl" />
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">Trust</p>
            <p className="text-base text-gray-600 dark:text-gray-400">Building</p>
          </motion.div>
        </motion.div>

        {/* Current Settings Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl border border-white/20"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-18 h-18 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
              <SafeIcon icon={FiTarget} className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Current Rates</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Your pricing configuration</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <SafeIcon icon={FiDollarSign} className="text-3xl text-purple-600" />
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">Base Fare</p>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {state.config.currency} {state.config.baseFare.toFixed(2)}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <SafeIcon icon={FiMapPin} className="text-3xl text-blue-600" />
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">Per {state.config.unit}</p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {state.config.currency} {state.config.ratePerUnit.toFixed(2)}
              </p>
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-2xl p-6 text-center"
          >
            <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <SafeIcon icon={FiClock} className="text-3xl text-emerald-600" />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">Trip Mode</p>
            <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
              {state.config.roundTrip ? 'Round Trip Default' : 'One-way Default'}
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          {[
            { icon: FiMapPin, title: 'Real-Time Routes', desc: 'Google Maps integration', color: 'from-red-400 to-pink-500' },
            { icon: FiShield, title: 'Transparent Pricing', desc: 'Build rider trust', color: 'from-green-400 to-emerald-500' },
            { icon: FiZap, title: 'Instant Results', desc: 'Calculate in seconds', color: 'from-yellow-400 to-orange-500' },
            { icon: FiUsers, title: 'Driver Focused', desc: 'Made for professionals', color: 'from-blue-400 to-cyan-500' },
            { icon: FiCpu, title: 'Smart Calculations', desc: 'Automatic tax handling', color: 'from-indigo-400 to-purple-500' },
            { icon: FiGlobe, title: 'Multi-Language', desc: 'Global accessibility', color: 'from-pink-400 to-rose-500' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <SafeIcon icon={feature.icon} className="text-xl text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-base">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Settings CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <SafeIcon icon={FiSettings} className="text-2xl text-white" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Need to adjust your rates or preferences?
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/config')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            Open Settings →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;