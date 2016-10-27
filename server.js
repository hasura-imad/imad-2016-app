var express = require('express');
var morgan = require('morgan');
var path = require('path');
var config = {
user : 'luckyman000786',database :'luckyman000786',host:'db.imad.hasura-app.io',  port : '5432',password : process.env.DB_PASSWORD
    };
var Pool = require('pg').Pool;
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

var pool = new Pool(config);

app.get('/articles/:id', function (req, res) {

pool.query("SELECT * FROM article_data where id = '"+req.params.id+"'",function(err,result){
    if(err){
        res.status(500).send(err.toString());
        
    }else{
        if(result.rows.length === 0){
res.status(400).send("Article Not Found!! Retry with Valid Article ID");
            
        }else{
            var articleData = result.rows[0];
    res.send(createTemplate(articleData));
}}
    
    
});
   var articleName = req.params.id;
 })

app.get('/login.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
}); 
app.get('/test-db',function(req,res){
    //make a select request
    //return a response with the results
   pool.query('SELECT * FROM user123',function(err,result){
if(err){res.status(500).send(err.toString());}else{res.send(JSON.stringify(result.rows));}
   }); });
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
