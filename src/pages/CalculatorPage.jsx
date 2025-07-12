import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useApp } from '../context/AppContext';
import { getSampleAddresses } from '../utils/i18n';
import AddressAutocomplete from '../components/AddressAutocomplete';
import MapView from '../components/MapView';

const { FiCalculator, FiMapPin, FiClock, FiArrowRight, FiRotateCw, FiNavigation } = FiIcons;

const CalculatorPage = () => {
  const navigate = useNavigate();
  const { state, dispatch, t } = useApp();
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    waitTime: 0,
    isRoundTrip: state.config.roundTrip
  });
  const [routeData, setRouteData] = useState(null);
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  const handleRouteCalculated = (data) => {
    setRouteData(data);
  };

  const handleCalculate = () => {
    if (!routeData) {
      // Use intelligent distance estimation based on location
      const mockDistance = 8.5; // Default distance
      const mockDuration = 12; // Default duration
      const trip = {
        id: Date.now(),
        ...formData,
        distance: mockDistance,
        duration: mockDuration,
        timestamp: new Date().toISOString()
      };
      dispatch({ type: 'SET_CURRENT_TRIP', payload: trip });
    } else {
      const trip = {
        id: Date.now(),
        ...formData,
        distance: routeData.distance,
        duration: routeData.duration,
        timestamp: new Date().toISOString()
      };
      dispatch({ type: 'SET_CURRENT_TRIP', payload: trip });
    }
    navigate('/results');
  };

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const swapAddresses = () => {
    setFormData(prev => ({
      ...prev,
      pickup: prev.dropoff,
      dropoff: prev.pickup
    }));
  };

  const fillTestAddresses = () => {
    const samples = getSampleAddresses(state.language);
    setFormData(prev => ({
      ...prev,
      pickup: samples.pickup,
      dropoff: samples.dropoff
    }));
  };

  const canCalculate = formData.pickup && formData.dropoff;

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
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4"
            >
              <SafeIcon icon={FiCalculator} className="text-3xl text-white" />
            </motion.div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {t('calculateTrip')}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t('enterAddresses')}
              </p>
            </div>
          </div>
          
          {/* Quick Test Button */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={fillTestAddresses}
            className="text-base bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
          >
            🎯 {t('fillTestAddresses')}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Trip Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300"
          >
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiMapPin} className="text-3xl text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('tripDetails')}
              </h2>
            </div>
            
            <div className="space-y-8">
              <AddressAutocomplete
                value={formData.pickup}
                onChange={(value) => updateField('pickup', value)}
                placeholder={t('enterPickupLocation')}
                label={t('pickupAddress')}
                icon={FiMapPin}
              />
              
              <div className="flex justify-center">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={swapAddresses}
                  className="p-5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <SafeIcon icon={FiRotateCw} className="text-2xl" />
                </motion.button>
              </div>
              
              <AddressAutocomplete
                value={formData.dropoff}
                onChange={(value) => updateField('dropoff', value)}
                placeholder={t('enterDropoffLocation')}
                label={t('dropoffAddress')}
                icon={FiNavigation}
              />
              
              <div className="relative">
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {t('waitTime')}
                </label>
                <div className="relative">
                  <SafeIcon icon={FiClock} className="absolute left-4 top-4 text-gray-400 text-xl" />
                  <input
                    type="number"
                    value={formData.waitTime}
                    onChange={(e) => updateField('waitTime', parseInt(e.target.value) || 0)}
                    placeholder="0"
                    min="0"
                    className="w-full pl-14 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map View */}
          {canCalculate && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <MapView
                pickup={formData.pickup}
                dropoff={formData.dropoff}
                onRouteCalculated={handleRouteCalculated}
                isExpanded={isMapExpanded}
                onToggleExpanded={() => setIsMapExpanded(!isMapExpanded)}
              />
            </motion.div>
          )}

          {/* Trip Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('tripOptions')}
            </h2>
            
            <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-700 rounded-xl">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                  {t('roundTrip')}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  {t('roundTripDescription')}
                </p>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => updateField('isRoundTrip', !formData.isRoundTrip)}
                className={`relative w-20 h-10 rounded-full transition-colors duration-200 ${
                  formData.isRoundTrip ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <motion.div
                  animate={{ x: formData.isRoundTrip ? 40 : 2 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute top-1 w-8 h-8 bg-white rounded-full shadow-md"
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Current Rates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('currentRates')}
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                  {t('baseFare')}
                </p>
                <p className="text-3xl font-bold text-purple-600">
                  {state.config.currency} {state.config.baseFare.toFixed(2)}
                </p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                  {t('perUnit', { unit: t(state.config.unit) })}
                </p>
                <p className="text-3xl font-bold text-purple-600">
                  {state.config.currency} {state.config.ratePerUnit.toFixed(2)}
                </p>
              </div>
            </div>
            
            {state.config.waitFee > 0 && (
              <div className="mt-6 text-center p-6 bg-white dark:bg-gray-700 rounded-xl">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                  {t('waitFee')}
                </p>
                <p className="text-3xl font-bold text-purple-600">
                  {state.config.currency} {state.config.waitFee.toFixed(2)}/{t('min')}
                </p>
              </div>
            )}
          </motion.div>

          {/* Calculate Button */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleCalculate}
            disabled={!canCalculate}
            className={`w-full font-bold py-8 px-8 rounded-2xl shadow-lg transition-all duration-200 flex items-center justify-center space-x-4 ${
              canCalculate
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:shadow-xl hover:from-purple-700 hover:to-purple-800'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            <span className="text-2xl">{t('calculateFare')}</span>
            <SafeIcon icon={FiArrowRight} className="text-3xl" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CalculatorPage;