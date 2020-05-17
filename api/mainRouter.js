var express = require('express');
var router = express.Router();
const app = express();
var path = require('path');
var io = require('@pm2/io')
var counter = io.counter({  name : 'Pages browsed' })


app.use(express.static(path.join(__dirname , '/public')));

router.get('/userlogin', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/login.html')); 
counter.inc()
})

router.get('/usersignup', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/login.html')); 
counter.inc()
})

router.get('/userprofile', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/profile.html')); 
counter.inc()
})

router.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/index.html')); 
counter.inc()
})

router.get('/mainmenu', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/mainmenu.html')); 
counter.inc()
})

router.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/about.html')); 
counter.inc()
})

router.get('/help', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/help.html')); 
counter.inc()
})

router.get('/translator', function (req, res) {
  res.sendFile(path.join(__dirname , '../views/codetranslator.html')); 
counter.inc()
})

router.get('/', function(req, res) { res.redirect('/index');  } );




module.exports = router;