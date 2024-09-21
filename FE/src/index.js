import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer: reducers,
});

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error('Root container not found');
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();