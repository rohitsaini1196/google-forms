import React from 'react';
import auth from '../../services/authService';


function Forms() {

    const [user, setUser] = React.useState({})
    console.log(user);
    
    React.useEffect(()=>{
        setUser(auth.getCurrentUser);
    }, [])

    return (
        <div> 
        <p>List render of all available forms of the user</p>
        <p>Welcome back Mr. {user.name}</p>
        </div>
    );
}

export default Forms;
