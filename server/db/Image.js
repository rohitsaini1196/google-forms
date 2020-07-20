var mongoose = require('mongoose'); 
  
var imageSchema = new mongoose.Schema({ 

    image: 
    { 
        type: String
    } 
}, {timestamps: true}); 

module.exports = new mongoose.model('Image', imageSchema); 