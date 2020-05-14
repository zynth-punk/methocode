const express = require('express');
const db = require('./data');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router();
require('dotenv').config();

var path = require('path');

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname , '/public')));

var pageRouter = require('./routes/page_router.js');

app.use('/', pageRouter);


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  });