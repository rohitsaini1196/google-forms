import React from 'react';
import auth from '../../services/authService';


function Forms() {

    const [user, setUser] = React.useState({})

    React.useEffect(()=>{
        setUser(auth.getUser());
    }, [])

    return (
        <div> 
        <p>List render of all availiblr forms of the user</p>
        <p>Welcome back Mr. {user.name}</p>
        </div>
    );
}

export default Forms;
