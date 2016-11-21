





website_folder/
   index.html <- this is the homepage
   faq/
     index.html <- this is served from "/faq" and from "/faq/index.html"
   contact/
     index.html <- this is served from "/contact" and "/contact/index.html"
     
     
     
    


var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

        var counter = 0;
        app.get('/counter', function (req,res){
        counter=counter+1;
        res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});


