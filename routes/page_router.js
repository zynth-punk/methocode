var express = require('express');
var router = express.Router();
const app = express();
var path = require('path');


app.use(express.static(path.join(__dirname , '/public')));

router.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/index.html')); 
})

router.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/login.html')); 
})

router.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/about.html')); 
})

router.get('/help', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/help.html')); 
})

router.get('/profile', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/profile.html')); 
})

router.get('/register', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/register.html')); 
})

router.get('/codetranslator', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/codetranslator.html')); 
})

router.get('/mainmenu', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/mainmenu.html')); 
})
router.get('/', function(req, res) { res.redirect('/mainmenu');  } );


module.exports = router;