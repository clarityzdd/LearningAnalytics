var express = require('express');
var routes = require('./routes/index');

var app = express();


app.set('view engine', 'ejs');

app.use("/", routes);

app.listen(8888, function() {
  console.log("Server started on port 8888");
});

module.exports = app;