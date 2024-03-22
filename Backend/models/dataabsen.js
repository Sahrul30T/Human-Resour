'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dataAbsen extends Model {
    static associate(models) {
      dataAbsen.belongsTo(models.dataUser,{
        foreignKey: "nik",
      })
    }
  }
  dataAbsen.init({
    idAbsen: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nik: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references:{model:"datauser", key:"nik"},
      onDelete : "CASCADE",
      onUpdate: "CASCADE"
    }, 
    nama: DataTypes.STRING,
    jamMasuk: DataTypes.TIME,
    jamKeluar: DataTypes.TIME,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dataAbsen',
  });
  return dataAbsen;
};