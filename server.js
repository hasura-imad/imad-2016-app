var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/contact.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});

app.get('/follow.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'follow.html'));
});

app.get('/about.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});

//images

app.get('/dev.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dev.jpg'));
});

app.get('/dev2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dev2.jpg'));
});
app.get('/dev3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dev3.jpg'));
});
app.get('/dev4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dev4.jpg'));
});

app.get('/myself.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'myself.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
