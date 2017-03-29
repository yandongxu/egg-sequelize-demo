'use strict';

module.exports = app => {
  return class UserController extends app.Controller {
    // User list page
    * index() {
      const users = yield this.ctx.service.user.all();
      this.ctx.body = users;
    }

    // User page
    * show() {
      const { params: { id }, service } = this.ctx;
      this.ctx.body = yield service.user.find(id);
    }
  };
};
