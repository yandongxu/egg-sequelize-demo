'use strict';

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('users', [
      {
        name: 'user#1',
        email: 'user1@test.com',
      }, {
        name: 'user#2',
        email: 'user2@test.com',
      },
    ], {});
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
