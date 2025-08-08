import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { setupIonicReact } from '@ionic/react';

/* Estilos de Ionic */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Tema por defecto y variables */
import './theme/variables.css';

setupIonicReact();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
