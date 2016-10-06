var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Viku1= {
    title :'article 1',
    date :'6 oct 2016',
    heading : 'Article 1 about ms dhoni',
    content :`<p>
            
            This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD.
            This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD.This is about MSD..This is about MSD.This is about MSDThis is about MSDThis is about MSD.
        </p>`
    
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
    <div>
        ${date}
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

app.get('/Viku1', function (req, res) {
  res.send(createtemplate(Viku1));
});

app.get('/Viku2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Viku2.html'));
});
app.get('/Viku3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Viku3.html'));
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
