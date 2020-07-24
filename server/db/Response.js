var mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var ResponseSchema = new mongoose.Schema({

  FormId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Form'
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'     
  },

  response : [{
      questionId: String,
      optionId: String,
  }],
  
 }, {timestamps: true});

ResponseSchema.plugin(mongoosePaginate);
Response = mongoose.model('Response', ResponseSchema ,'Response');

module.exports = Response; 