const express = require('express');
const app = express();
const api = require('./api/mainRouter.js');
const courseRouter = require('./api//routes/courseRouter.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');
require('dotenv').config();
const db = require('./database/databaseIndex.js');

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use('/', api);

app.use(express.static(path.join(__dirname , '/public')));

app.use(morgan('dev'));

app.use('/courses', courseRouter);














app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  });