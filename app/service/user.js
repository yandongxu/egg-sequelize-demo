'use strict';

module.exports = app => {
  class User extends app.Service {
    * all() {
      const { model } = this.ctx;
      const users = yield model.User.findAll({
        attributes: [ 'id', 'name', 'email' ],
        // http://stackoverflow.com/questions/21835827/sequelize-model-hasone-error-model-is-not-associated-to-modeltwo
        // http://docs.sequelizejs.com/en/latest/docs/models-usage/#eager-loading

        // NOTE: 如果 define 时未声明 alias(as), 可以直接 include
        // include: [ model.Post ]

        // NOTE: 如果 define 时有声明 alias(as), 则必须在这里 as
        include: [{
          model: model.Post,
          as: 'posts',
        }],
      });
      return users;
    }

    * find(uid) {
      const { model } = this.ctx;
      const user = yield model.User.findById(uid, {
        attributes: [ 'id', 'name', 'email' ],
        include: [{
          model: model.Post,
          as: 'posts',
          attributes: [ 'id', 'title' ],
        }],
      });
      // NOTE: getAssociation
      // console.log(yield user.getPosts())

      return user;
    }
  }

  return User;
};
