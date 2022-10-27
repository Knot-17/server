const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const DecorAds = sequelize.define("DecorAds", {
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
  crews: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  websiteurl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  district: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  instagram: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  facebook: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image1: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
  image2: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
});

module.exports = DecorAds;
