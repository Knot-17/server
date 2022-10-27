const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Dealers = require("./dealers");
const Payment = sequelize.define("Payment", {
  dealersID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  clientsID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Payment;
