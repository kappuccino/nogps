var tools = require('../tools')
	, logger = tools.logger;

function test(req, res){

	logger.debug('/test');

	return tools.requestSuccess({"ok": true}, req, res);
}

//--

module.exports.test = test;