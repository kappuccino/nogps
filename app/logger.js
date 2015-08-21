var winston = require('winston');

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

module.exports = logger;