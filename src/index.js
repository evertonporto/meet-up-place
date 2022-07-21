import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { FavoritesContextProvider } from './store/content';
import { FavoriteContext } from './store/content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesContextProvider>
    <App />
  </FavoritesContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

