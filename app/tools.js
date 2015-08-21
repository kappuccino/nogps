var winston = require('winston');

/**
 * Réponse de l'API pour une requête ou tout s'est bien passé
 *
 * @param data
 * @param req
 * @param res
 */
function requestSuccess(data, req, res){
	res.json(data);
}

/**
 * Réponse de l'API quand on souhaite effectuer une action sur un element introuvable
 *
 * @param req
 * @param res
 */
function requestNotFound(req, res, next){

	res.status(404);

	// respond with json
	if (req.accepts('json')){
		res.send({ error: 'Not found' });
		return;
	}

	// default to plain-text. send()
	return res.type('text').send('Not found: '+ req.url);
}

/**
 * Réponse de l'API en cas d'echec
 *
 * @param err
 * @param req
 * @param res
 * @param next
 *
 * @returns {*}
 */
function requestFail(err, req, res, next){

	res.status(err.code || 500);

	console.error(err);
	console.error(err.stack);

	// respond with html page
	if(req.accepts('html')) {
		return res.send({ error: err.message, stack: err.stack});
	}

	// respond with json
	if(req.accepts('json')) {
		return res.send({ error: err.message, stack: err.stack});
	}

	// default to plain-text. send()
	res.type('text').send(err.message+'\n'+err.stack);


	return next(err)
}

//--

/**
 * Liste des levels possibles
 * - silly
 * - debug
 * - error
 * - info
 */
var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({ level: 'silly', colorize: true }),
		//new (winston.transports.File)({ filename: config.logger.log })
	]
});

// Meilleur rendu dans la console
logger.cli();

// Ne pas quitter sur une error
logger.exitOnError = false;


//--

module.exports.requestSuccess = requestSuccess;
module.exports.requestNotFound = requestNotFound;
module.exports.requestFail = requestFail;
module.exports.logger = logger;


