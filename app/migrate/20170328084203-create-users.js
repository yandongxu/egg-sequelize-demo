'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    const { INTEGER, STRING } = Sequelize;
    return queryInterface.createTable('users', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: STRING(8),
      email: STRING(32),
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('users');
  },
};
