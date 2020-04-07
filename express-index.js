const express = require('express')
const db = require('./data')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000

var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/PagesTree/')));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/PagesTree/HTML/mainmenu.html'));
});


db.on('error', console.error.bind(console, 'MongoDB connection error:'))




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
