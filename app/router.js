'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/users', 'user.index');
  app.get('/users/:id', 'user.show');
};
