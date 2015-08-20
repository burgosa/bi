var Sequelize = require('../server').db.Sequelize;
var sequelize = require('../server').db.sequelize;

var Unit = sequelize.define('unit', {
	name: {
		type: Sequelize.STRING,
	},
	abbreviation: {
		type: Sequelize.STRING,
	}
}, {
	timestamps: true,
	paranoid: true,
	underscored: true
});

module.exports = Unit;