const express = require('express');
const db = require('./data');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const router = express.Router();
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname , '/public')));

var pageRouter = require('./routes/page_router.js');

app.use('/', pageRouter); 

db.on('error', console.error.bind(console, 'MongoDB connection error:'));




app.listen(port, () => console.log(`Example app listening on port ${port}!`));
