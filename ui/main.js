app.get('/home', function (req, res) {
res.sendFile(path.join(__dirname, 'home.html'));
});