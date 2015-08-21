'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable(
			'units', {
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true
				},
				name: {
					type: Sequelize.STRING,
				},
				abbreviation: {
					type: Sequelize.STRING,
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
		return queryInterface.dropTable('units');
	}
};