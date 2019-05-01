var express = require('express');
var router = express.Router();
var shell = require('shelljs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/index.ejs', { title: 'Learning Analytics App' });
});

router.post('/', function(req, res, next) {
  console.log("Testing shelljs..." + shell.exec("/home/user1/Documentos/sparkApp/public/shell/test.sh"));
  res.render('../views/index.ejs', { title: 'Learning Analytics App' });
});

module.exports = router;
