import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);