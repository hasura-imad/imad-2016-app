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

var app = express();
app.use(morgan('combined'));

app.get('/startup',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'startup.html'));
});
app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

/*
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

app.get('/articles/:articleName', function (req,res) {
    // : operator is from express utility which compares coming parameter with current vars
    var articleName = req.params.articleName;
    
    pool.query("SELECT * from article WHERE  title = " + req.params.articleName, function(req,res){
        if(err){
            res.status(500).send(err.toString())
        } else{
            if(result.row.length === 0){
                res.status(400).send('Article Not Found!');
            } else {
                var articleData = result.rows[0];
                res.send(CreateTemplate(articleData));
            }
        }
    })
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
*/

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
