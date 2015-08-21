'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable(
			'product_retailers', {
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true
				},
				slug: {
					type: Sequelize.STRING,
				},
				name: {
					type: Sequelize.STRING,
				},
				product_simple_id: {
					type: Sequelize.INTEGER,
				},
				retailer_id: {
					type: Sequelize.INTEGER,
				},
				location_id: {
					type: Sequelize.INTEGER,
				},
				retailer_sku: {
					type: Sequelize.STRING
				},
				price: {
					type: Sequelize.DECIMAL
				},
				special_price: {
					type: Sequelize.DECIMAL
				},
				retailer_price: {
					type: Sequelize.DECIMAL
				},
				retailer_special_price: {
					type: Sequelize.DECIMAL
				},
				active: {
					type: Sequelize.BOOLEAN
				},
				product_simple_active: {
					type: Sequelize.BOOLEAN
				},
				fee: {
					type: Sequelize.DECIMAL
				},
				tax: {
					type: Sequelize.DECIMAL
				},
				stock: {
					type: Sequelize.INTEGER
				},
				admin_check: {
					type: Sequelize.BOOLEAN
				},
				visible: {
					type: Sequelize.BOOLEAN
				},
				boost: {
					type: Sequelize.INTEGER
				},
				unit_id: {
					type: Sequelize.INTEGER
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