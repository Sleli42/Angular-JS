var	express = require('express');
var morgan = require('morgan');
var	port = process.env.PORT || 2121;

var	app = express();

app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));

app.get('/services', function(req, res) {
	res.render('services.ejs');
});

app.listen(port, function() {
	console.log("server runnning on port " + port);
});