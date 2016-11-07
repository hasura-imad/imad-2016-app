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

/*var articles = {
   'article-one' : {
        title : 'Article One : Gaurav Aggarwal',
        heading : 'Article One',
        date : 'Sep 9 , 2016',
        content : ` <p>
                    This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.
                </p>
                 <p>
                    This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.
                </p>
                 <p>
                    I am batman 
                </p>`
    },
   'article-Two' : {
        title : 'Article Two : Gaurav Aggarwal',
        heading : 'Article Two',
        date : 'Sep 11 , 2016',
        content : `   <p>
                    This content is of article two...BAT2.
                </p>
               
                 <p>
                    This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.
                </p>`
       
   },
   'article-Three' : { 
       title : 'Article Three : Gaurav Aggarwal',
        heading : 'Article Three',
        date : 'Sep 13 , 2016',
        content : `
        <p>
                    This content is of article three...BAT3.
                    Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and first appeared in Detective Comics #27 (May 1939). Originally named the "Bat-Man", the character is also referred to by such epithets as the Caped Crusader, the Dark Knight, and the World's Greatest Detective.
                </p>
               
                 <p>
                    This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.This is the fake content.
                </p>`
        
    }
    
}*/

var pool = new Pool(config);

app.get('/users' , function(req, res){
   pool.query('SELECT * from users', function(err, results) {
    if(err){
        res.status(500).send(err.toString());
    }
    else{
        res.send(JSON.stringify(results.rows));
    }
   });
});

app.get('/:info' , function(req, res){
    var info = req.params.info, temp;
    var username = "", password ="";
    for(var i = 0; i < info.length; i++){
        if(info[i] !== '-'){
            username += info[i];
        } else{
            temp = i
            break;
        }
    }
    for(i = temp + 1; i < info.length; i++){
        password += info[i];
    }
    pool.query(`INSERT INTO users (name, password) VALUES (` + username + `,` + password +`)`, function(err, results) {
    if(err){
        res.status(500).send(err.toString());
    }
    else{
        res.send("User Registered!!!");
    }
   });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'startup.html'));
});

/*app.get('/test-db', function (req, res){
   pool.query('SELECT * from users', function(err, results) {
        if(err){
            res.status(500).send(err.toString());
        } 
        else{
            res.send(JSON.stringify(results.rows));
        }
   });
});*/

app.use(express.static(path.join(__dirname, 'ui')));

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
