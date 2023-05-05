import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ActivitiesContextProvider } from './context/ActivityContext'
import { ReservationContextProvider } from './context/ReservationContext'
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ActivitiesContextProvider>
        <ReservationContextProvider>
          <App />
        </ReservationContextProvider>
      </ActivitiesContextProvider>
    </AuthContextProvider>    
  </React.StrictMode>
);
