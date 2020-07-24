var mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');



var FormSchema = new mongoose.Schema({

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  questions : [{
    questionText: String,
    questionImage: {type: String, default: ""},

    options: [{
      optionText : String,
      optionImage: {type: String, default: ""},
    }]
    
  }]
 }, {timestamps: true});

FormSchema.plugin(mongoosePaginate);
Form= mongoose.model('Form', FormSchema ,'Form');

module.exports = Form; 
