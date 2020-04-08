var express = require('express');
var router = express.Router();
const app = express();
var path = require('path');


app.use(express.static(path.join(__dirname , '/public')));

router.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname , '../pages/HTML/index.html')); 
})

router.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname , '../pages/HTML/login.html')); 
})

router.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname , '../pages/HTML/about.html')); 
})

router.get('/help', function (req, res) {
  res.sendFile(path.join(__dirname , '../pages/HTML/help.html')); 
})

router.get('/profile', function (req, res) {
  res.sendFile(path.join(__dirname , '../pages/HTML/profile.html')); 
})

router.get('/register', function (req, res) {
  res.sendFile(path.join(__dirname , '../pages/HTML/register.html')); 
})

router.get('/codetranslator', function (req, res) {
  res.sendFile(path.join(__dirname , '../pages/HTML/codetranslator.html')); 
})

router.get('/mainmenu', function (req, res) {
  res.sendFile(path.join(__dirname , '../pages/HTML/mainmenu.html')); 
})
router.get('/', function(req, res) { res.redirect('/mainmenu');  } );


module.exports = router;