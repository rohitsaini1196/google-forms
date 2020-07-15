import React from 'react'

import Dashboard from './Dashboard'
import LandingPage from './LandingPage'

//import auth from '../services/authService'


function Home() {

  return (
       // auth.isAuthenticated 
       true
        ? (
            <Dashboard />
        ) : (
          <LandingPage />   
        )  
  );
}

export default Home
