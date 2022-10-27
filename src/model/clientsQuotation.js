const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const ClientsQuotation = sequelize.define("ClientsQuotation", {
  dealerID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Dealers",
      key: "id",
    },
  },
  clientID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "id",
    },
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weddingdate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  guestcount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weddingvenue: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  videochat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weddingdescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

ClientsQuotation.sync({ alter: true });

module.exports = ClientsQuotation;
