const mongoose = require('mongoose')
const fs = require('fs')
const Course = require('../models/ProgrammingLanguage.js');

require('dotenv').config();

/*
connect to the database
const db = mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Database connected successfuly'))
    .catch(err => console.log(err));
*/
    

const MONGO_USERNAME = 'cscl';
const MONGO_PASSWORD = 'db';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'MethoCodeAPI';

const url = `mongodb://localhost:27017/MethoCode`;

const db = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Database connected successfuly'))
    .catch(err => console.log(err));



module.exports = db

