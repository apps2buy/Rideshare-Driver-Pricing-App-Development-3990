import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import ConfigPage from './pages/ConfigPage';
import CalculatorPage from './pages/CalculatorPage';
import ResultsPage from './pages/ResultsPage';
import PresetsPage from './pages/PresetsPage';
import Navigation from './components/Navigation';
import { AppProvider } from './context/AppContext';

function App({ onReady }) {
  useEffect(() => {
    if (onReady) {
      const timer = setTimeout(() => {
        onReady();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [onReady]);

  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto bg-white dark:bg-gray-800 min-h-screen shadow-xl transition-colors duration-300"
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/config" element={<ConfigPage />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/presets" element={<PresetsPage />} />
            </Routes>
            <Navigation />
          </motion.div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;