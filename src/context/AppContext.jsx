import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { getTranslation } from '../utils/i18n';

const AppContext = createContext();

const initialState = {
  config: {
    country: 'United States',
    currency: 'USD',
    unit: 'miles',
    baseFare: 3.00,
    ratePerUnit: 1.75,
    roundTrip: true,
    waitFee: 0.50,
    // Updated tax system
    includeTax: false,
    taxStructure: 'single', // 'single', 'dual', 'triple'
    federalTaxRate: 0,
    provincialTaxRate: 0,
    localTaxRate: 0,
    // Legacy support
    taxRate: 0
  },
  // Theme settings
  theme: {
    mode: 'light', // 'light', 'dark'
    isDark: false
  },
  // Language settings
  language: 'en', // 'en', 'es', 'fr', 'de'
  presets: [],
  currentTrip: null,
  tripHistory: []
};

// Tax presets for different countries
const TAX_PRESETS = {
  'Canada': {
    taxStructure: 'dual',
    federalTaxRate: 5.0, // GST
    provincialTaxRate: 9.975, // Example: Quebec PST
    localTaxRate: 0,
    includeTax: true
  },
  'United States': {
    taxStructure: 'triple',
    federalTaxRate: 0,
    provincialTaxRate: 8.25, // Example: California state tax
    localTaxRate: 2.5, // Example: Local tax
    includeTax: false
  },
  'United Kingdom': {
    taxStructure: 'single',
    federalTaxRate: 20.0, // VAT
    provincialTaxRate: 0,
    localTaxRate: 0,
    includeTax: true
  },
  'Australia': {
    taxStructure: 'single',
    federalTaxRate: 10.0, // GST
    provincialTaxRate: 0,
    localTaxRate: 0,
    includeTax: true
  },
  'Germany': {
    taxStructure: 'single',
    federalTaxRate: 19.0, // VAT
    provincialTaxRate: 0,
    localTaxRate: 0,
    includeTax: true
  },
  'France': {
    taxStructure: 'single',
    federalTaxRate: 20.0, // VAT
    provincialTaxRate: 0,
    localTaxRate: 0,
    includeTax: true
  },
  'Spain': {
    taxStructure: 'single',
    federalTaxRate: 21.0, // VAT
    provincialTaxRate: 0,
    localTaxRate: 0,
    includeTax: true
  },
  'Italy': {
    taxStructure: 'single',
    federalTaxRate: 22.0, // VAT
    provincialTaxRate: 0,
    localTaxRate: 0,
    includeTax: true
  },
  'Netherlands': {
    taxStructure: 'single',
    federalTaxRate: 21.0, // VAT
    provincialTaxRate: 0,
    localTaxRate: 0,
    includeTax: true
  },
  'Belgium': {
    taxStructure: 'single',
    federalTaxRate: 21.0, // VAT
    provincialTaxRate: 0,
    localTaxRate: 0,
    includeTax: true
  },
  'Mexico': {
    taxStructure: 'single',
    federalTaxRate: 16.0, // VAT
    provincialTaxRate: 0,
    localTaxRate: 0,
    includeTax: true
  },
  'Brazil': {
    taxStructure: 'single',
    federalTaxRate: 17.0, // VAT
    provincialTaxRate: 0,
    localTaxRate: 0,
    includeTax: true
  },
  'Argentina': {
    taxStructure: 'single',
    federalTaxRate: 21.0, // VAT
    provincialTaxRate: 0,
    localTaxRate: 0,
    includeTax: true
  },
  'Japan': {
    taxStructure: 'single',
    federalTaxRate: 10.0, // VAT
    provincialTaxRate: 0,
    localTaxRate: 0,
    includeTax: true
  },
  'South Korea': {
    taxStructure: 'single',
    federalTaxRate: 10.0, // VAT
    provincialTaxRate: 0,
    localTaxRate: 0,
    includeTax: true
  },
  'India': {
    taxStructure: 'single',
    federalTaxRate: 18.0, // GST
    provincialTaxRate: 0,
    localTaxRate: 0,
    includeTax: true
  },
  'Other': {
    taxStructure: 'single',
    federalTaxRate: 0,
    provincialTaxRate: 0,
    localTaxRate: 0,
    includeTax: false
  }
};

function appReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_CONFIG':
      return {
        ...state,
        config: { ...state.config, ...action.payload }
      };
    case 'UPDATE_COUNTRY':
      const countryPreset = TAX_PRESETS[action.payload] || TAX_PRESETS['Other'];
      return {
        ...state,
        config: {
          ...state.config,
          country: action.payload,
          ...countryPreset
        }
      };
    case 'UPDATE_THEME':
      const newMode = action.payload.mode || state.theme.mode;
      const isDark = newMode === 'dark';
      return {
        ...state,
        theme: { mode: newMode, isDark }
      };
    case 'UPDATE_LANGUAGE':
      return {
        ...state,
        language: action.payload
      };
    case 'SAVE_PRESET':
      return {
        ...state,
        presets: [...state.presets, action.payload]
      };
    case 'DELETE_PRESET':
      return {
        ...state,
        presets: state.presets.filter(preset => preset.id !== action.payload)
      };
    case 'LOAD_PRESET':
      return {
        ...state,
        config: { ...state.config, ...action.payload }
      };
    case 'SET_CURRENT_TRIP':
      return {
        ...state,
        currentTrip: action.payload
      };
    case 'SAVE_TRIP':
      return {
        ...state,
        tripHistory: [action.payload, ...state.tripHistory.slice(0, 49)]
      };
    case 'LOAD_DATA':
      return {
        ...initialState,
        ...action.payload,
        // Ensure config has all required fields with defaults as fallback
        config: { ...initialState.config, ...(action.payload.config || {}) },
        // Ensure theme has all required fields
        theme: { ...initialState.theme, ...(action.payload.theme || {}) },
        // Ensure language is set
        language: action.payload.language || initialState.language
      };
    default:
      return state;
  }
}

const applyTheme = (isDark) => {
  if (typeof document !== 'undefined') {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
};

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Initialize theme and language
  useEffect(() => {
    const savedData = localStorage.getItem('sidefare-data');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        dispatch({ type: 'LOAD_DATA', payload: parsedData });
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    } else {
      // Check system preference for dark mode
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        dispatch({ type: 'UPDATE_THEME', payload: { mode: 'dark' } });
      }
    }
  }, []);

  // Apply theme changes to DOM
  useEffect(() => {
    applyTheme(state.theme.isDark);
  }, [state.theme.isDark]);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('sidefare-data', JSON.stringify(state));
  }, [state]);

  // Helper function to get translations
  const t = (key, params = {}) => getTranslation(key, state.language, params);

  return (
    <AppContext.Provider value={{ state, dispatch, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}