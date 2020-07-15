import React from 'react'

import Dashboard from './Dashboard'
import LandingPage from './LandingPage'


function App() {
  //const authStatus = auth.isAuthenticated();
  const authStatus = true

  return (
        authStatus ? (
            <Dashboard />
        ) : (
          <LandingPage />   
        )  
  );
}

export default App
