import React from 'react'

import Dashboard from './Dashboard'
import LandingPage from './LandingPage'

import auth from '../services/authService'


function Home() {
const isAuthenticated = auth.isAuthenticated();
  return (
       isAuthenticated
        ? (
            <Dashboard />
        ) : (
          <LandingPage />   
        )  
  );
}

export default Home
