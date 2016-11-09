var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var app = express();
app.use(morgan('combined'));

var config = {    
    user: 'gaurav00012',
    database: 'gaurav00012',
    password: 'db-gaurav00012-40955', // process.env.DB_PASSWORD
    host: 'db.imad.hasura-app.io',
    port: '5432'
};

var pool = new Pool(config);

// [question, option1, ... , option4, answer][i]; //  0 = question, optionN = N, answer = length-1

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'startup.html'));
});

app.use(express.static(path.join(__dirname, 'ui')));

// GETTING MATERIAL FOR QUIZ FROM DB
app.get('/get-:table' , function(req, res) {
    var tableName = req.params.table.toString();
    var query = "SELECT * from \"" + tableName + "\""; 
    pool.query(query, function(error, results){
        if(error){
            res.status(500).send(err.toString());
        } else {
            res.send(JSON.stringify(results.rows[0].question));
        }
    });
});

// GETTING LIST TO USERS (WORST PRACTISE NO SECURITY)
app.get('/users' , function(req, res) {
   pool.query('SELECT * from users', function(err, results) {
    if(err){
        res.status(500).send(err.toString());
    }
    else{
        res.send(JSON.stringify(results.rows));
    }
   });
});

// FOR ADDING NEW USERS TO DB
app.get('/add-:info' , function(req, res){
    var info = req.params.info, temp;
    var username = "", password ="";
    for(var i = 0; i < info.length; i++){
        if(info[i] !== '-'){
            username += info[i];
        } else{
            temp = i;
            break;
        }
    }
    for(i = temp + 1; i < info.length; i++){
        password += info[i];
    }
    pool.query("INSERT INTO users (name, password) VALUES (" + "'" + username + "'" + "," + "'" + password + "'" + ");", function(err, results) {
    if(err){
        res.status(500).send(err.toString());
    }
    else{
        res.send("User Registered!!!");
    }
   });
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
