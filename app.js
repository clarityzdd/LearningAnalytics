var express = require('express');
var routes = require('./routes/index');
var path = require('path');
var shell = require('shelljs');
var bodyParser = require('body-parser');

var app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);
app.use('/', express.static(path.join(__dirname, '/public/javascripts')));
app.use('/', express.static(path.join(__dirname, '/public/stylesheets')));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.listen(8888, function() {
  console.log("Server started on port 8888");
});

module.exports = app;