import React from 'react'
import {
  Route,
  Redirect,
  
} from 'react-router-dom'

import auth from '../../services/authService'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      auth.isAuthenticated()
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
  )

export default PrivateRoute;
