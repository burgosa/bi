// Instantiate dependencies
var express = require('express'),
	fs = require('fs'),
	logger = require('morgan'),
	compression = require('compression'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	csrf = require('csurf'),
	errorHandler = require('errorhandler'),
	responseTime = require('response-time');
//favicon = require('serve-favicon');


var config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))[process.env.MERCADONI_API_ENV];
// Express configuration
var app = express();

app.set('env', process.env.MERCADONI_API_ENV);
console.log(app.get('env'));

app.set('views', './views');
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 8010);

app.set('trust proxy', true);

app.set('json spaces', 0);
app.set('case sensitive routing', true);
app.set('strict routing', false);
app.set('x-powered-by', false);
app.set('subdomain offset', 3);
// app.disable('etag');

if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			msg: err.message,
			error: err
		});
	});
}

// Set Database
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.mysql.db, config.mysql.user, config.mysql.password, {
	host: config.mysql.host,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});
var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports.db = db;


// Middlewares
app.use(compression({
	threshold: 1
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(cookieParser(config.cookie.parser));
app.use(session({
	key: config.cookie.key,
	secret: config.cookie.parser,
	saveUninitialized: true,
	resave: true,
	rolling: false
}));

/*app.use(csrf({
	value: function(req) {
		return (req.body && req.body.cross_site_request_forgery_value == 'hola');
	}
}));*/

app.use(errorHandler());
app.use(responseTime());
//app.use(favicon('./public/favicon.ico'));

app.use(logger('tiny'));

// routes
app.use('/public', express.static('./public'));
require('./routes').init(app);

//
var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});