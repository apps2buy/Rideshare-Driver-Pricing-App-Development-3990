import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDollarSign, FiMapPin, FiClock, FiRotateCcw } = FiIcons;

const PricingCard = ({ fare, config, distance, duration, isRoundTrip }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: config.currency
    }).format(amount);
  };

  const fareItems = [
    {
      icon: FiDollarSign,
      label: 'Base Fare',
      amount: fare.baseFare,
      color: 'text-blue-600'
    },
    {
      icon: FiMapPin,
      label: `Distance (${distance.toFixed(1)} ${config.unit})`,
      amount: fare.distanceFare,
      color: 'text-green-600'
    }
  ];

  if (fare.waitFare > 0) {
    fareItems.push({
      icon: FiClock,
      label: 'Wait Time',
      amount: fare.waitFare,
      color: 'text-orange-600'
    });
  }

  const getTaxLabel = (type) => {
    switch (type) {
      case 'federal':
        if (config.country === 'Canada') return 'GST/HST';
        if (config.country === 'United Kingdom') return 'VAT';
        if (config.country === 'Australia') return 'GST';
        if (config.country === 'Germany' || config.country === 'France') return 'VAT';
        return 'Federal Tax';
      case 'provincial':
        if (config.country === 'Canada') return 'PST/QST';
        if (config.country === 'United States') return 'State Tax';
        return 'Provincial/State Tax';
      case 'local':
        return 'Local Tax';
      default:
        return 'Tax';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Fare Breakdown</h2>
        {isRoundTrip && (
          <div className="flex items-center space-x-2 text-purple-600 bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-full">
            <SafeIcon icon={FiRotateCcw} className="text-lg" />
            <span className="text-base font-medium">Round Trip</span>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {fareItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-6 bg-white dark:bg-gray-700 rounded-xl"
          >
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 rounded-xl bg-gray-50 dark:bg-gray-600 flex items-center justify-center ${item.color}`}>
                <SafeIcon icon={item.icon} className="text-3xl" />
              </div>
              <span className="font-semibold text-gray-700 dark:text-gray-300 text-xl">{item.label}</span>
            </div>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(item.amount)}
            </span>
          </motion.div>
        ))}

        <div className="pt-6 border-t border-gray-200 dark:border-gray-600">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xl text-gray-600 dark:text-gray-400">Subtotal</span>
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">
              {formatCurrency(fare.subtotal)}
            </span>
          </div>

          {config.includeTax && (
            <div className="space-y-3 mb-4">
              {/* Federal Tax */}
              {config.federalTaxRate > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    {getTaxLabel('federal')} ({config.federalTaxRate}%)
                  </span>
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">
                    {formatCurrency(fare.federalTax || 0)}
                  </span>
                </div>
              )}

              {/* Provincial/State Tax */}
              {(config.taxStructure === 'dual' || config.taxStructure === 'triple') && config.provincialTaxRate > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    {getTaxLabel('provincial')} ({config.provincialTaxRate}%)
                  </span>
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">
                    {formatCurrency(fare.provincialTax || 0)}
                  </span>
                </div>
              )}

              {/* Local Tax */}
              {config.taxStructure === 'triple' && config.localTaxRate > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    {getTaxLabel('local')} ({config.localTaxRate}%)
                  </span>
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">
                    {formatCurrency(fare.localTax || 0)}
                  </span>
                </div>
              )}

              {/* Total Tax */}
              {fare.totalTax > 0 && (
                <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
                  <span className="text-lg text-gray-600 dark:text-gray-400 font-medium">Total Tax</span>
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">
                    {formatCurrency(fare.totalTax)}
                  </span>
                </div>
              )}
            </div>
          )}

          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl text-white mt-6"
          >
            <span className="text-3xl font-bold">Total</span>
            <span className="text-5xl font-bold">
              {formatCurrency(fare.total)}
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-800/30 border border-green-200 dark:border-green-800 rounded-xl"
      >
        <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-lg">💡 Driver Tip</h3>
        <p className="text-green-700 dark:text-green-300 leading-relaxed text-base">
          Show this breakdown to your rider for complete transparency. Fair pricing builds trust and repeat customers.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default PricingCard;