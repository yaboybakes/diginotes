// Modules
var express = require('express');
var path = require(`path`);
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Promise = require("bluebird");

var PORT = process.env.PORT || 3000;
var app = express();
var routes = require('./api/routes/routes')

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json())
// Routes
app.get('/', function(req, res) {
  res.sendFile('public/index.html', { root: __dirname });
});

app.use('/api',routes);

// Connection to PORT
app.listen(PORT, function() {
  console.log(`Listening On Port: ${PORT}`);
});

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/dn");

var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
});
