const mongoose = require('mongoose');
const {Schema} = mongoose;


//const ProgrammingLanguage = new Schema ( {value: {type: String}  }  );

module.exports = mongoose.model('ProgrammingLanguage', new Schema(
  { 
      "title": {type: String},
      "description": {type: String}
    }
  ), 'Courses'); 

//module.exports = mongoose.model('ProgrammingLanguage', ProgrammingLanguage)