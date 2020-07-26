
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import jwt from 'jsonwebtoken';
const API_URL = "http://localhost:5000/api/user/";
//const API_URL = "http://192.168.225.23:5000/api/user/"



export default   {

    isAuthenticated() {
      const token = localStorage.getItem('userTicket')
        if (token) {
          return true
        } else {
          return false
        }
    },

    getGuestUser(){
        return {name: "Guest 123", userId: "guest123", email: "coolboy69@gg.com"}
    },

    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },

    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    },


    loginWithGoogle(res) {
      var data = {
        name: res.profileObj.name,
        email : res.profileObj.email,
        image: res.profileObj.imageUrl
      }

      return axios
        .post(API_URL + "login", data)
        .then(response => {
          console.log(response.data); 
          if (response.data.accessToken) {
            localStorage.setItem("userTicket", JSON.stringify(response.data.accessToken));          
          }
          return response.data;
        });
    },

    loginAsGuest(){
      var userData = {
        name: "Cool Guest", 
        id: "y2jsdqakq9rqyvtd4gf6g", 
        email: "coolboy69@gg.com"
      }

      const accessToken = jwt.sign(userData, "thisisaguesttokenwithsomeshittystring8", {expiresIn: '24h'});
      localStorage.setItem("userTicket", JSON.stringify(accessToken));   
      return accessToken;   

    },

    logout() {
      localStorage.removeItem("userTicket");
    },

    getCurrentUser() {
       return jwtDecode(localStorage.getItem('userTicket'));
     },
  };