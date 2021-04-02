'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.belongsToMany(models.Orders, {
        through: "ProductsOrders",
        as: "orders",
        foreignKey: "product_id",
        otherKey: "order_id",
        onDelete: "CASCADE",
      })
    }
  };
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.REAL,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    sub_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};