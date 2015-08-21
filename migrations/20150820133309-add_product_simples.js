'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable(
			'product_simples', {
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true
				},
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
				},
				active: {
					type: Sequelize.BOOLEAN
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
		return queryInterface.dropTable('product_simples');
	}
};