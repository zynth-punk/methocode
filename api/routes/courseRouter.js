const express = require('express');
const router = express.Router();
const ProgrammingLanguages = require('../../models/ProgrammingLanguage.js');
const app = express();
var path = require('path');
var io = require('@pm2/io')
var counter = io.counter({  name : 'Pages browsed' })
const bodyParser = require('body-parser');

router.route('/ProgrammingLanguages').get((req, res) => {
  counter.inc()
  ProgrammingLanguages.find((err,course) => { if (err) { return res.send(err) } return res.json(course); } ) } )




  
  
/*

  router.route('/:courseId')
  .get((req, res) => {
  Course.findById(req.params.bookId, (err,book) => {
      if (err) { return res.send(err) }
      return res.json(book)
      })
})
*/

module.exports = router