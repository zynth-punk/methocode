var express = require('express');
var router = express.Router();
var path = require('path');

// Home page route.
router.get('/', function(req, res) { res.sendFile( path.join( __dirname + '/pages/HTML/mainmenu.html' ) ); } );

// About page route.
router.get('/about', function (req, res) {
  res.send('About Methocode');
})

module.exports = router;