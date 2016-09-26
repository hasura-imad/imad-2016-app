var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
      title:'Article one',
      heading:'Article One',
      date:'spt 5, 2016',
      content:`<p>
                        This the article one content This the article one content This the article one content This the article one content This the article one content This the article one content This the article one content 
                    </p>
                    <p>
                        This the article one content This the article one content This the article one content This the article one content This the article one content This the article one content This the article one content 
                    </p>
                    <p>
                        This the article one content This the article one content This the article one content This the article one content This the article one content This the article one content This the article one content 
                    </p>`
    },
    'article-two' : {
        title:'Article Two',
      heading:'Article Two',
      date:'spt 15, 2016',
      content:`<p>
                        This the article Two content 
                    </p>`
    },
    'article-three' :{
        title:'Article Three',
      heading:'Article Three',
      date:'spt 10, 2016',
      content:`<p>
                        This the article Three content 
                    </p>`
    }
};

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
        <html>
        <head>
            <link href="/ui/style.css" rel="stylesheet" />
            <title>
                ${title}
            </title>
            <meta name="viewpost" content="width-device-width, initial-scale=1" /> 
            <style>
            
                
            </style>
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
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
        </body>
    </html>`;   
    return htmlTemplate;
}    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleName', function(req,res) {
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
