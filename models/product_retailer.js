var Sequelize = require('../server').db.Sequelize;
var sequelize = require('../server').db.sequelize;

var ProductSimple = sequelize.define('product_simple', {
	slug: {
		type: Sequelize.STRING
	},
	name: {
		type: Sequelize.STRING
	},
	sku: {
		type: Sequelize.STRING
	},
	processed: {
		type: Sequelize.INTEGER
	},
	unit_id: {
		type: Sequelize.INTEGER
	}
}, {
	timestamps: true,
	paranoid: true,
	underscored: true
});

module.exports = ProductSimple;