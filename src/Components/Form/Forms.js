import React from 'react';
import auth from '../../services/authService';


function Forms() {

    const [user, setUser] = React.useState({})

    React.useEffect(()=>{
        setUser(auth.getGuestUser());
    }, [])

    return (
        <div> 
        <p>List render of all available forms of the user</p>
        <p>Welcome back Mr. {user.name}</p>
        </div>
    );
}

export default Forms;
