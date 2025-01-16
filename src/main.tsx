import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/App.css';

try {
  const container = document.getElementById('root');
  if (!container) {
    throw new Error('Failed to find the root element');
  }
  
  const root = createRoot(container);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error('Error mounting React app:', error);
  document.body.innerHTML = '<div style="color: white; text-align: center; padding: 2rem;">Failed to load application</div>';
}