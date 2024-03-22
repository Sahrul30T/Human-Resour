'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loginUser extends Model {
    static associate(models) {
      this.belongsTo(models.dataUser,{
        foreignKey: "nik",
      })
    }
  }
  loginUser.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER  
    },
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'loginUser',
  });
  return loginUser;
};