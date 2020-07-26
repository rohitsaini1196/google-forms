import { GoogleLogin, GoogleLogout } from 'react-google-login';
import authService from '../services/authService';
import { useHistory } from "react-router-dom";
import React from 'react';


import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ViewListIcon from '@material-ui/icons/ViewList';

import GoogleButton from 'react-google-button'
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(1),
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function Login(props){
    const classes = useStyles();
    let history = useHistory();
    const [isLogined , setIsLogined] = React.useState(false);
    const { from } = props.location.state || { from: { pathname: '/' } }
    
    React.useEffect(()=>{
        setIsLogined(authService.isAuthenticated())
    }, [])

    const loginGoogle = (response)=>{
        console.log(response);
        authService.loginWithGoogle(response)
        .then(() => {
          console.log(from.pathname);
          
          if(from.pathname == "/login"){
            history.push("/");

          }else{
            history.push(from.pathname);
          }
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
        authService.logout();
        setIsLogined(false);
      }


    return(
        <div>
             <CssBaseline />
            <div style={{display: 'flex', flexGrow: 1, textAlign: 'start'}}>
                <AppBar position="relative" style={{backgroundColor: 'teal'}}>
                <Toolbar>
                    <ViewListIcon className={classes.icon} onClick={()=>{history.push('/')}} />
                   
                    <Typography variant="h6" color="inherit" noWrap className={classes.title}>
                    Velocity Forms
                    </Typography>
                </Toolbar>
                </AppBar>
            </div>
        <br></br>
            <main>
            <Typography component="h1" variant="h5">
                Login
                </Typography>
        <br></br>
        <br></br>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            {isLogined ?
                "": 
                <GoogleLogin
                    clientId={CLIENT_ID}
                    render={renderProps => (
                        <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled} style={{textAlign: 'center', alignSelf: 'center'}} />                      
                      )}
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
               {  isLogined ? (<div>
                                <p>Already logged in. Want to logout?</p>
                                <button onClick={logout}>Logout </button>
                            </div>) : (
                           <Button
                            onClick={loginAsGuest}
                            variant="contained"
                            style={{textTransform: "none"}}
                            startIcon={<Avatar  src={"https://static.thenounproject.com/png/3244607-200.png"}/>  } >
                            Login as Guest(Anonymous)
                        </Button>
                   )
               }
            </div>
        </div>
                
            </main>
        </div>
    )
}

export default Login;