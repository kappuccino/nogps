var test = require('tape');

test("Get a dummy response", function(t){

	var request = require('request')
		, express = require('../express');

	// On lance l'instance d'express
	express.start(function(){

		request.get({
			url: 'http://localhost:3000/api/test',
			json: true
		}, function(err, response, body){
			express.stop();
			if(err) return t.end(err);
			t.true(body.ok);
			t.end();

		});
	});
});