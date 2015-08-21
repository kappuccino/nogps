var express = require('./express');

express.start(function(app){
	console.log('Express started on port', app.get('port'));
});

