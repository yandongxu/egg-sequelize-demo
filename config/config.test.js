'use strict';

exports.sequelize = {
  dialect: 'mysql',
  database: 'database-test',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: '',

  define: {
    freezeTableName: false,
    underscored: true,
  },

  migrationStorageTableName: 'sequelize_meta',
};
