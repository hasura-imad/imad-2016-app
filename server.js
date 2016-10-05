var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article = {
    title: 'Article',
    heading: 'Article',
    date: 'Sep 21 2016',
    content: ` Stuff goes here`
};

var counter =0;

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `<html>
        <head>
            <link href="/ui/style.css" rel="stylesheet" />
            ${title}
         </head>     
         <body>
            <div>
                <a href="/"> Home </a>
            </div>
            <hr/>
            <div class="center text-big">
                <h1>
                    ${heading}
                </h1>
            </div>
            <div class="center text-big">
                ${date}
            </div>
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

app.get('/counter', function (req,res){
    counter++;
    res.send(counter.toString());
});

app.get('/article-one', function (req,res){
	 res.send(createTemplate(article));
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

var names=[];
app.get('/submit-name/:name', function(req, res) {
   var name = req.params.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
