import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { store } from './Redux1/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* by using wrap our provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
