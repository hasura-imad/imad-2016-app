// Calling the express Framework of JavaScript, which manages port, lisetening extra.
var express = require('express');
// This morgan is used to log, the request details.
var morgan = require('morgan');
var path = require('path');

var app = express();
//This tells express to log via morgan
//and morgan to log in the "combined" pre-defined format
app.use(morgan('combined'));
/*
// This *articles* is key-format ! 
// aritcles* holds three keys - `article-one`, `article-two`, `article-three`
// Each again has its own key-variables - `title`,`heading`,`date`,`content`
var articles = {
    'article-one': {
      title: 'Article One | Saif Shines',
      heading: 'Article One',
      date: 'Sep 20, 2016',
      content: `
          <p>
              This is the content for my first article. This is the content for my first article. 
              This is the content for my first article. This is the content for my first article. 
              This is the content for my first article. This is the content for my first article. 
          </p>
          <p>
              This is the content for my first article. This is the content for my first article. 
              This is the content for my first article. This is the content for my first article. 
              This is the content for my first article. This is the content for my first article. 
          </p>
          <p>
              This is the content for my first article. This is the content for my first article. 
              This is the content for my first article. This is the content for my first article. 
              This is the content for my first article. This is the content for my first article. 
          </p>`
    },
    'article-two': {
      title: 'Article Two | Saif Shines',
      heading: 'Article Two',
      date: 'Sep 24, 2016',
      content: `
          <p>
              This is the content for my second article.
          </p>`
    },
    'article-three': {
      title: 'Article Three | Saif Shines',
      heading: 'Article Three',
      date: 'Sep 29, 2016',
      content: `
          <p>
              This is the content for my third article.
          </p>`
    }
};
// 
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
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
    `;
    return htmlTemplate;
}
*/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
   counter = counter + 1;
   res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function(req, res) { // /submit-name?name=xxxx
  // Get the name from the request
  var name = req.query.name;
  
  names.push(name);
  // JSON: Javascript Object Notation
  res.send(JSON.stringify(names));
});

app.get('/:articleName', function (req, res) {
  // articleName == article-one
  // articles[articleName] == {} content object for article one
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
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

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
