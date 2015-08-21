var request = require('./request');

module.exports = function(app) {

	app.   get('/', request.home);

};