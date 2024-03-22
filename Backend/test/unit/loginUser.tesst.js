const { loginUser } = require('../models');

describe('loginUser model', () => {
  describe('associations', () => {
    it('should have a belongsTo association with dataUser model', () => {
      const association = loginUser.associations.dataUser;
      expect(association).toBeDefined();
      expect(association.foreignKey).toEqual('nik');
    });
  });

  describe('properties', () => {
    it('should have correct properties', () => {
      expect(loginUser.tableName).toEqual('loginUser');

      const properties = {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: 'INTEGER'
        },
        nama: {
          type: 'STRING'
        },
        email: {
          type: 'STRING'
        },
        password: {
          type: 'STRING'
        }
      };

      Object.keys(loginUser.rawAttributes).forEach((attr) => {
        expect(loginUser.rawAttributes[attr]).toEqual(properties[attr]);
      });
    });
  });
});
