import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';
const rootElement = document.getElementById('root');

// Create root using createRoot from react-dom/client
const root = createRoot(rootElement);

// Render your app inside the root
root.render(
  <React.StrictMode>
  
      <Provider store={store}>
      <App /></Provider>
    
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

