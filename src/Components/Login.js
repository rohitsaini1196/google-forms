import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React from 'react'
import authService from '../services/authService';
import { useHistory } from "react-router-dom";


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function Login(props){
    // console.log(props.from);
    // console.log(props);
    
    let history = useHistory();

    const [isLogined , setIsLogined] = React.useState(false);
    const { from } = props.location.state || { from: { pathname: '/' } }
    console.log(from);
    

    React.useEffect(()=>{
        setIsLogined(authService.isAuthenticated())
    }, [])

    const loginGoogle = (response)=>{
        console.log(response);
        authService.loginWithGoogle(response)
        .then(() => {
            history.push(from.pathname);
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
    }

    const loginAsGuest = ()=>{
        authService.loginAsGuest()
        history.push(from.pathname);
        
    }

    const handleLoginFailure = (response)=>{
        console.log('Failed to log in');
    }
    
    const handleLogoutFailure = (response)=>{
        console.log('Failed to log out');
    }

    const logout = (response)=>{
        //console.log(response);
        authService.logout();
        setIsLogined(false);
      }

    return (
        <div>
           
            {isLogined ?
                "": 

                <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText='Login'
                    onSuccess={loginGoogle}
                    onFailure={handleLoginFailure}
                    cookiePolicy={ 'single_host_origin' }
                    responseType='code,token'
                />
            }

            <br></br>
            <br></br>

            <div>
               {
                   isLogined ? (
                       <div>
                           <p>Already logged in. Want to logout?</p>
                           <button onClick={logout}>Logout </button>
                       </div>
                    
                   ) : (
                        <button onClick={loginAsGuest}>Login as Guest</button>
                   )
               }
            </div>
        </div>
    )
}

export default Login;