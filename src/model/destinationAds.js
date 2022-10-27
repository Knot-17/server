const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const DestinationAds = sequelize.define("DestinationAds", {
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
  destinations: {
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
  maxGuest: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image1: {
    type: DataTypes.STRING(300000),
    allowNull: true,
    defaultValue:
      "https://img.freepik.com/free-photo/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual_8353-10047.jpg?w=2000",
  },
  image2: {
    type: DataTypes.STRING(300000),
    allowNull: true,
    defaultValue:
      "https://drscdn.500px.org/photo/1004250494/m%3D900/v2?sig=29e752c80a1d6efd40ab6c75fdf0a1d19f367b7da73e0e8973d759505b4595c3",
  },
});
DestinationAds.sync({ alter: true });

module.exports = DestinationAds;
