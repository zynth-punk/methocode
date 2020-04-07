const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/methocode', { useNewUrlParser: true, useUnifiedTopology: true } ).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


const db = mongoose.connection

module.exports = db