var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/signup', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'signup.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});

app.get('/trending', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'trending.html'));
});

app.get('/css/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', 'bootstrap.css'));
});

app.get('/js/bootstrap.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js', 'bootstrap.js'));
});

app.get('/js/jquery.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js', 'jquery.js'));
});

app.get('/css/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', 'style.css'));
});

app.get('/css/style-trending.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', 'style-trending.css'));
});

app.get('/css/style-login.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', 'style-login.css'));
});

app.get('/css/style-signup.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', 'style-signup.css'));
});

app.get('/images/logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'logo.png'));
});

app.get('/images/logo2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'logo2.png'));
});

app.get('/images/music.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'music.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

app.get('/fonts/glyphicons-halflings-regular.eot', function (req, res) {
  res.sendFile(path.join(__dirname, 'fonts', 'glyphicons-halflings-regular.eot'));
});

app.get('/fonts/glyphicons-halflings-regular.eot?#iefix', function (req, res) {
  res.sendFile(path.join(__dirname, 'fonts', 'glyphicons-halflings-regular.eot?#iefix'));
});

app.get('/fonts/glyphicons-halflings-regular.woff2', function (req, res) {
  res.sendFile(path.join(__dirname, 'fonts', 'glyphicons-halflings-regular.woff2'));
});

app.get('/fonts/glyphicons-halflings-regular.eot', function (req, res) {
  res.sendFile(path.join(__dirname, 'fonts', 'glyphicons-halflings-regular.eot'));
});


app.get('/fonts/glyphicons-halflings-regular.eot', function (req, res) {
  res.sendFile(path.join(__dirname, 'fonts', 'glyphicons-halflings-regular.eot'));
});

