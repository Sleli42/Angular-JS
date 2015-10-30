// SETUP ==============================
var	express = require('express');
var	morgan = require('morgan');
var port = process.env.PORT || 2121

// CONFIG ==============================
var	app = express();

app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));

// ROUTES ==============================
app.get('/', function(req, res) {
	res.render('index.ejs');
});

app.listen(port, function() {
	console.log("server running on port: " + port);
})