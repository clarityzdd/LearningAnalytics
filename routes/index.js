var express = require('express');
var router = express.Router();
var shell = require('shelljs');

router.get('/', function(req, res, next) {
  res.render('../views/index.ejs', { title: 'Learning Analytics App' });
});

router.post('/', function(req, res, next) {
  console.log("[SPARK SUBMIT]" + shell.exec("/home/user1/Documentos/sparkApp/public/shell/submit.sh"));
  console.log("[SPARK GET]" + shell.exec("/home/user1/Documentos/sparkApp/public/shell/getData.sh"));
  res.render('../views/index.ejs', { title: 'Learning Analytics App' });
});

module.exports = router;
