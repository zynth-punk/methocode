const mongoose = require('mongoose')

require('dotenv').config();

//connect to the database
mongoose.connect(process.env.DB, { useNewUrlParser: true})
    .then(() => console.log('Database connected successfuly'))
    .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

const db = mongoose.connection

module.exports = db