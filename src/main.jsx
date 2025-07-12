import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Remove loading screen when app is ready
const removeLoading = () => {
  const loadingElement = document.querySelector('.app-loading');
  if (loadingElement) {
    loadingElement.style.opacity = '0';
    loadingElement.style.transition = 'opacity 0.5s ease-out';
    setTimeout(() => {
      loadingElement.remove();
    }, 500);
  }
};

// Render app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App onReady={removeLoading} />
  </StrictMode>
);

// Remove loading screen after timeout in case app is slow
setTimeout(removeLoading, 2000);