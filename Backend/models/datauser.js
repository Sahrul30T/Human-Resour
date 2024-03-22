'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dataUser extends Model {
    static associate(models) {
      this.hasOne(models.dataUser,{foreignKey:"nik"})
    }
  }
  dataUser.init({
    nik: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    jenisKelamin: DataTypes.STRING,
    alamat: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dataUser',
  });
  return dataUser;
};