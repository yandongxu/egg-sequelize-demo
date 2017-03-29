'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    const { DATE, INTEGER, STRING } = Sequelize;

    return queryInterface.createTable('posts', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: STRING,
      },
      user_id: {
        type: INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      created_at: {
        type: DATE,
      },
      updated_at: {
        type: DATE,
      },
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('posts');
  },
};
