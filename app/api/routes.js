var request = require('./request');

module.exports = function(app){
	app.get('/api/test', request.test);
};