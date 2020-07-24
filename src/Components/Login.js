import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React from 'react'
import authService from '../services/authService';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function Login(){

    const [isLogined , setIsLogined] = React.useState(false);
    const [accessTicket, setAccessTicket] = React.useState("");
    const [userGData, setUserGData] = React.useState({
        name: "",
        image: "",
        email: ""
    })

    React.useEffect(()=>{

    }, [])

    const loginGoogle = (response)=>{
        console.log(response);
        authService.loginWithGoogle(response)
        .then(() => {
            // this.props.history.push('/');  
            // window.location.reload(false);  
            console.log('dot');
                  
          },
          error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            console.log(resMessage);
          }      
          );

        setIsLogined(false);
        setAccessTicket(response.accessToken);
    }

    const handleLoginFailure = (response)=>{
        alert('Failed to log in')
    }
    
    const handleLogoutFailure = (response)=>{
        alert('Failed to log out')
    }

    const logout = (response)=>{
        setIsLogined(false);
        setAccessTicket("");
      }

    return (
        <div>
            <p>{accessTicket}</p>
            {isLogined ?
                <GoogleLogout
                    clientId={CLIENT_ID}
                    buttonText='Logout'
                    onLogoutSuccess={ this.logout }
                    onFailure={handleLogoutFailure}
                ></GoogleLogout>: 

                <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText='Login'
                    onSuccess={loginGoogle}
                    onFailure={handleLoginFailure}
                    cookiePolicy={ 'single_host_origin' }
                    responseType='code,token'
                />
            }
        </div>
    )
}

export default Login;