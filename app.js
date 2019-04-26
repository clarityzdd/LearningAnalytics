var express = require('express');
var routes = require('./routes/index');
var path = require('path');

var app = express();


app.set('view engine', 'ejs');

app.use("/", routes);
app.use('/', express.static(path.join(__dirname, '/public/javascripts')));
app.use('/', express.static(path.join(__dirname, '/public/stylesheets')));


app.listen(8888, function() {
  console.log("Server started on port 8888");
});

module.exports = app;