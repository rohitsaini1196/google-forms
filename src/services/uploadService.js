const axios = require("axios");



export default {
    uploadImage(data){
        return axios
        .post("http://localhost:5000/", data, {
        }).then(res => {
            //console.log(res.data)
            return res.data
        })
    }
}