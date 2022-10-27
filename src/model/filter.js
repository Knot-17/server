const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./user");
const Filter = sequelize.define("Filter", {
  filterID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  ClientID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  partnerFirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  partnerLastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  place: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  budget: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  guestcount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  season: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Filter.sync({ alter: true });

module.exports = Filter;
