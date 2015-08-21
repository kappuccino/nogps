var tools = require('../tools');

function test(req, res){
	return tools.requestSuccess({"ok": true}, req, res);
}

//--

module.exports.test = test;
