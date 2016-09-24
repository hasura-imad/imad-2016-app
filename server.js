var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    
    'article-one' : {
      title: 'Article 1',
      heading: 'Article One',
      date: 'Sep 24, 2016',
      content:
      `   <p>This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
                </p>`
    },
    
    'article-two' : {
      title: 'Article 2',
      heading: 'Article Two',
      date: 'Sep 24, 2016',
      content:
      `   <p>This is the content for my second article. This is the content for my second article. This is the content for my   second article. This is the content for my second article. This is the content for my second article.
          </p>
          <p>This is the content for my second article. This is the content for my second article. This is the content for my   second article. This is the content for my second article. This is the content for my second article.
          </p>`
    },
    
    'article-three' : {
      title: 'Article 3',
      heading: 'Article Three',
      date: 'Sep 24, 2016',
      content:
      `   <p>This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article.
          </p>
          <p>This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article.
          </p>
          <p>This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article.
          </p>`
    }
};

function createTemplate(data){

var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;

var htmlTemplate = 
  `<html>
    
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <div>
            <h3>
                ${heading}
            </h3>
        </div>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>

    </html>`;
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res) {
    res.send(createTemplate(articleOne));
});

app.get('/article-two', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
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

var port = 8081; // Use 8080 for local development because you might already have apache running on 80
app.listen(8081, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
