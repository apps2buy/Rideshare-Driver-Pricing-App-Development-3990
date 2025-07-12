import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiSearch, FiX } = FiIcons;

const AddressAutocomplete = ({ value, onChange, placeholder, label, icon = FiMapPin, onPlaceSelected }) => {
  const inputRef = useRef(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const initializeAutocomplete = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        setIsGoogleMapsLoaded(true);
        if (inputRef.current && !autocomplete) {
          try {
            const autocompleteInstance = new window.google.maps.places.Autocomplete(
              inputRef.current,
              {
                types: ['address'],
                componentRestrictions: { country: ['us', 'ca'] }, // Include both US and Canada
                fields: ['formatted_address', 'geometry', 'name']
              }
            );

            autocompleteInstance.addListener('place_changed', () => {
              const place = autocompleteInstance.getPlace();
              if (place.formatted_address) {
                onChange(place.formatted_address);
                setShowSuggestions(false);
                if (onPlaceSelected) {
                  onPlaceSelected(place);
                }
              }
            });

            setAutocomplete(autocompleteInstance);
          } catch (error) {
            console.error('Error initializing autocomplete:', error);
          }
        }
      } else {
        setTimeout(initializeAutocomplete, 200);
      }
    };

    const checkGoogleMaps = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        initializeAutocomplete();
      } else {
        setTimeout(checkGoogleMaps, 100);
      }
    };

    checkGoogleMaps();
  }, [onChange, onPlaceSelected, autocomplete]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);

    if (newValue.length > 2 && !isGoogleMapsLoaded) {
      // Enhanced mock suggestions including Canadian addresses
      const mockSuggestions = [
        `${newValue} Street, Montreal, QC, Canada`,
        `${newValue} Avenue, Toronto, ON, Canada`,
        `${newValue} Boulevard, Vancouver, BC, Canada`,
        `${newValue} Street, New York, NY, USA`,
        `${newValue} Avenue, Los Angeles, CA, USA`
      ];
      setSuggestions(mockSuggestions);
      setShowSuggestions(true);
    } else if (newValue.length <= 2) {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onChange(suggestion);
    setShowSuggestions(false);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const clearInput = () => {
    onChange('');
    setShowSuggestions(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="relative">
      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
        {label}
      </label>
      <div className="relative">
        <SafeIcon icon={icon} className="absolute left-4 top-4 text-gray-400 z-10 text-xl" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={() => value.length > 2 && !isGoogleMapsLoaded && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder={placeholder}
          className="w-full pl-14 pr-14 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-lg"
        />
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={clearInput}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 z-10"
          >
            <SafeIcon icon={FiX} className="text-2xl" />
          </motion.button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-20 w-full mt-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg max-h-48 overflow-y-auto"
        >
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-600 border-b border-gray-100 dark:border-gray-600 last:border-b-0 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="text-gray-400 text-lg" />
                <span className="text-gray-700 dark:text-gray-300 text-base">{suggestion}</span>
              </div>
            </button>
          ))}
        </motion.div>
      )}

      {!isGoogleMapsLoaded && (
        <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Loading address suggestions...
        </div>
      )}
    </div>
  );
};

export default AddressAutocomplete;