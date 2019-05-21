var express = require('express');
var router = express.Router();
var shell = require('shelljs');

router.get('/', function(req, res, next) {
  res.render('../views/index.ejs', { title: 'Learning Analytics App' });
});

router.post('/', function(req, res, next) {

  var assessment_type = req.body.assessment_type;

  //console.log("TEST" + shell.exec('./public/shell/test.sh ' + assessment_type));

  console.log("[SPARK SUBMIT]" + shell.exec('./public/shell/submit.sh '+ assessment_type));
  console.log("[SPARK GET]" + shell.exec('./public/shell/getData.sh'));

  res.render('../views/index.ejs', { title: 'Learning Analytics App' });
});

module.exports = router;
