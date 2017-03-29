'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('posts', { id: Sequelize.INTEGER });
  },

  down(queryInterface) {
    return queryInterface.dropTable('posts');
  },
};
