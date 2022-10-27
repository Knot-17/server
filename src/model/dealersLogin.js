const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Dealers = require("./dealers");
const DealersLogin = sequelize.define("DealersLogin", {
  dealersID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Dealers",
      key: "id",
    },
  },
  services: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = DealersLogin;
