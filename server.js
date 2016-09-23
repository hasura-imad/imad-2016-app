var express = require('express'); //express is the keyword, to create a webserver so that we don't have to set listhn etc
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne ={
    title:'Article One|Saif Shines',
    heading:'Article One',
    date:'Sept 23 2016',
    content: `
     <div>
            <p>
                This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.
            </p>
              <p>
                This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.
            </p>
              <p>
                This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.
            </p>
              <p>
                This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.This is my first Para,boss.
            </p>
        </div>
    `
    
};

function createTemple(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
    <body>
    <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
          ${content}
        </div>
    </div>    
    </body>
</html>
';
   `    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
 res.send(createTemplate(articleOne));  
    
});
app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));   
});
app.get('/article-three',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));   
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
