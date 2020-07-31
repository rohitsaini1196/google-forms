import axios from 'axios';
const API_URL = "http://localhost:5000/api/form/";


export default {
    getForms(userId){
        return axios
        .get(API_URL + "getuserforms/" +userId)
        .then(response =>{
            return response.data;
        })
    },

    createForm(data){
        console.log(data);
        return axios
        .post(API_URL + "create", data)
        .then(response =>{
            console.log(response.data); 
            return response.data;
        })
    },

    getForm(formId){
        return axios
        .get(API_URL + "form/"+formId)
        .then(response =>{
          //  console.log(response.data);
            return response.data;   
        })
    },

    autoSave(data){
        console.log(data);
        return axios
        .put(API_URL + "/editform/", data)
        .then(response =>{
              console.log(response.data);
              return response.data;   
          })
    },

    submitResponse(data){
        console.log(data);
        return axios
        .post(API_URL + "addresponse", data)
        .then(response =>{
            console.log(response.data); 
            return response.data;
        })
    },

    getResponse(formId){
      //  console.log(formId);
        return axios
        .get(API_URL + "getresponse/" + formId)
        .then(response =>{
           // console.log(response.data); 
            return response.data;
        })
        
    }

    
    
  };

