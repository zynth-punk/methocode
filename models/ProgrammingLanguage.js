const mongoose = require('mongoose');
const {Schema} = mongoose;


//const ProgrammingLanguage = new Schema ( {value: {type: String}  }  );

module.exports = mongoose.model('ProgrammingLanguages', new Schema(
  { 
      "title": {type: String},
      "description": {type: String}
    }
  ), 'ProgrammingLanguages'); 

//module.exports = mongoose.model('ProgrammingLanguage', ProgrammingLanguage)