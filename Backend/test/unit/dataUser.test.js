const { dataUser } = require('../../models');

describe('dataUser model', () => {
  describe('associations', () => {
    it('should have a hasOne association with dataUser model', () => {
      const association = dataUser.associations.dataUser;
      expect(association).toBeDefined();
      expect(association.foreignKey).toEqual('nik');
    });
  });

  describe('properties', () => {
    it('should have correct properties', () => {
      expect(dataUser.tableName).toEqual('dataUser');

      const properties = {
        nik: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: 'INTEGER'
        },
        name: {
          type: 'STRING'
        },
        jenisKelamin: {
          type: 'STRING'
        },
        alamat: {
          type: 'STRING'
        },
        status: {
          type: 'STRING'
        }
      };

      Object.keys(dataUser.rawAttributes).forEach((attr) => {
        expect(dataUser.rawAttributes[attr]).toEqual(properties[attr]);
      });
    });
  });
});
