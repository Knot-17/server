const {DataTypes} = require("sequelize");
const sequelize = require("../database");
const User = sequelize.define("User",{
    firstname :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastname :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    dob :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    gender :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    mobile :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    address :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    city :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    username :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    otp :{
        type:DataTypes.STRING,
        allowNull:false,
    },
});

module.exports = User;