var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
    user: 'achyut92',
    database: 'achyut92',
    host: 'http://db.imad.hasura-app.io',
    port: '5432',
    password: 'process.env.DB_PASSWORD'
};

var app = express();
app.use(morgan('combined'));

var pool = new Pool(config); 

var articles = {
	'article-one': {
	title: 'Article One',
	date: 'Sep 18, 2016',
	content: `<p>This is the content for article one.This is the content for article one.This is the content for article one.
			</p>
			<p>This is the content for article one.This is the content for article one.This is the content for article one.
			</p>
			<p>This is the content for article one.This is the content for article one.This is the content for article one.</p>`
		},

	'article-two': {
	title: 'Article Two',
	date: 'Sep 19, 2016',
	content: `<p>This is the content for article two.This is the content for article two.This is the content for article two.
			</p>
			<p>This is the content for article two.This is the content for article two.This is the content for article two.
			</p>
			<p>This is the content for article two.This is the content for article two.This is the content for article one.</p>`
		},

	'article-three': {
	title: 'Article Three',
	date: 'Sep 20, 2016',
	content: `<p>This is the content for article three.This is the content for article three.This is the content for article three.
			</p>
			<p>This is the content for article three.This is the content for article three.This is the content for article three.
			</p>

			<p>This is the content for article three.This is the content for article three.This is the content for article three.</p>`
		}
};


function createTemplate(data){
	var title = data.title;
	var date = data.date;
	var content = data.content;

	var htmlTemplate = `<html>
	<head>
		<title>${title}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link href="/ui/style.css" rel="stylesheet" />
	</head>
	<body>
		<div class="container">
			<div>
		<a href="/">Home</a>
		</div>
		<hr/>
		<h3>
		${title}
		</h3>
		<div>${date}</div>
		<div>
			${content}
		</div>
		</div>
	</body>
</html>`;

return htmlTemplate;
}

var counter = 0;

app.get('/counter', function(req,res) {
	counter = counter + 1;
	res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function(req,res){

	var name = req.query.name;
	names.push(name);
	res.send(JSON.stringify(names));
});

app.get('/test-db',function(err,res){
   
   pool.query('SELECT * FROM test',function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }else{
           res.send(JSON.stringify(result.rows));
       }
   });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName', function (req, res) {

	var articleName = req.params.articleName;

  res.send(createTemplate(articles[articleName]));

});





var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
