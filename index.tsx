
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mountRoot = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Critical: Could not find root element to mount the application.");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("Failed to render React application:", err);
  }
};

// Execute mounting
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountRoot);
} else {
  mountRoot();
}
