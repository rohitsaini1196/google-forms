const FormModel = require('../db/Form')
const UserModel = require('../db/User')
const ResponseModel = require('../db/Response')
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

            var newForm = new FormModel(data)
            await newForm.save().then((docs)=>{
                UserModel.updateOne(
                    {_id: data.createdBy },
                    { $push: { createdForms: docs._id}})
                    .then(()=>{
                    console.log("Form id added to user deeatils");
                }).catch(error => console.log("got some error"))  
                res.status(200).json(
                    docs
                );
            })

        } catch (error) {
            res.send(error)
        }
    },

    getFormById: async(req, res)=>{
        try {
            var formId = req.params.formId;

            await FormModel.findOne({_id: formId}).then(async(form)=>{
                 
                 if(form == null){
                     res.status(404).send('Form not found');
                 } else{ 
                     res.status(200).json(form)
                 }
             })

        } catch (error) {
            res.send(error)
        }
    },
    
    deleteForm: async(req, res)=>{

        try {
            var formId = req.params.formId;
            var userId = req.params.userId;

            console.log(formId);
            console.log(userId);

            await FormModel.findOne({_id: formId}).then(async(form)=>{ 
                 console.log(form);
                if(form== null){
                    res.status(404).send('Form not found or already deleted');
                } else { 
                    if(form.createdBy == userId){
                        form.remove(function(err) {
                            if(err) { return res.status(500).send(err) }
                            console.log('Form deleted');                 
                            return res.status(202).send("Form Deleted")
                          });                       
                    } 
                    else{
                        res.status(401).send("You are not the owner of this Form");
                    }
                }
            });
        } catch (error) {
            
        }
    },

    editForm : async(req, res)=>{
        try {
            var  formId =  req.body.formId;
            var data = {
                name: req.body.name,
                description: req.body.description,
                questions: req.body.questions
            }

            console.log("Hi, I am from backend, this is form data that i recivied");
            

            console.log(data);
            

            FormModel.findByIdAndUpdate(formId, data ,{new: true} ,(err, result)=>{
                if(err){
                    res.status(500).send(err)
                }
                else{
                    res.status(200).json(result)
                }
            });
           
        } catch (error) {
            res.send(error)
        }
    },

    getAllFormsOfUser: async(req, res)=>{
        try {
            var userId = req.params.userId;
            console.log(userId);
            await UserModel.findOne({_id:userId}).then(async(user)=>{
                if(user == null){
                    res.status(404).send('User not found');
                } else{ 
                   await FormModel.find().where('_id').in(user.createdForms).exec((err, records) => {
                       console.log(records);
       
                       res.status(200).json(records);
                   });
                }

             //   res.send(docs.createdForms)
            });

            
        } catch (error) {
            res.send(error)
        }
    },

    submitResponse : async(req, res)=>{
        try {
            var data = {
                formId: req.body.formId,
                userId: req.body.userId,
                response: req.body.response
            }
            console.log(data.formId);
            console.log(data.userId);
            
            
            if (data.response.length > 0) {
                var newResponse = new ResponseModel(data)
               // console.log(newResponse);
                
                await newResponse.save().then((docs)=>{              
                    res.status(200).json(
                        docs
                    );
                })
            } 
            else{
                res.status(400).send("FIll atleast one field, MF!"); 
            } 
        } catch (error) {
            res.send(error)
        }
    },

    allResponses : async(req,res)=>{
        try{
            var result = await ResponseModel.find().lean();
            res.json(result);     
        }catch(e){
            res.send(e);
        }
    },

    getResponse: async(req, res)=>{
        try {
            var formId = req.params.formId;
         //   console.log(formId);
            
            await ResponseModel.find({formId: formId}).then(async(responses)=>{ 
                    res.status(200).json(responses)
            })

        } catch (error) {
            res.send(error)
        }
    }

}


// FormId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Form'
//   },

//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User'     
//   },

//   response : [{
//       questionId: String,
//       optionId: String,
//   }],