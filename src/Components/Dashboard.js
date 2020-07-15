import React from 'react';
import auth from '../services/authService';

function Dashboard() {

    const [user, setUser] = React.useState({})

    React.useEffect(()=>{
        setUser(auth.getUser());
    }, [])

  return (
    <div>
        <p>Welcome {user.name}</p>
        <h3>Im the Actual Dashboard</h3>
     
    </div>
  );
}

export default Dashboard;
