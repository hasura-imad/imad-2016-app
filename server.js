
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article={
    'article-one': {
        title:'article one | manoj duli',
        heading:'article one',
        date:'19 th november 2016',
        content:`
            <p>
                    HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE. HAI THIS IS "MANOJ DULI" THIS IS MY FIRST ARTICLE.HAI THIS IS "MANOj DULI"THIS IS MY FIRST ARTICLE. HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE.
            </p>
                            
                            
                     <h1>hai</h1>       
                            
                            
                                 
            <p>
                    HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE. HAI THIS IS "MANOJ DULI" THIS IS MY FIRST ARTICLE.HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE. HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE.
                        
            </p>
            <p>
                    HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE. HAI THIS IS "MANOJ DULI" THIS IS MY FIRST ARTICLE.HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE. HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE.
            </p>` 
                
                
    },
    'article-two': {
        title:'article two | manoj duli',
            heading:'article two',
            date:'15 th november 2016',
            content:`
                <p>
                    HAI THIS IS "MANOJ DULI"THIS IS MY SECOND ARTICLE. HAI THIS IS "MANOJ DULI" THIS IS MY SECOND ARTICLE.
                </p>`
       },
    'article-three': {
        title:'article two | manoj duli',
            heading:'article two',
            date:'11 th november 2016',
            content:`
                <p>
                    HAI THIS IS "MANOJ DULI"THIS IS MY SECOND ARTICLE. HAI THIS IS "MANOJ DULI" THIS IS MY SECOND ARTICLE.
                </p>`
   
    
    }
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
         <div>
             <a href="/">Home</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/article-one">ARTICLE ONE</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/article-two">ARTICLE TWO</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/article-three">ARTICLE THREE</a>
         </div>
         <h3>
            ${heading}
         </h3>
         <div>
            ${date}
         </div>
         <div>
            <p>
                ${content}  
            </p>
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

var counter = 0;
app.get('/counter',function(req,res){
    counter++;
    res.send(counter.toString());
});

app.get('/favicon.ico', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});

var names = [];
app.get('/submit-name',function(req,res){
    //Get the namefrom the request
    var name = req.query.name;
    names.push(name);
    //JSON:Javascript Object Notation
    res.send(JSON.stringify(names));
});
app.get('/:articleName',function (req,res){
  var articleName=req.params.articleName;    
  res.send(createTemplate(article[articleName]));
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