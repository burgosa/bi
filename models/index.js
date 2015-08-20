var User = require('./user');
var Unit = require('./unit');
var ProductSimple = require('./product_simple');


//relations

// ProductSimple
ProductSimple.belongsTo(Unit);

// Unit
Unit.hasMany(ProductSimple);


exports.User = User;
exports.Unit = Unit;
exports.ProductSimple = ProductSimple;