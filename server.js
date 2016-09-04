var express = require('express');
var morgan = require('morgan');
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile('/app/index.html');
});

app.listen(80, function () {
  console.log('IMAD course app listening on port 80!');
});
