'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('comments', {
      id: Sequelize.INTEGER,
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('comments');
  },
};
