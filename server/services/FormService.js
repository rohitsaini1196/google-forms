const FormModel = require('../db/Form')
const jwt = require('jsonwebtoken');
const jwtDecode = require('jwt-decode');


module.exports = {
    formsGet : async(req,res)=>{
        try{
            var result = await FormModel.find().lean();
            res.send(result);     
        }catch(e){
            res.send(e);
        }
    },


    createForm: async(req,res)=>{     
        try {
             var data = {
                createdBy : req.body.createdBy,
                name: req.body.name,
                description: req.body.description
             }

             


           
        } catch (error) {
            res.send(error)
        }
    }

}

// createdBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User'
//   },

//   name: String,

//   description: {
//     type: String,
//     default: ""
//   },

//   questions : [{
//     questionText: String,
//     questionImage: {type: String, default: ""},
//     options: [{
//       optionText : String,
//       optionImage: {type: String, default: ""},
//     }] 
//   }],