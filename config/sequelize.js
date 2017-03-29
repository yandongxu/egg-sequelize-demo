'use strict';

const local = require('./config.local');
const test = require('./config.test');
const prod = require('./config.prod');

module.exports = {
  development: local.sequelize,
  test: test.sequelize,
  production: prod.sequelize,
};
