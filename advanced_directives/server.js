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
app.get('/show&hide', function(req, res) {
	// ng-show && ng-hide
	res.render('dir_show_hide.ejs');
});

app.get('/repeat', function(req, res) {
	// ng-repeat
	res.render('dir_repeat.ejs');
});

app.get('/switch', function(req, res) {
	// ng-switch
	res.render('dir_switch.ejs');
})

app.get('/if', function(req, res) {
	// ng-if
	res.render('dir_if.ejs');
})

app.listen(port, function() {
	console.log("server running on port: " + port);
})