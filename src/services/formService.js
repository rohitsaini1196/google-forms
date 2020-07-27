import axios from 'axios';
const API_URL = "http://localhost:5000/api/form/";


export default {
    getForms(userId){
        console.log(userId);
        
        return axios
        .get(API_URL + "getuserforms/" +userId)
        .then(response =>{
           // console.log(response.data); 
            return response.data;
        })
    },
  };