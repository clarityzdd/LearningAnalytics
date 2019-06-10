var express = require('express');
var router = express.Router();
var shell = require('shelljs');

router.get('/', function(req, res, next) {
  res.render('../views/index.ejs', { title: 'Learning Analytics App' });
});

router.post('/table', function(req, res, next) {

  var filter = req.body.selectbasic;

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

  var registration = req.body.registration;
  var registration_num = req.body.registration_num;
    if(registration_num === "") registration_num = "undefined";
  var clicks = req.body.clicks;
  var clicks_num = req.body.clicks_num;
    if(clicks_num === "") clicks_num = "undefined";
  var activity = req.body.activity;
  var week = req.body.week;
    if (week === "") week = "undefined";
  var length = req.body.length;
  var length_num = req.body.length_num;
    if(length_num === "") length_num = "undefined";

  if (filter === "assessment") {
    console.log("TEST" + shell.exec('./public/shell/test.sh ' + filter + ' ' + assessment_type + ' ' + weight + ' ' + score + ' ' + score_num + ' ' + gender + ' ' + region + ' ' + education + ' ' + age + ' ' + disability + ' ' + result));
    //console.log("[SPARK SUBMIT]" + shell.exec('./public/shell/submit.sh '+ filter + ' ' + assessment_type + ' ' + weight + ' ' + score + ' ' + score_num + ' ' + gender + ' ' + region + ' ' + education + ' ' + age + ' ' + disability + ' ' + result));
    //console.log("[SPARK GET]" + shell.exec('./public/shell/getData.sh'));
  } else if (filter === "course") {
    console.log("TEST" + shell.exec('./public/shell/test.sh ' + filter + ' ' + gender + ' ' + region + ' ' + education + ' ' + age + ' ' + disability + ' ' + result + ' ' + registration + ' ' + registration_num + ' ' + clicks + ' ' + clicks_num + ' ' + activity + ' ' + week + ' ' + length + ' ' + length_num));
    //console.log("[SPARK SUBMIT]" + shell.exec('./public/shell/submit.sh '+ filter + ' ' + gender + ' ' + region + ' ' + education + ' ' + age + ' ' + disability + ' ' + result + ' ' + registration + ' ' + registration_num + ' ' + clicks + ' ' + clicks_num + ' ' + activity + ' ' + week + ' ' + length + ' ' + length_num));
    //console.log("[SPARK GET]" + shell.exec('./public/shell/getData.sh'));
  }

  res.render('../views/table.ejs', { title: 'Learning Analytics App' });
});

router.post('/chart1', function(req, res, next) {
  res.render('../views/chart.ejs', { title: 'Learning Analytics App' });
});

module.exports = router;
