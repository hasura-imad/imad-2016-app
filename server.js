var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles  = { 
    'article-one':{
         title:'article one'
        
    },
    'article-two':{
       title:'article two' 
    },
    'article-three':{
        title:'article three'
    }
};

function createTemplate(data){
    var title=data.title;
var htmlTemplate=
    `<html>
    <head>
       <title> ${
            title
        }
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <h1>this is heading</h1>
        <p>this is paragraph</p>
    </body>
</html>`;
return htmlTemplate;
}

app.get('/:articleName', function (req, res) {
    //articleName=article one
    var articleName=req.parans.articleName;
  res.send(createTemplate(articles[articleName]));
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
