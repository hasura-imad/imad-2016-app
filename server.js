var express = require('express'); //Create the web server
var morgan = require('morgan'); // Output logs
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        heading: "Article One",
        date: "Sep 5,2016",
        title: "Adeline's First Article",
        content : `
            <p>
                This is the first paragraph in my article. I am planning to write some nonsense in this article. I hope you don't read all the nonsense that I am writing. I wish you would go and mind y our own business.
            </p>
            <p>
                This is the second paragraph in my article. I am planning to write some nonsense in this article. I hope you don't read all the nonsense that I am writing. I wish you would go and mind y our own business.
            </p>
        `
    },
    'article-two': {
        heading: "Article Two",
        date: "Sep 6,2016",
        title: "Adeline's Second Article",
        content : `
            <p>
                This is the first paragraph in my second article. I am planning to write some nonsense in this article. I hope you don't read all the nonsense that I am writing. I wish you would go and mind y our own business.
            </p>
            <p>
                This is the second paragraph in my article. I am planning to write some nonsense in this article. I hope you don't read all the nonsense that I am writing. I wish you would go and mind y our own business.
            </p>
        `
    },
    'article-three' :{
        heading: "Article Three",
        date: "Sep 7,2016",
        title: "Adeline's Third Article",
        content : `
            <p>
                This is the first paragraph in my third article. I am planning to write some nonsense in this article. I hope you don't read all the nonsense that I am writing. I wish you would go and mind y our own business.
            </p>
            <p>
                This is the second paragraph in my article. I am planning to write some nonsense in this article. I hope you don't read all the nonsense that I am writing. I wish you would go and mind y our own business.
            </p>
        `
    }
};


function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var content = data.content;
    var heading = data.heading;
    
    var htmlTemplate = `
    <html>
        <head>
            <title> ${title} </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
            
        </head>
        
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3> ${heading} </h3>
                <div> ${date} </div>
                <div>
                   ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
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
