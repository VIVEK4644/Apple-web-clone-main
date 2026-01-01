import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {  persistStores, store } from './Redux/Store.js';
import { PersistGate } from 'redux-persist/integration/react';
 import { ToastContainer } from 'react-toastify';
import ScrollToTop from './Component/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistStores}>
      <BrowserRouter>
      <ScrollToTop/>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
