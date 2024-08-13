import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, IsAuthProvider, RoleDataProvider, RolesProvider } from './components/App/Context/AuthenticateContext';

import App from './components/App/App';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RoleDataProvider>
  <IsAuthProvider>
  <RolesProvider>
  <AuthProvider>

    <Router>
      <App />
    </Router>
    </AuthProvider>
    </RolesProvider>
    </IsAuthProvider>
    </RoleDataProvider>
  // </React.StrictMode>,
)
