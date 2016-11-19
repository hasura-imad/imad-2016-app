var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').Pool;

var config={
    user : 'golua94',
    database :'golua94',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};


var app = express();
app.use(morgan('combined'));
var currentdate=new Date();
 
var articles= {
  'Viku1':{  title :'My Article',
    date :currentdate,
    heading : 'Article 1 about ms dhoni',
    content :`<p>
            
            This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD.
            This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD..This is about MSD.This is about MSDThis is about MSDThis is about MSD.
        </p>`},
        
   'Viku2':{  title :'article 2',
    date :'6 oct 2016',
    heading : 'Article 2 about sachin',
    content :`<p>
            
            This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD.
            This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD..This is about MSD.This is about MSDThis is about MSDThis is about MSD.
        </p>`},     
        
         'Viku3':{  title :'article 3',
    date :'6 oct 2016',
    heading : 'Article 3 about VIKASH KUMAR',
    content :`<p>
            
            This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD.
            This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD..This is about MSD.This is about MSDThis is about MSDThis is about MSD.
        </p>`}    
    
};
 
function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var date=data.date;

var htmltemplate=`
    <html>
<head>
<title>
${title}
</title>
<meta name='viewport' content="width=device-width initial-scale=1"/>

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
    <div >
${date.toDate()}
    </div>
    
    <div>
      ${content}
        </div>
    </div>
</body>

</html>

   `;

   
return htmltemplate;}






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var pool=new pool(config);
app.get('/test-db', function(req,res){
pool.query('SELECT * FROM Students', function(err,result){
   if(err){
       res.status(500).send(err.toString());
   } else{
       res.send(JSON.stringify(result.rows));
   }
    
});    
});




var counter =0;
app.get('/counter', function (req, res) {
   counter=counter +1;
  res.send(counter.toString());
});

var names=[];
app.get('/submit_name', function (req, res) {// /submit_name?name=xxxx
 
 
 var name=req.query.name;
 names.push(name);
 res.send(JSON.stringify(names));
 
 
});

app.get('/articles/:articlename', function (req, res) {
  
  
  pool.query("SELECT * FROM article where title = '" + req.params.articlename + "'", function(err, result){
     if(err) {
         res.status(500).send(err.toString());
     }
     if(result.rows.length===0){
         res.status(404).send("article not found");
     }
     else{
         var Vikuname=result.rows[0];
  res.send(createtemplate(Vikuname));
     }
  });
  
  
 
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/ram', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
