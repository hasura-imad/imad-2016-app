var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
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
    
};
 function createTemplate(data){
     var title = data.title;
     var date = data.date;
     var heading = data.heading;
     var content = data.content;
     var htmlTemplate = `
 <html>
  <head>
        <title>
            ${heading} 
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
          <link href="/ui/style.css" rel="stylesheet" />
       
    </head>
    <body>
        <div class="container">
            <div>
               <a href='/'>Home</a> 
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
</html> `;

return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req,res) {
    //articleName == article-one
    //articles[articleName]=={} content object for article one
    var articleName = req.params.articleName;
     res.send(createTemplate(articles[articleName]));
     
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
    res.send("HELLO!!!")
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
