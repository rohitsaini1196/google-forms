var mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var FormSchema = new mongoose.Schema({

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  name: String,

  description: {
    type: String,
    default: ""
  },

  questions : [{
    questionText: String,
    questionImage: {type: String, default: ""},
    options: [{
      optionText : String,
      optionImage: {type: String, default: ""},
    }] 
  }],

  stared : {type: Boolean, default : false}
  
 }, {timestamps: true});

FormSchema.plugin(mongoosePaginate);
Form= mongoose.model('Form', FormSchema ,'Form');

module.exports = Form; 
