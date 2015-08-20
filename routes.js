var controllers = require('./controllers');

module.exports.init = function(app) {


	app.post('/accounts/login', controllers.Accounts.login);

};