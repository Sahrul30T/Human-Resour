'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dataAbsens', {
      idAbsen: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nik: {
        type: Sequelize.INTEGER,
        references: {
          model: "dataUsers",
          key: "nik",
        },
        onDelete : "CASCADE",
        onUpdate: "CASCADE"
      },
      nama: {
        type: Sequelize.STRING
      },
      jamMasuk: {
        type: Sequelize.TIME
      },
      jamKeluar: {
        type: Sequelize.TIME
      },
      keterangan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dataAbsens');
  }
};