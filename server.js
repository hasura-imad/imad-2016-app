var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/aboutme.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aboutme.html'));
});

app.get('/ui/about_pune.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about_pune.html'));
});

app.get('/ui/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/possibilities.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'possibilities.html'));
});

app.get('/ui/pune-stats.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pune-stats.png'));
});

app.get('/ui/Shaniwar-Wada.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Shaniwar-Wada.jpg'));
});

app.get('/ui/smartcity_vision.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'smartcity_vision.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/what_needed.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'what_needed.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD Course app listening on port <<<${port}!>>>`);
});
