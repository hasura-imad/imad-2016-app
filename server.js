var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool

var config = {
    user: 'akshatbhargava123',
    database: 'akshatbhargava123',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD // environment variable
};

var articles = {
    
    articleOne : {
    title: 'Article One Akshat',
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

var pool = new Pool(config);
app.get('/test-db', function(req, res){
    // make a select command
    // return the results
    pool.query('SELECT * FROM test' ,function(err, result){
        if(err){
            console.log('its an error');
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result.rows));
        }
    });
});

var counter = 0;
app.get('/counter', function(req, res){
    counter++;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name/:name', function(req, res){
    // Get the name from the request
    var name = req.params.name;
    
    names.push(name);
    
    res.send(JSON.stringify(names));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/articleName', function (req,res) {
    // : operator is from express utility which compares coming parameter with current vars
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
