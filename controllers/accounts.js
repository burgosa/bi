var base = require('../models');


var Controller = function() {};


Controller.prototype.login = function(req, res) {
	base.Unit.findById(1).then(function(unit) {
		res.send(unit);
	});
};

module.exports = new Controller();