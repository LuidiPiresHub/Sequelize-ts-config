import { QueryInterface, DataTypes } from "sequelize";

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Luidi Pires',
      },
      {
        name: 'Laura Dias',
      },
      {
        name: 'Ewerton Ferreira',
      },
      {
        name: 'Chrystian Strummiello',
      },
      {
        name: 'Juliana Martinelli',
      },
      {
        name: 'João Possamai',
      },
    ], {});
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('users', {}, {});
  }
};
