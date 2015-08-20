'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable(
			'users', {
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true
				},
				first_name: {
					type: Sequelize.STRING,
					validate: {
						allowNull: false
					}
				},
				last_name: {
					type: Sequelize.STRING,
					validate: {
						allowNull: false
					}
				},
				email: {
					type: Sequelize.STRING,
					validate: {
						allowNull: false,
						isEmail: true
					}
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
						isInt: true,
						allowNull: false
					}
				},
				updated_at: {
					type: Sequelize.DATE
				},
				created_at: {
					type: Sequelize.DATE
				},
				deleted_at: {
					type: Sequelize.DATE
				}
			}
		);
	},

	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('users');
	}
};