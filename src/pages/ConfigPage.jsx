import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ThemeToggle from '../components/ThemeToggle';
import { useApp } from '../context/AppContext';
import { getAvailableLanguages } from '../utils/i18n';

const { FiSettings, FiSave, FiToggleLeft, FiToggleRight, FiCheck, FiInfo, FiPalette, FiGlobe } = FiIcons;

const ConfigPage = () => {
  const { state, dispatch } = useApp();
  const [config, setConfig] = useState(state.config);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const isChanged = JSON.stringify(config) !== JSON.stringify(state.config);
    setIsDirty(isChanged);
  }, [config, state.config]);

  const handleSave = () => {
    dispatch({ type: 'UPDATE_CONFIG', payload: config });
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 2000);
  };

  const handleCountryChange = (country) => {
    dispatch({ type: 'UPDATE_COUNTRY', payload: country });
    setConfig(prev => ({ ...prev, country }));
  };

  const toggleSetting = (key) => {
    setConfig(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const updateConfig = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleLanguageChange = (languageCode) => {
    dispatch({ type: 'UPDATE_LANGUAGE', payload: languageCode });
  };

  const languages = getAvailableLanguages();
  const currentLanguage = languages.find(lang => lang.code === state.language) || languages[0];

  const countryOptions = [
    { value: 'United States', label: 'United States' },
    { value: 'Canada', label: 'Canada' },
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Germany', label: 'Germany' },
    { value: 'France', label: 'France' },
    { value: 'Other', label: 'Other' }
  ];

  const getTaxLabel = (type) => {
    switch (type) {
      case 'federal':
        if (config.country === 'Canada') return 'GST/HST (%)';
        if (config.country === 'United Kingdom') return 'VAT (%)';
        if (config.country === 'Australia') return 'GST (%)';
        if (config.country === 'Germany' || config.country === 'France') return 'VAT (%)';
        return 'Federal Tax (%)';
      case 'provincial':
        if (config.country === 'Canada') return 'PST/QST (%)';
        if (config.country === 'United States') return 'State Tax (%)';
        return 'Provincial/State Tax (%)';
      case 'local':
        return 'Local Tax (%)';
      default:
        return 'Tax Rate (%)';
    }
  };

  const getTaxDescription = () => {
    switch (config.country) {
      case 'Canada':
        return 'Canada uses GST/HST (federal) and PST/QST (provincial) taxes.';
      case 'United States':
        return 'US may have federal, state, and local taxes depending on location.';
      case 'United Kingdom':
        return 'UK uses a single VAT rate of 20%.';
      case 'Australia':
        return 'Australia uses a single GST rate of 10%.';
      case 'Germany':
        return 'Germany uses a single VAT rate of 19%.';
      case 'France':
        return 'France uses a single VAT rate of 20%.';
      default:
        return 'Configure tax rates based on your local regulations.';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="p-8 pb-32 min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center mb-6">
            <SafeIcon icon={FiSettings} className="text-3xl text-purple-600 mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
              <p className="text-gray-600 dark:text-gray-300">Configure your pricing preferences</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Theme and Language Settings */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiPalette} className="text-2xl text-purple-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Appearance</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-700 rounded-xl">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {state.theme.isDark ? 'Dark Mode' : 'Light Mode'}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Switch between light and dark modes
                  </p>
                </div>
                <ThemeToggle />
              </div>

              <div className="p-6 bg-white dark:bg-gray-700 rounded-xl">
                <div className="flex items-center mb-4">
                  <SafeIcon icon={FiGlobe} className="text-xl text-purple-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Language</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((language) => (
                    <motion.button
                      key={language.code}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`flex items-center justify-between p-4 rounded-xl border ${
                        state.language === language.code
                          ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{language.flag}</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {language.name}
                        </span>
                      </div>
                      {state.language === language.code && (
                        <SafeIcon icon={FiCheck} className="text-purple-600 dark:text-purple-400" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Basic Settings */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Basic Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Country/Region
                </label>
                <select
                  value={config.country}
                  onChange={(e) => handleCountryChange(e.target.value)}
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {countryOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Currency
                </label>
                <select
                  value={config.currency}
                  onChange={(e) => updateConfig('currency', e.target.value)}
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="CAD">CAD ($)</option>
                  <option value="AUD">AUD ($)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Distance Unit
                </label>
                <select
                  value={config.unit}
                  onChange={(e) => updateConfig('unit', e.target.value)}
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="miles">Miles</option>
                  <option value="kilometers">Kilometers</option>
                </select>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Pricing</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Base Fare ({config.currency})
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={config.baseFare}
                  onChange={(e) => updateConfig('baseFare', parseFloat(e.target.value) || 0)}
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Rate per {config.unit} ({config.currency})
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={config.ratePerUnit}
                  onChange={(e) => updateConfig('ratePerUnit', parseFloat(e.target.value) || 0)}
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Wait Time Fee per Minute ({config.currency})
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={config.waitFee}
                  onChange={(e) => updateConfig('waitFee', parseFloat(e.target.value) || 0)}
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Tax Configuration */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Tax Configuration</h2>
            {/* Tax Description */}
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiInfo} className="text-blue-600 dark:text-blue-400 text-lg mt-0.5" />
                <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                  {getTaxDescription()}
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {/* Include Tax Toggle */}
              <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-700 rounded-xl">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Include Tax</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Add tax to final price</p>
                </div>
                <button onClick={() => toggleSetting('includeTax')} className="flex items-center">
                  <SafeIcon
                    icon={config.includeTax ? FiToggleRight : FiToggleLeft}
                    className={`text-4xl ${config.includeTax ? 'text-purple-600' : 'text-gray-400'}`}
                  />
                </button>
              </div>

              {config.includeTax && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-6"
                >
                  {/* Tax Structure Selection */}
                  <div className="p-6 bg-white dark:bg-gray-700 rounded-xl">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Tax Structure
                    </label>
                    <select
                      value={config.taxStructure}
                      onChange={(e) => updateConfig('taxStructure', e.target.value)}
                      className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="single">Single Tax</option>
                      <option value="dual">Dual Tax (Federal + Provincial/State)</option>
                      <option value="triple">Triple Tax (Federal + State + Local)</option>
                    </select>
                  </div>

                  {/* Federal Tax */}
                  <div className="p-6 bg-white dark:bg-gray-700 rounded-xl">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      {getTaxLabel('federal')}
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={config.federalTaxRate}
                      onChange={(e) => updateConfig('federalTaxRate', parseFloat(e.target.value) || 0)}
                      className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  {/* Provincial/State Tax */}
                  {(config.taxStructure === 'dual' || config.taxStructure === 'triple') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-6 bg-white dark:bg-gray-700 rounded-xl"
                    >
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        {getTaxLabel('provincial')}
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={config.provincialTaxRate}
                        onChange={(e) => updateConfig('provincialTaxRate', parseFloat(e.target.value) || 0)}
                        className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </motion.div>
                  )}

                  {/* Local Tax */}
                  {config.taxStructure === 'triple' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-6 bg-white dark:bg-gray-700 rounded-xl"
                    >
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        {getTaxLabel('local')}
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={config.localTaxRate}
                        onChange={(e) => updateConfig('localTaxRate', parseFloat(e.target.value) || 0)}
                        className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </motion.div>
                  )}
                </motion.div>
              )}
            </div>
          </div>

          {/* Options */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Options</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-700 rounded-xl">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Round Trip by Default</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Auto-calculate return trips</p>
                </div>
                <button onClick={() => toggleSetting('roundTrip')} className="flex items-center">
                  <SafeIcon
                    icon={config.roundTrip ? FiToggleRight : FiToggleLeft}
                    className={`text-4xl ${config.roundTrip ? 'text-purple-600' : 'text-gray-400'}`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <motion.div className="relative">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleSave}
              disabled={!isDirty}
              className={`w-full font-bold py-6 px-8 rounded-2xl shadow-lg transition-all duration-200 flex items-center justify-center space-x-3 ${
                isDirty
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:shadow-xl'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              }`}
            >
              <SafeIcon icon={saveSuccess ? FiCheck : FiSave} className="text-xl" />
              <span className="text-xl">{saveSuccess ? 'Settings Saved!' : 'Save Settings'}</span>
            </motion.button>

            <AnimatePresence>
              {saveSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-16 left-0 right-0 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-xl p-4 text-center font-medium"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <SafeIcon icon={FiCheck} className="text-green-600 dark:text-green-400" />
                    <span>Settings saved successfully!</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConfigPage;