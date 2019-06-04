var express = require('express');
var router = express.Router();
var shell = require('shelljs');

router.get('/', function(req, res, next) {
  res.render('../views/index.ejs', { title: 'Learning Analytics App' });
});

router.post('/', function(req, res, next) {

  var assessment_type = req.body.assessment_type;
  var weight = req.body.weight;
  var score = req.body.score;
  var score_num = req.body.score_num;
    if (score_num === "") score_num = "undefined";
  var gender = req.body.gender;
  var region = req.body.region;
    if (region === "") region = "undefined";
  var education = req.body.education;
  var age = req.body.age;
  var disability = req.body.disability;
  var result = req.body.result;

  console.log("TEST" + shell.exec('./public/shell/test.sh ' + assessment_type + ' ' + weight + ' ' + score + ' ' + score_num + ' ' + gender + ' ' + region + ' ' + education + ' ' + age + ' ' + disability + ' ' + result));

  //console.log("[SPARK SUBMIT]" + shell.exec('./public/shell/submit.sh '+ assessment_type + ' ' + weight + ' ' + score + ' ' + score_num + ' ' + gender + ' ' + region + ' ' + education + ' ' + age + ' ' + disability + ' ' + result));
  //console.log("[SPARK GET]" + shell.exec('./public/shell/getData.sh'));

  res.render('../views/index.ejs', { title: 'Learning Analytics App' });
});

module.exports = router;
