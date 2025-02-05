'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('loginUsers','nik',{
      type:Sequelize.INTEGER
    })
    await queryInterface.addConstraint('loginUsers',{
      fields : ['nik'],
      type : 'foreign key',
      references : {
        table : 'dataUsers',
        field : 'nik'
      }
    })

    await queryInterface.addConstraint('loginUsers',{
      fields:['nik'],
      type : 'unique'
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return await queryInterface.removeColumn('loginUsers', 'nik')
  }
};
