var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/css/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', 'bootstrap.css'));
});

app.get('/css/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', 'style.css'));
});

app.get('/images/logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'logo.png'));
});

app.get('/ui/background.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'background.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
