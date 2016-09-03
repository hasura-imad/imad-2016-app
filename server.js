var express = require('express');
var app = express();

app.use(express.static('ui'));

app.get('/', function (req, res) {
  res.sendFile('/app/index.html');
});

app.listen(80, function () {
  console.log('IMAD course app listening on port 80!');
});
