var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/index.ejs', { title: 'Learning Analytics App' });
});

module.exports = router;
