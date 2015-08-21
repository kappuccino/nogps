var express = require('express')
	, exphbs  = require('express-handlebars')
	, logger = require('morgan')
	, bodyParser = require('body-parser')
	, errorHandler = require('errorhandler');

var server, app, hbs;

app = express();

app.engine('handlebars', exphbs({
	layoutsDir: 'app/front/views/layouts',
	partialsDir: 'app/front/views/partials',
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.set("views", 'app/front/views');
app.set('port', 3000);
app.set('env', 'dev');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorHandler());


function start(cb){

	require('./app/api/routes')(app);
	require('./app/front/routes')(app);

	// Let's go
	server = app.listen(app.get('port'), function(){
		if(cb) cb(app);
	});

}

function stop(cb){
	server.close();
	if(cb) cb(server);
}

exports.start = start;
exports.stop = stop;
