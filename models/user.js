var Sequelize = require('../server').db.Sequelize;
var sequelize = require('../server').db.sequelize;


var User = sequelize.define('user', {
	first_name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	last_name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		validate: {
			isEmail: true
		},
		allowNull: false
	},
	password: {
		type: Sequelize.STRING
	},
	salt: {
		type: Sequelize.STRING
	},
	hash: {
		type: Sequelize.STRING
	},
	profile: {
		type: Sequelize.INTEGER,
		validate: {
			isInt: true
		},
		allowNull: false,
		defaultValue: 1
	}
}, {
	timestamps: true,
	paranoid: true,
	underscored: true
});


module.exports = User;