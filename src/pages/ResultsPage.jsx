import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useApp } from '../context/AppContext';
import PricingCard from '../components/PricingCard';

const { FiDollarSign, FiShare2, FiSave, FiArrowLeft, FiCheckCircle, FiCreditCard, FiAward } = FiIcons;

const ResultsPage = () => {
  const navigate = useNavigate();
  const { state, dispatch, t } = useApp();
  const trip = state.currentTrip;

  if (!trip) {
    navigate('/calculator');
    return null;
  }

  const calculateFare = () => {
    const { config } = state;
    const distance = trip.isRoundTrip ? trip.distance * 2 : trip.distance;
    const baseFare = config.baseFare;
    const distanceFare = distance * config.ratePerUnit;
    const waitFare = trip.waitTime * config.waitFee;
    const subtotal = baseFare + distanceFare + waitFare;

    let federalTax = 0;
    let provincialTax = 0;
    let localTax = 0;
    let totalTax = 0;

    if (config.includeTax) {
      // Federal tax
      if (config.federalTaxRate > 0) {
        federalTax = subtotal * (config.federalTaxRate / 100);
      }
      
      // Provincial/State tax
      if ((config.taxStructure === 'dual' || config.taxStructure === 'triple') && config.provincialTaxRate > 0) {
        provincialTax = subtotal * (config.provincialTaxRate / 100);
      }
      
      // Local tax
      if (config.taxStructure === 'triple' && config.localTaxRate > 0) {
        localTax = subtotal * (config.localTaxRate / 100);
      }
      
      totalTax = federalTax + provincialTax + localTax;
    }

    const total = subtotal + totalTax;

    return {
      baseFare,
      distanceFare,
      waitFare,
      subtotal,
      federalTax,
      provincialTax,
      localTax,
      totalTax,
      tax: totalTax, // Legacy support
      total,
      distance
    };
  };

  const fare = calculateFare();

  const handleSaveTrip = () => {
    const tripRecord = {
      ...trip,
      fare,
      timestamp: new Date().toISOString()
    };
    
    dispatch({ type: 'SAVE_TRIP', payload: tripRecord });
    
    const button = document.getElementById('save-button');
    if (button) {
      button.innerHTML = '<svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Saved!';
      setTimeout(() => {
        button.innerHTML = '<svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>Save Trip';
      }, 2000);
    }
  };

  const handleShare = async () => {
    const taxBreakdown = state.config.includeTax && fare.totalTax > 0 ? `\n💰 Taxes: ${state.config.currency} ${fare.totalTax.toFixed(2)}` : '';
    
    const shareText = `🚗 Trip Estimate - SideFare\n\n📍 From: ${trip.pickup}\n🎯 To: ${trip.dropoff}\n\n📏 Distance: ${fare.distance.toFixed(1)} ${state.config.unit}\n💰 Subtotal: ${state.config.currency} ${fare.subtotal.toFixed(2)}${taxBreakdown}\n💰 Total: ${state.config.currency} ${fare.total.toFixed(2)}\n\nCalculated with SideFare - Fair pricing for rideshare drivers`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Trip Estimate',
          text: shareText
        });
      } catch (err) {
        console.log('Error sharing:', err);
        fallbackShare(shareText);
      }
    } else {
      fallbackShare(shareText);
    }
  };

  const fallbackShare = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      const button = document.getElementById('share-button');
      if (button) {
        button.innerHTML = '<svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Copied!';
        setTimeout(() => {
          button.innerHTML = '<svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path></svg>Share';
        }, 2000);
      }
    });
  };

  // Get payment options based on country
  const getPaymentOptions = () => {
    const country = state.config.country;
    let options = ['Cash'];
    
    // Add region-specific payment methods
    if (country === 'United States') {
      options = [...options, 'Venmo', 'Cash App', 'Zelle', 'PayPal'];
    } else if (country === 'Canada') {
      options = [...options, 'Interac e-Transfer', 'PayPal'];
    } else if (country === 'United Kingdom') {
      options = [...options, 'Bank Transfer', 'PayPal', 'Revolut'];
    } else if (['Germany', 'France', 'Spain', 'Italy'].includes(country)) {
      options = [...options, 'Bank Transfer', 'PayPal', 'Revolut'];
    } else if (country === 'Australia') {
      options = [...options, 'PayID', 'PayPal'];
    } else if (country === 'India') {
      options = [...options, 'UPI', 'Paytm', 'PhonePe'];
    } else if (country === 'Brazil') {
      options = [...options, 'PIX', 'Boleto'];
    } else if (country === 'Japan') {
      options = [...options, 'LINE Pay', 'PayPay'];
    } else {
      options = [...options, 'Bank Transfer', 'PayPal', 'Digital Wallet'];
    }
    
    return options;
  };

  const paymentOptions = getPaymentOptions();

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
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('/calculator')}
              className="mr-4 p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} className="text-3xl text-gray-600 dark:text-gray-400" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4"
            >
              <SafeIcon icon={FiCheckCircle} className="text-3xl text-white" />
            </motion.div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Trip Calculated!</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">Ready to share with your rider</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Trip Route Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Trip Route</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  <div className="w-1 h-16 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                </div>
                <div className="flex-1 space-y-10">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Pickup</p>
                    <p className="text-gray-600 dark:text-gray-400 text-base">{trip.pickup}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Dropoff</p>
                    <p className="text-gray-600 dark:text-gray-400 text-base">{trip.dropoff}</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-2">Distance</p>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {trip.distance.toFixed(1)} {state.config.unit}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-2">Duration</p>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{trip.duration} min</p>
                </div>
                <div className="text-center">
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-2">Type</p>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {trip.isRoundTrip ? 'Round' : 'One-way'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <PricingCard
              fare={fare}
              config={state.config}
              distance={fare.distance}
              duration={trip.duration}
              isRoundTrip={trip.isRoundTrip}
            />
          </motion.div>

          {/* Payment Options Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiCreditCard} className="text-3xl text-blue-600 dark:text-blue-400 mr-4" />
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">Payment Options</h3>
            </div>
            
            <p className="text-blue-700 dark:text-blue-300 mb-6 text-lg">
              Recommend these payment methods to your rider for a quick and easy transaction:
            </p>
            
            <div className="flex flex-wrap gap-3">
              {paymentOptions.map((method, index) => (
                <span 
                  key={index}
                  className="px-4 py-3 bg-white dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-lg text-base font-medium border border-blue-200 dark:border-blue-700"
                >
                  {method}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleSaveTrip}
              id="save-button"
              className="flex items-center justify-center space-x-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold py-8 px-8 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 shadow-sm"
            >
              <SafeIcon icon={FiSave} className="text-2xl" />
              <span className="text-xl">Save Trip</span>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleShare}
              id="share-button"
              className="flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-8 px-8 rounded-2xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <SafeIcon icon={FiShare2} className="text-2xl" />
              <span className="text-xl">Share</span>
            </motion.button>
          </motion.div>

          {/* Professional Tip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-800/30 border border-green-200 dark:border-green-800 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
              <SafeIcon icon={FiAward} className="text-2xl mr-3" />
              Professional Tip
            </h3>
            <p className="text-green-700 dark:text-green-300 leading-relaxed mb-4 text-lg">
              Show this detailed breakdown to your rider before starting the trip. Transparency builds trust and helps justify your fair pricing.
            </p>
            <p className="text-green-700 dark:text-green-300 leading-relaxed text-lg">
              <strong>Payment advice:</strong> For a smooth experience, accept payment through {paymentOptions.slice(0, 3).join(', ')} or other popular payment apps available in your region.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsPage;