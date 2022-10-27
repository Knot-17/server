const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const PhotoAds = sequelize.define("PhotoAds", {
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
  studios: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
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

module.exports = PhotoAds;
