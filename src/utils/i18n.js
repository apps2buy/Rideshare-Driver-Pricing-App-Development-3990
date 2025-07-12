// Internationalization utilities
export const translations = {
  en: {
    // Navigation
    home: 'Home',
    calculate: 'Calculate',
    presets: 'Presets',
    settings: 'Settings',
    
    // Home Page
    appTitle: 'SideFare',
    appSubtitle: 'Professional Rideshare Pricing',
    appTagline: 'Charge fair. Stay in control.',
    appDescription: 'Calculate transparent pricing for off-platform trips with real-time mapping and detailed breakdowns',
    startCalculating: 'Start Calculating',
    currentRates: 'Current Rates',
    baseFare: 'Base Fare',
    perUnit: 'Per {unit}',
    tripMode: 'Trip Mode',
    roundTripDefault: 'Round Trip Default',
    oneWayDefault: 'One-way Default',
    
    // Features
    realTimeRoutes: 'Real-Time Routes',
    googleMapsIntegration: 'Google Maps integration',
    transparentPricing: 'Transparent Pricing',
    buildRiderTrust: 'Build rider trust',
    instantResults: 'Instant Results',
    calculateInSeconds: 'Calculate in seconds',
    driverFocused: 'Driver Focused',
    madeForProfessionals: 'Made for professionals',
    
    // Calculator Page
    calculateTrip: 'Calculate Trip',
    enterAddresses: 'Enter addresses to get real-time pricing',
    fillTestAddresses: 'Fill Test Addresses',
    tripDetails: 'Trip Details',
    pickupAddress: 'Pickup Address',
    dropoffAddress: 'Dropoff Address',
    enterPickupLocation: 'Enter pickup location',
    enterDropoffLocation: 'Enter dropoff location',
    waitTime: 'Wait Time (minutes)',
    tripOptions: 'Trip Options',
    roundTrip: 'Round Trip',
    roundTripDescription: 'Calculate return journey automatically',
    calculateFare: 'Calculate Fare',
    waitFee: 'Wait Time',
    
    // Results Page
    tripCalculated: 'Trip Calculated!',
    readyToShare: 'Ready to share with your rider',
    tripRoute: 'Trip Route',
    pickup: 'Pickup',
    dropoff: 'Dropoff',
    distance: 'Distance',
    duration: 'Duration',
    type: 'Type',
    round: 'Round',
    oneWay: 'One-way',
    fareBreakdown: 'Fare Breakdown',
    subtotal: 'Subtotal',
    totalTax: 'Total Tax',
    total: 'Total',
    saveTrip: 'Save Trip',
    share: 'Share',
    professionalTip: 'Professional Tip',
    transparencyTip: 'Show this detailed breakdown to your rider before starting the trip. Transparency builds trust and helps justify your fair pricing.',
    paymentOptions: 'Payment Options',
    paymentAdvice: 'Recommend these payment methods to your rider for a quick and easy transaction:',
    paymentTip: 'For a smooth experience, accept payment through popular payment apps available in your region.',
    
    // Config Page
    configTitle: 'Settings',
    configDescription: 'Configure your pricing preferences',
    appearance: 'Appearance',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    themeDescription: 'Switch between light and dark modes for your preferred viewing experience.',
    language: 'Language',
    basicSettings: 'Basic Settings',
    countryRegion: 'Country/Region',
    currency: 'Currency',
    distanceUnit: 'Distance Unit',
    pricing: 'Pricing',
    ratePerUnit: 'Rate per {unit}',
    waitTimeFee: 'Wait Time Fee per Minute',
    taxConfiguration: 'Tax Configuration',
    includeTax: 'Include Tax',
    addTaxToPrice: 'Add tax to final price',
    taxStructure: 'Tax Structure',
    singleTax: 'Single Tax',
    dualTax: 'Dual Tax (Federal + Provincial/State)',
    tripleTax: 'Triple Tax (Federal + State + Local)',
    saveSettings: 'Save Settings',
    settingsSaved: 'Settings saved successfully!',
    roundTripByDefault: 'Round Trip by Default',
    autoCalculateReturn: 'Auto-calculate return trips',
    
    // Presets Page
    presetsTitle: 'Presets',
    presetsDescription: 'Save and manage your pricing configurations',
    addNewPreset: 'Add New Preset',
    editPreset: 'Edit Preset',
    presetName: 'Preset Name',
    presetNamePlaceholder: 'e.g., Airport Runs, City Center',
    updatePreset: 'Update Preset',
    savePreset: 'Save Preset',
    loadThisPreset: 'Load This Preset',
    noPresetsYet: 'No Presets Yet',
    createFirstPreset: 'Create your first pricing preset to get started',
    addPreset: 'Add Preset',
    
    // Map View
    routePreview: 'Route Preview',
    enterLocationsForRoute: 'Enter pickup and dropoff locations to see route',
    calculatingRoute: 'Calculating route...',
    routeCalculated: 'Route Calculated',
    mapPreviewUnavailable: 'Map preview unavailable',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    back: 'Back',
    next: 'Next',
    done: 'Done',
    
    // Units
    miles: 'miles',
    kilometers: 'kilometers',
    mins: 'mins',
    min: 'min',
    
    // Countries
    countries: {
      'United States': 'United States',
      'Canada': 'Canada',
      'United Kingdom': 'United Kingdom',
      'Australia': 'Australia',
      'Germany': 'Germany',
      'France': 'France',
      'Spain': 'Spain',
      'Italy': 'Italy',
      'Netherlands': 'Netherlands',
      'Belgium': 'Belgium',
      'Mexico': 'Mexico',
      'Brazil': 'Brazil',
      'Argentina': 'Argentina',
      'Japan': 'Japan',
      'South Korea': 'South Korea',
      'India': 'India',
      'Other': 'Other'
    },
    
    // Payment Methods
    paymentMethods: {
      'cash': 'Cash',
      'venmo': 'Venmo',
      'cashapp': 'Cash App',
      'zelle': 'Zelle',
      'paypal': 'PayPal',
      'interac': 'Interac e-Transfer',
      'banktransfer': 'Bank Transfer',
      'revolut': 'Revolut',
      'payid': 'PayID',
      'upi': 'UPI',
      'paytm': 'Paytm',
      'phonePe': 'PhonePe',
      'pix': 'PIX',
      'boleto': 'Boleto',
      'linepay': 'LINE Pay',
      'paypay': 'PayPay',
      'digitalwallet': 'Digital Wallet'
    },
    
    // Tax Labels
    taxLabels: {
      gst: 'GST',
      hst: 'HST',
      pst: 'PST',
      qst: 'QST',
      vat: 'VAT',
      federalTax: 'Federal Tax',
      stateTax: 'State Tax',
      provincialTax: 'Provincial Tax',
      localTax: 'Local Tax'
    },
    
    // Sample Addresses
    sampleAddresses: {
      pickup: ['123 Main Street', '456 Oak Avenue', '789 Pine Boulevard', '321 Elm Drive'],
      dropoff: ['Downtown Plaza', 'City Center', 'Shopping Mall', 'Airport Terminal']
    }
  },
  
  es: {
    // Navigation
    home: 'Inicio',
    calculate: 'Calcular',
    presets: 'Presets',
    settings: 'Ajustes',
    
    // Home Page
    appTitle: 'SideFare',
    appSubtitle: 'Precios Profesionales para Conductores',
    appTagline: 'Cobra justo. Mantén el control.',
    appDescription: 'Calcula precios transparentes para viajes fuera de plataforma con mapas en tiempo real y desglose detallado',
    startCalculating: 'Comenzar Cálculo',
    currentRates: 'Tarifas Actuales',
    baseFare: 'Tarifa Base',
    perUnit: 'Por {unit}',
    tripMode: 'Modo de Viaje',
    roundTripDefault: 'Ida y Vuelta por Defecto',
    oneWayDefault: 'Solo Ida por Defecto',
    
    // Features
    realTimeRoutes: 'Rutas en Tiempo Real',
    googleMapsIntegration: 'Integración con Google Maps',
    transparentPricing: 'Precios Transparentes',
    buildRiderTrust: 'Genera confianza del pasajero',
    instantResults: 'Resultados Instantáneos',
    calculateInSeconds: 'Calcula en segundos',
    driverFocused: 'Enfocado en Conductores',
    madeForProfessionals: 'Hecho para profesionales',
    
    // Calculator Page
    calculateTrip: 'Calcular Viaje',
    enterAddresses: 'Ingresa direcciones para obtener precios en tiempo real',
    fillTestAddresses: 'Llenar Direcciones de Prueba',
    tripDetails: 'Detalles del Viaje',
    pickupAddress: 'Dirección de Recogida',
    dropoffAddress: 'Dirección de Destino',
    enterPickupLocation: 'Ingresa ubicación de recogida',
    enterDropoffLocation: 'Ingresa ubicación de destino',
    waitTime: 'Tiempo de Espera (minutos)',
    tripOptions: 'Opciones del Viaje',
    roundTrip: 'Ida y Vuelta',
    roundTripDescription: 'Calcular viaje de regreso automáticamente',
    calculateFare: 'Calcular Tarifa',
    waitFee: 'Tiempo de Espera',
    
    // Results Page
    tripCalculated: '¡Viaje Calculado!',
    readyToShare: 'Listo para compartir con tu pasajero',
    tripRoute: 'Ruta del Viaje',
    pickup: 'Recogida',
    dropoff: 'Destino',
    distance: 'Distancia',
    duration: 'Duración',
    type: 'Tipo',
    round: 'Ida y Vuelta',
    oneWay: 'Solo Ida',
    fareBreakdown: 'Desglose de Tarifa',
    subtotal: 'Subtotal',
    totalTax: 'Total de Impuestos',
    total: 'Total',
    saveTrip: 'Guardar Viaje',
    share: 'Compartir',
    professionalTip: 'Consejo Profesional',
    transparencyTip: 'Muestra este desglose detallado a tu pasajero antes de iniciar el viaje. La transparencia genera confianza y ayuda a justificar tu precio justo.',
    paymentOptions: 'Opciones de Pago',
    paymentAdvice: 'Recomienda estos métodos de pago a tu pasajero para una transacción rápida y sencilla:',
    paymentTip: 'Para una experiencia fluida, acepta pagos a través de aplicaciones de pago populares disponibles en tu región.',
    
    // Config Page
    configTitle: 'Configuración',
    configDescription: 'Configura tus preferencias de precios',
    appearance: 'Apariencia',
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
    themeDescription: 'Cambia entre modos claro y oscuro para tu experiencia de visualización preferida.',
    language: 'Idioma',
    basicSettings: 'Configuración Básica',
    countryRegion: 'País/Región',
    currency: 'Moneda',
    distanceUnit: 'Unidad de Distancia',
    pricing: 'Precios',
    ratePerUnit: 'Tarifa por {unit}',
    waitTimeFee: 'Tarifa de Tiempo de Espera por Minuto',
    taxConfiguration: 'Configuración de Impuestos',
    includeTax: 'Incluir Impuestos',
    addTaxToPrice: 'Añadir impuestos al precio final',
    taxStructure: 'Estructura de Impuestos',
    singleTax: 'Impuesto Único',
    dualTax: 'Impuesto Dual (Federal + Provincial/Estatal)',
    tripleTax: 'Impuesto Triple (Federal + Estatal + Local)',
    saveSettings: 'Guardar Configuración',
    settingsSaved: '¡Configuración guardada exitosamente!',
    roundTripByDefault: 'Ida y Vuelta por Defecto',
    autoCalculateReturn: 'Calcular viajes de regreso automáticamente',
    
    // Presets Page
    presetsTitle: 'Presets',
    presetsDescription: 'Guarda y administra tus configuraciones de precios',
    addNewPreset: 'Añadir Nuevo Preset',
    editPreset: 'Editar Preset',
    presetName: 'Nombre del Preset',
    presetNamePlaceholder: 'ej., Viajes al Aeropuerto, Centro de la Ciudad',
    updatePreset: 'Actualizar Preset',
    savePreset: 'Guardar Preset',
    loadThisPreset: 'Cargar Este Preset',
    noPresetsYet: 'No Hay Presets Aún',
    createFirstPreset: 'Crea tu primer preset de precios para comenzar',
    addPreset: 'Añadir Preset',
    
    // Map View
    routePreview: 'Vista Previa de Ruta',
    enterLocationsForRoute: 'Ingresa ubicaciones de recogida y destino para ver la ruta',
    calculatingRoute: 'Calculando ruta...',
    routeCalculated: 'Ruta Calculada',
    mapPreviewUnavailable: 'Vista previa del mapa no disponible',
    
    // Common
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito',
    cancel: 'Cancelar',
    save: 'Guardar',
    delete: 'Eliminar',
    edit: 'Editar',
    back: 'Atrás',
    next: 'Siguiente',
    done: 'Hecho',
    
    // Units
    miles: 'millas',
    kilometers: 'kilómetros',
    mins: 'mins',
    min: 'min',
    
    // Countries
    countries: {
      'United States': 'Estados Unidos',
      'Canada': 'Canadá',
      'United Kingdom': 'Reino Unido',
      'Australia': 'Australia',
      'Germany': 'Alemania',
      'France': 'Francia',
      'Spain': 'España',
      'Italy': 'Italia',
      'Netherlands': 'Países Bajos',
      'Belgium': 'Bélgica',
      'Mexico': 'México',
      'Brazil': 'Brasil',
      'Argentina': 'Argentina',
      'Japan': 'Japón',
      'South Korea': 'Corea del Sur',
      'India': 'India',
      'Other': 'Otro'
    },
    
    // Payment Methods
    paymentMethods: {
      'cash': 'Efectivo',
      'venmo': 'Venmo',
      'cashapp': 'Cash App',
      'zelle': 'Zelle',
      'paypal': 'PayPal',
      'interac': 'Interac e-Transfer',
      'banktransfer': 'Transferencia Bancaria',
      'revolut': 'Revolut',
      'payid': 'PayID',
      'upi': 'UPI',
      'paytm': 'Paytm',
      'phonePe': 'PhonePe',
      'pix': 'PIX',
      'boleto': 'Boleto',
      'linepay': 'LINE Pay',
      'paypay': 'PayPay',
      'digitalwallet': 'Billetera Digital'
    },
    
    // Tax Labels
    taxLabels: {
      gst: 'GST',
      hst: 'HST',
      pst: 'PST',
      qst: 'QST',
      vat: 'IVA',
      federalTax: 'Impuesto Federal',
      stateTax: 'Impuesto Estatal',
      provincialTax: 'Impuesto Provincial',
      localTax: 'Impuesto Local'
    },
    
    // Sample Addresses
    sampleAddresses: {
      pickup: ['123 Calle Principal', '456 Avenida Roble', '789 Boulevard Pino', '321 Calle Olmo'],
      dropoff: ['Plaza Centro', 'Centro de la Ciudad', 'Centro Comercial', 'Terminal del Aeropuerto']
    }
  },
  
  fr: {
    // Navigation
    home: 'Accueil',
    calculate: 'Calculer',
    presets: 'Préréglages',
    settings: 'Paramètres',
    
    // Home Page
    appTitle: 'SideFare',
    appSubtitle: 'Tarification Professionnelle pour Conducteurs',
    appTagline: 'Facturez équitablement. Gardez le contrôle.',
    appDescription: 'Calculez des prix transparents pour les trajets hors plateforme avec cartographie en temps réel et détails complets',
    startCalculating: 'Commencer le Calcul',
    currentRates: 'Tarifs Actuels',
    baseFare: 'Tarif de Base',
    perUnit: 'Par {unit}',
    tripMode: 'Mode de Trajet',
    roundTripDefault: 'Aller-Retour par Défaut',
    oneWayDefault: 'Aller Simple par Défaut',
    
    // Features
    realTimeRoutes: 'Itinéraires en Temps Réel',
    googleMapsIntegration: 'Intégration Google Maps',
    transparentPricing: 'Tarification Transparente',
    buildRiderTrust: 'Créer la confiance du passager',
    instantResults: 'Résultats Instantanés',
    calculateInSeconds: 'Calcule en secondes',
    driverFocused: 'Axé sur les Conducteurs',
    madeForProfessionals: 'Fait pour les professionnels',
    
    // Calculator Page
    calculateTrip: 'Calculer le Trajet',
    enterAddresses: 'Entrez les adresses pour obtenir des prix en temps réel',
    fillTestAddresses: 'Remplir Adresses de Test',
    tripDetails: 'Détails du Trajet',
    pickupAddress: 'Adresse de Prise en Charge',
    dropoffAddress: 'Adresse de Destination',
    enterPickupLocation: 'Entrez le lieu de prise en charge',
    enterDropoffLocation: 'Entrez le lieu de destination',
    waitTime: 'Temps d\'Attente (minutes)',
    tripOptions: 'Options du Trajet',
    roundTrip: 'Aller-Retour',
    roundTripDescription: 'Calculer le voyage de retour automatiquement',
    calculateFare: 'Calculer le Tarif',
    waitFee: 'Temps d\'Attente',
    
    // Results Page
    tripCalculated: 'Trajet Calculé !',
    readyToShare: 'Prêt à partager avec votre passager',
    tripRoute: 'Itinéraire du Trajet',
    pickup: 'Prise en Charge',
    dropoff: 'Destination',
    distance: 'Distance',
    duration: 'Durée',
    type: 'Type',
    round: 'Aller-Retour',
    oneWay: 'Aller Simple',
    fareBreakdown: 'Détail du Tarif',
    subtotal: 'Sous-total',
    totalTax: 'Total des Taxes',
    total: 'Total',
    saveTrip: 'Sauvegarder le Trajet',
    share: 'Partager',
    professionalTip: 'Conseil Professionnel',
    transparencyTip: 'Montrez ce détail complet à votre passager avant de commencer le trajet. La transparence crée la confiance et aide à justifier votre prix équitable.',
    paymentOptions: 'Options de Paiement',
    paymentAdvice: 'Recommandez ces méthodes de paiement à votre passager pour une transaction rapide et facile :',
    paymentTip: 'Pour une expérience fluide, acceptez les paiements via des applications de paiement populaires disponibles dans votre région.',
    
    // Config Page
    configTitle: 'Paramètres',
    configDescription: 'Configurez vos préférences de tarification',
    appearance: 'Apparence',
    darkMode: 'Mode Sombre',
    lightMode: 'Mode Clair',
    themeDescription: 'Basculez entre les modes clair et sombre pour votre expérience de visualisation préférée.',
    language: 'Langue',
    basicSettings: 'Paramètres de Base',
    countryRegion: 'Pays/Région',
    currency: 'Devise',
    distanceUnit: 'Unité de Distance',
    pricing: 'Tarification',
    ratePerUnit: 'Tarif par {unit}',
    waitTimeFee: 'Frais de Temps d\'Attente par Minute',
    taxConfiguration: 'Configuration des Taxes',
    includeTax: 'Inclure les Taxes',
    addTaxToPrice: 'Ajouter les taxes au prix final',
    taxStructure: 'Structure des Taxes',
    singleTax: 'Taxe Unique',
    dualTax: 'Taxe Duale (Fédérale + Provinciale/État)',
    tripleTax: 'Taxe Triple (Fédérale + État + Locale)',
    saveSettings: 'Sauvegarder les Paramètres',
    settingsSaved: 'Paramètres sauvegardés avec succès !',
    roundTripByDefault: 'Aller-Retour par Défaut',
    autoCalculateReturn: 'Calculer automatiquement les trajets de retour',
    
    // Presets Page
    presetsTitle: 'Préréglages',
    presetsDescription: 'Sauvegardez et gérez vos configurations de tarification',
    addNewPreset: 'Ajouter un Nouveau Préréglage',
    editPreset: 'Modifier le Préréglage',
    presetName: 'Nom du Préréglage',
    presetNamePlaceholder: 'ex., Trajets Aéroport, Centre-Ville',
    updatePreset: 'Mettre à Jour le Préréglage',
    savePreset: 'Sauvegarder le Préréglage',
    loadThisPreset: 'Charger ce Préréglage',
    noPresetsYet: 'Aucun Préréglage Encore',
    createFirstPreset: 'Créez votre premier préréglage de tarification pour commencer',
    addPreset: 'Ajouter un Préréglage',
    
    // Map View
    routePreview: 'Aperçu de l\'Itinéraire',
    enterLocationsForRoute: 'Entrez les lieux de prise en charge et de destination pour voir l\'itinéraire',
    calculatingRoute: 'Calcul de l\'itinéraire...',
    routeCalculated: 'Itinéraire Calculé',
    mapPreviewUnavailable: 'Aperçu de la carte indisponible',
    
    // Common
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
    cancel: 'Annuler',
    save: 'Sauvegarder',
    delete: 'Supprimer',
    edit: 'Modifier',
    back: 'Retour',
    next: 'Suivant',
    done: 'Terminé',
    
    // Units
    miles: 'miles',
    kilometers: 'kilomètres',
    mins: 'mins',
    min: 'min',
    
    // Countries
    countries: {
      'United States': 'États-Unis',
      'Canada': 'Canada',
      'United Kingdom': 'Royaume-Uni',
      'Australia': 'Australie',
      'Germany': 'Allemagne',
      'France': 'France',
      'Spain': 'Espagne',
      'Italy': 'Italie',
      'Netherlands': 'Pays-Bas',
      'Belgium': 'Belgique',
      'Mexico': 'Mexique',
      'Brazil': 'Brésil',
      'Argentina': 'Argentine',
      'Japan': 'Japon',
      'South Korea': 'Corée du Sud',
      'India': 'Inde',
      'Other': 'Autre'
    },
    
    // Payment Methods
    paymentMethods: {
      'cash': 'Espèces',
      'venmo': 'Venmo',
      'cashapp': 'Cash App',
      'zelle': 'Zelle',
      'paypal': 'PayPal',
      'interac': 'Virement Interac',
      'banktransfer': 'Virement Bancaire',
      'revolut': 'Revolut',
      'payid': 'PayID',
      'upi': 'UPI',
      'paytm': 'Paytm',
      'phonePe': 'PhonePe',
      'pix': 'PIX',
      'boleto': 'Boleto',
      'linepay': 'LINE Pay',
      'paypay': 'PayPay',
      'digitalwallet': 'Portefeuille Numérique'
    },
    
    // Tax Labels
    taxLabels: {
      gst: 'TPS',
      hst: 'TVH',
      pst: 'TVP',
      qst: 'TVQ',
      vat: 'TVA',
      federalTax: 'Taxe Fédérale',
      stateTax: 'Taxe d\'État',
      provincialTax: 'Taxe Provinciale',
      localTax: 'Taxe Locale'
    },
    
    // Sample Addresses
    sampleAddresses: {
      pickup: ['123 Rue Principale', '456 Avenue Chêne', '789 Boulevard Pin', '321 Rue Orme'],
      dropoff: ['Place du Centre', 'Centre-Ville', 'Centre Commercial', 'Terminal Aéroport']
    }
  },
  
  de: {
    // Navigation
    home: 'Startseite',
    calculate: 'Berechnen',
    presets: 'Voreinstellungen',
    settings: 'Einstellungen',
    
    // Home Page
    appTitle: 'SideFare',
    appSubtitle: 'Professionelle Fahrdienst-Preisgestaltung',
    appTagline: 'Fair berechnen. Kontrolle behalten.',
    appDescription: 'Berechnen Sie transparente Preise für Fahrten außerhalb der Plattform mit Echtzeit-Kartierung und detaillierter Aufschlüsselung',
    startCalculating: 'Berechnung starten',
    currentRates: 'Aktuelle Tarife',
    baseFare: 'Grundtarif',
    perUnit: 'Pro {unit}',
    tripMode: 'Fahrtmodus',
    roundTripDefault: 'Hin- und Rückfahrt Standard',
    oneWayDefault: 'Einfache Fahrt Standard',
    
    // Features
    realTimeRoutes: 'Echtzeit-Routen',
    googleMapsIntegration: 'Google Maps Integration',
    transparentPricing: 'Transparente Preisgestaltung',
    buildRiderTrust: 'Vertrauen der Fahrgäste aufbauen',
    instantResults: 'Sofortige Ergebnisse',
    calculateInSeconds: 'Berechnet in Sekunden',
    driverFocused: 'Fahrer-fokussiert',
    madeForProfessionals: 'Für Profis gemacht',
    
    // Calculator Page
    calculateTrip: 'Fahrt berechnen',
    enterAddresses: 'Geben Sie Adressen ein, um Echtzeit-Preise zu erhalten',
    fillTestAddresses: 'Test-Adressen ausfüllen',
    tripDetails: 'Fahrtdetails',
    pickupAddress: 'Abholadresse',
    dropoffAddress: 'Zieladresse',
    enterPickupLocation: 'Abholort eingeben',
    enterDropoffLocation: 'Zielort eingeben',
    waitTime: 'Wartezeit (Minuten)',
    tripOptions: 'Fahrtoptionen',
    roundTrip: 'Hin- und Rückfahrt',
    roundTripDescription: 'Rückfahrt automatisch berechnen',
    calculateFare: 'Fahrpreis berechnen',
    waitFee: 'Wartezeit',
    
    // Results Page
    tripCalculated: 'Fahrt berechnet!',
    readyToShare: 'Bereit zum Teilen mit Ihrem Fahrgast',
    tripRoute: 'Fahrtroute',
    pickup: 'Abholung',
    dropoff: 'Ziel',
    distance: 'Entfernung',
    duration: 'Dauer',
    type: 'Typ',
    round: 'Hin- und Rückfahrt',
    oneWay: 'Einfache Fahrt',
    fareBreakdown: 'Fahrpreis-Aufschlüsselung',
    subtotal: 'Zwischensumme',
    totalTax: 'Gesamtsteuer',
    total: 'Gesamt',
    saveTrip: 'Fahrt speichern',
    share: 'Teilen',
    professionalTip: 'Professioneller Tipp',
    transparencyTip: 'Zeigen Sie diese detaillierte Aufschlüsselung Ihrem Fahrgast vor Fahrtbeginn. Transparenz schafft Vertrauen und hilft bei der Rechtfertigung Ihrer fairen Preisgestaltung.',
    paymentOptions: 'Zahlungsmöglichkeiten',
    paymentAdvice: 'Empfehlen Sie diese Zahlungsmethoden an Ihren Fahrgast für eine schnelle und einfache Transaktion:',
    paymentTip: 'Für ein reibungsloses Erlebnis, akzeptieren Sie Zahlungen über beliebte Zahlungs-Apps, die in Ihrer Region verfügbar sind.',
    
    // Config Page
    configTitle: 'Einstellungen',
    configDescription: 'Konfigurieren Sie Ihre Preisvoreinstellungen',
    appearance: 'Erscheinungsbild',
    darkMode: 'Dunkler Modus',
    lightMode: 'Heller Modus',
    themeDescription: 'Wechseln Sie zwischen hellen und dunklen Modi für Ihre bevorzugte Seherfahrung.',
    language: 'Sprache',
    basicSettings: 'Grundeinstellungen',
    countryRegion: 'Land/Region',
    currency: 'Währung',
    distanceUnit: 'Entfernungseinheit',
    pricing: 'Preisgestaltung',
    ratePerUnit: 'Tarif pro {unit}',
    waitTimeFee: 'Wartezeit-Gebühr pro Minute',
    taxConfiguration: 'Steuerkonfiguration',
    includeTax: 'Steuern einbeziehen',
    addTaxToPrice: 'Steuern zum Endpreis hinzufügen',
    taxStructure: 'Steuerstruktur',
    singleTax: 'Einzelsteuer',
    dualTax: 'Duale Steuer (Bundes + Landes)',
    tripleTax: 'Dreifache Steuer (Bundes + Landes + Lokal)',
    saveSettings: 'Einstellungen speichern',
    settingsSaved: 'Einstellungen erfolgreich gespeichert!',
    roundTripByDefault: 'Hin- und Rückfahrt standardmäßig',
    autoCalculateReturn: 'Rückfahrten automatisch berechnen',
    
    // Presets Page
    presetsTitle: 'Voreinstellungen',
    presetsDescription: 'Speichern und verwalten Sie Ihre Preiskonfigurationen',
    addNewPreset: 'Neue Voreinstellung hinzufügen',
    editPreset: 'Voreinstellung bearbeiten',
    presetName: 'Name der Voreinstellung',
    presetNamePlaceholder: 'z.B., Flughafen-Fahrten, Stadtzentrum',
    updatePreset: 'Voreinstellung aktualisieren',
    savePreset: 'Voreinstellung speichern',
    loadThisPreset: 'Diese Voreinstellung laden',
    noPresetsYet: 'Noch keine Voreinstellungen',
    createFirstPreset: 'Erstellen Sie Ihre erste Preisvoreinstellung, um zu beginnen',
    addPreset: 'Voreinstellung hinzufügen',
    
    // Map View
    routePreview: 'Routenvorschau',
    enterLocationsForRoute: 'Geben Sie Abhol- und Zielorte ein, um die Route zu sehen',
    calculatingRoute: 'Route wird berechnet...',
    routeCalculated: 'Route berechnet',
    mapPreviewUnavailable: 'Kartenvorschau nicht verfügbar',
    
    // Common
    loading: 'Laden...',
    error: 'Fehler',
    success: 'Erfolg',
    cancel: 'Abbrechen',
    save: 'Speichern',
    delete: 'Löschen',
    edit: 'Bearbeiten',
    back: 'Zurück',
    next: 'Weiter',
    done: 'Fertig',
    
    // Units
    miles: 'Meilen',
    kilometers: 'Kilometer',
    mins: 'Min',
    min: 'Min',
    
    // Countries
    countries: {
      'United States': 'Vereinigte Staaten',
      'Canada': 'Kanada',
      'United Kingdom': 'Vereinigtes Königreich',
      'Australia': 'Australien',
      'Germany': 'Deutschland',
      'France': 'Frankreich',
      'Spain': 'Spanien',
      'Italy': 'Italien',
      'Netherlands': 'Niederlande',
      'Belgium': 'Belgien',
      'Mexico': 'Mexiko',
      'Brazil': 'Brasilien',
      'Argentina': 'Argentinien',
      'Japan': 'Japan',
      'South Korea': 'Südkorea',
      'India': 'Indien',
      'Other': 'Andere'
    },
    
    // Payment Methods
    paymentMethods: {
      'cash': 'Bargeld',
      'venmo': 'Venmo',
      'cashapp': 'Cash App',
      'zelle': 'Zelle',
      'paypal': 'PayPal',
      'interac': 'Interac e-Transfer',
      'banktransfer': 'Banküberweisung',
      'revolut': 'Revolut',
      'payid': 'PayID',
      'upi': 'UPI',
      'paytm': 'Paytm',
      'phonePe': 'PhonePe',
      'pix': 'PIX',
      'boleto': 'Boleto',
      'linepay': 'LINE Pay',
      'paypay': 'PayPay',
      'digitalwallet': 'Digitale Brieftasche'
    },
    
    // Tax Labels
    taxLabels: {
      gst: 'GST',
      hst: 'HST',
      pst: 'PST',
      qst: 'QST',
      vat: 'MwSt',
      federalTax: 'Bundessteuer',
      stateTax: 'Landessteuer',
      provincialTax: 'Provinzsteuer',
      localTax: 'Ortssteuer'
    },
    
    // Sample Addresses
    sampleAddresses: {
      pickup: ['123 Hauptstraße', '456 Eichenallee', '789 Kiefernboulevard', '321 Ulmenweg'],
      dropoff: ['Zentrumsplatz', 'Stadtzentrum', 'Einkaufszentrum', 'Flughafen Terminal']
    }
  }
};

export const getTranslation = (key, language = 'en', params = {}) => {
  const keys = key.split('.');
  let value = translations[language] || translations.en;
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      // Fallback to English if translation not found
      value = translations.en;
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) return key;
      }
      break;
    }
  }
  
  if (typeof value === 'string') {
    // Replace parameters in the string
    return value.replace(/\{(\w+)\}/g, (match, param) => {
      return params[param] || match;
    });
  }
  
  return value || key;
};

export const getSampleAddresses = (language = 'en') => {
  const lang = translations[language] || translations.en;
  const samples = lang.sampleAddresses;
  
  return {
    pickup: samples.pickup[Math.floor(Math.random() * samples.pickup.length)],
    dropoff: samples.dropoff[Math.floor(Math.random() * samples.dropoff.length)]
  };
};

export const getAvailableLanguages = () => [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];