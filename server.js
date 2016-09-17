var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles = {
    
    article-one : {
    title: 'Article One: Akshat',
    heading: 'Article One,',
    date: 'Sept 5, 2016',
    content: `
            <p>
                This is the content of article one.
            </p>
            <p>
                This is the content of article one.
                This is the content of article one.This is the content of article one.  
            </p>
            <p>
                This is the content of article one.
            </p>  `
    }  
    
};


function CreateTemplate(data){
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
                <meta name = "viewport" content = "width=device-width, initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class = "head">
                    <div>
                        <a href = "/">Home</a>
                    <hr/>
                        <h1>
                            ${heading}
                        </h1>
                        <div>
                            ${date}
                        </div>
                    </div>
                </div>
                <div class = "container">
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        </html>  `;
        return htmlTemplate;
}

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName', function (req,res) {
    var articleName = req.params.articleName;
    res.send(CreateTemplate(articles[articleName]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
