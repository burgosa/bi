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
				},
				last_name: {
					type: Sequelize.STRING,
				},
				email: {
					type: Sequelize.STRING,
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