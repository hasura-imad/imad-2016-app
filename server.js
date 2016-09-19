var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-one' : {
    title: 'Article One | Vinit Kumar',
    heading: 'Article One',
    date: 'September, 19 2016',
    content: `<p>
                    This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article. 
                </p>
                <p>
                    This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article. 
                </p>
                <p>
                    This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article. 
                </p>`
    
},
    'article-two' : {
        title: 'Article Two | Vinit Kumar',
        heading: 'Article Two',
        date: 'September, 20 2016',
        content: `<p>
                    This is my second article.
                    </p>`},
    'article-three' : {
        title: 'Article Two | Vinit Kumar',
        heading: 'Article Three',
        date: 'September, 21 2016',
        content: `<p>
                    This is my third article.
                </p>`
    }
};
function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
        <html>
            <head>
                <title>${title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Hone</a>
                    </div>
                   <hr>
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
        </html>` ;
        return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
    
});

/*app.get('/article-one', function (req, res){
   // res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
   res.send(createTemplate(articleOne));
});
app.get('/article-two', function (req, res){
  //  res.send('<h1>Article two will be resquested and served</h1>');
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res){
    //res.send('Article three will be resquested and served');
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
*/
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
