var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articlesContent={
articleOneContent:{
  title:'Article One',
  heading:'Article 1 |Anita MC',
  content:`<p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the content.This is the content.This is the content.
            <p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the 
            <p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the `},
    
    articleTwoContent:{
        title:'Article Two',
        heading:'Article 2 | Anita MC',
        content:`<p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the content.This is the content.This is the content.
            <p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the 
            <p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the `
    },
    articleThreeContent:{
        title:'Article Three',
        heading:'Article 3 | Anita MC',
        content:`<p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the content.This is the content.This is the content.
            <p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the 
            <p>This is the content.This is the content.This is the content.this is the content.This is the content.This is the content.This is the `
    },
    
  
};

function createTemplate(data){
  title=data.title;
  heading=data.heading;
  content=data.content;

var htmlTemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div>
            <a href="/">Home</a>
        </div>
        <hr>
        <div>
            <h1>${heading}</h1>
        </div>
        <hr>
        <div>
            ${content}
        </div>
    </body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
    res.send(createTemplate(articleOneContent));
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
