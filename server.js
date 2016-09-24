var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

<<<<<<< HEAD
app.get('/article-one', function(req, res) {
  res.send("Article one requested and will be served here");

});

app.get('/article-two', function(req, res) {
  res.send("Article two requested and will be served here");

});

app.get('/article-three', function(req, res) {
  res.send("Article three requested and will be served here");

=======
app.get('/article-one', function(req, res){
    res.send("Article One requested and will be served here")
});

app.get('/article-two', function(req, res){
    res.send("Article Two requested and will be served here")
});

app.get('/article-three', function(req, res){
    res.send("Article Three requested and will be served here")
>>>>>>> b7297eab285ea90f054aa293cb9fc14ce47fe674
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/Puppy.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Puppy.jpg'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
<<<<<<< HEAD
=======

>>>>>>> b7297eab285ea90f054aa293cb9fc14ce47fe674

var port = 8081; // Use 8080 for local development because you might already have apache running on 80
app.listen(8081, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
