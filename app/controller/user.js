'use strict';

module.exports = app => {
  return class UserController extends app.Controller {
    * index() {
      const users = yield this.ctx.model.User.findAll({
        attributes: [ 'name', 'email' ],
      });
      this.ctx.body = users;
    }

    * show() {
      const user = yield this.ctx.model.User.findByEmail('test1@test.com');
      this.ctx.body = user;
    }
  };
};
