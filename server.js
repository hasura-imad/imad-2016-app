var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var names = [];


var articles = {
'article-one' : {
    title:'Article One | Hemant Gupta',
    heading:'Article One',
    date:'Sep 21, 2017',
    content:`<p>This is my first article and I am publishing it.This is my first article and I am publishing it.This is my first article and I am publishing it.This is my first article and I am publishing it.</p>
    <p>This is my first article and I am publishing it.This is my first article and I am publishing it.This is my first article and I am publishing it.This is my first article and I am publishing it.</p>
    <p>This is my first article and I am publishing it.This is my first article and I am publishing it.This is my first article and I am publishing it.This is my first article and I am publishing it.</p>`
},
'article-two':{title:'Article Two | Hemant Gupta',
    heading:'Article Two',
    date:'Sep 21, 2017',
    content:`<p>This is my second article and I am publishing it.This is my second article and I am publishing it.This is my second article and I am publishing it.This is my second article and I am publishing it.</p>`
    },
'article-three':{title:'Article Three | Hemant Gupta',
    heading:'Article Three',
    date:'Sep 21, 2018',
    content:`<p>This is my first article and I am publishing it.This is my first article and I am publishing it.This is my first article and I am publishing it.This is my first article and I am publishing it.</p>
    <p>This is my first article and I am publishing it.This is my first article and I am publishing it.This is my first article and I am publishing it.This is my first article and I am publishing it.</p>
    <p>This is my first article and I am publishing it.This is my first article and I am publishing it.This is my first article and I am publishing it.This is my first article and I am publishing it.</p>`}};
function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

var htmlTemplate=`<html>
<head><title>${title}</title>
<link href="/ui/style.css" rel="stylesheet" />
<meta name="viewport" content="width-device-width,initial-scale-1"/>
</head>
<body>
   <div class ="conatiner">
    <div>
<div><a href = "/">Head to Home</a></div><hr/>
<h3>${heading}</h3>

<div>${date}</div>
<div>${content}</div>
</div>
</div>
</body>
</html>`; return htmlTemplate;}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter =0;
app.get('/counter',function(req,res){
counter = counter+1;
res.send(counter.toString());
});
    
//app.get('/:articleName', function (req, res) {
  // var articleName = req.params.articleName;
 //res.send(createTemplate(articles[articleName]));})

app.get('/login.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
}); 

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/submit-btn',function(req,res){
var name = req.query.name;
names.push(name);
req.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
 
});
